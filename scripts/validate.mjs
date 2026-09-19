// 校验 src/content/docs 下所有 .mdx 的 frontmatter 是否符合约定 schema。
// 用法：npm run validate
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { docsSchema } from '../src/lib/content-schema.mjs';
import yaml from 'js-yaml';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
const DOCS = join(ROOT, 'src/content/docs');


function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (p.endsWith('.mdx') || p.endsWith('.md')) yield p;
  }
}

function extractFrontmatter(content) {
  const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  return m ? m[1] : null;
}

let failed = 0;
let checked = 0;

for (const file of walk(DOCS)) {
  const rel = relative(ROOT, file);
  const content = readFileSync(file, 'utf8');
  const fm = extractFrontmatter(content);
  if (fm == null) {
    console.error(`✗ ${rel}: 缺少 frontmatter`);
    failed++;
    continue;
  }
  let data;
  try {
    data = yaml.load(fm) ?? {};
  } catch (e) {
    console.error(`✗ ${rel}: YAML 解析失败 —— ${e.message}`);
    failed++;
    continue;
  }
  const result = docsSchema.safeParse(data);
  checked++;
  if (!result.success) {
    for (const issue of result.error.issues) {
      console.error(`✗ ${rel}: ${issue.path.join('.') || '(root)'} —— ${issue.message}`);
    }
    failed++;
  }
}

console.log(`\n校验完成：${checked} 个文件，${failed ? `${failed} 个失败` : '全部通过'}。`);
process.exit(failed ? 1 : 0);
