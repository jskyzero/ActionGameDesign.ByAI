// 把 .xmind 源文件里的节点文字提取成 Markdown 大纲，作为迁移草稿的输入。
// 用法：node scripts/convert-xmind.mjs <path-to.xmind> [out.md]
import { execFileSync } from 'node:child_process';
import { writeFileSync, existsSync } from 'node:fs';

const input = process.argv[2];
const output = process.argv[3];
if (!input) {
  console.error('用法：node scripts/convert-xmind.mjs <path-to.xmind> [out.md]');
  process.exit(1);
}
if (!existsSync(input)) {
  console.error(`文件不存在：${input}`);
  process.exit(1);
}

// .xmind 本质是 zip，用系统 unzip 直接读出 content.json（XMind 8+/2020+）
let raw;
try {
  raw = execFileSync('unzip', ['-p', input, 'content.json'], { maxBuffer: 64 * 1024 * 1024 }).toString('utf8');
} catch {
  console.error('无法从 .xmind 读取 content.json（需要系统有 unzip；旧版 XMind 可能用 content.xml，暂未支持）。');
  process.exit(1);
}

const sheets = JSON.parse(raw);
const lines = [];

function cleanTitle(t) {
  return String(t ?? '').replace(/\s*\n\s*/g, ' ').trim();
}

function walk(topic, depth) {
  const indent = '  '.repeat(depth);
  lines.push(`${indent}- ${cleanTitle(topic.title)}`);
  for (const child of topic.children?.attached ?? []) walk(child, depth + 1);
}

sheets.forEach((sheet, i) => {
  if (i > 0) lines.push('');
  if (sheets.length > 1) lines.push(`## Sheet ${i + 1}${sheet.title ? '：' + cleanTitle(sheet.title) : ''}`);
  if (sheet.rootTopic) walk(sheet.rootTopic, 0);
});

const md = lines.join('\n') + '\n';
if (output) {
  writeFileSync(output, md);
  console.log(`已写出 ${output}`);
} else {
  process.stdout.write(md);
}
