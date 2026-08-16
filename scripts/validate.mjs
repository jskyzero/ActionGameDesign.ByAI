// 校验 src/content/docs 下所有 .mdx 的 frontmatter 是否符合约定 schema。
// 用法：npm run validate
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { z } from 'zod';
import yaml from 'js-yaml';

const ROOT = new URL('../', import.meta.url).pathname;
const DOCS = join(ROOT, 'src/content/docs');

// 与 src/content.config.ts 的 extend 字段保持一致（title 由 Starlight 提供）
const schema = z.object({
  title: z.string().min(1),
  kind: z.enum(['talk', 'essay']).default('talk'),
  year: z.number().optional(),
  section: z.string().optional(),
  status: z.enum(['done', 'wip']).default('done'),
  insight: z.string().optional(),
  references: z
    .array(
      z.object({
        label: z.string(),
        url: z.string(),
        type: z.enum(['original', 'translation', 'other']).default('other'),
      })
    )
    .default([]),
  tags: z.array(z.string()).default([]),
  sources: z.array(z.string()).default([]),
  description: z.string().optional(),
  image: z.string().optional(),
  date: z.coerce.date().optional(),
  category: z.string().optional(),
});

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
  const result = schema.safeParse(data);
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
