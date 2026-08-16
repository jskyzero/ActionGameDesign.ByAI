// 把 .drawio 源文件里的节点文字提取成 Markdown 大纲，作为迁移草稿的输入。
// 用法：node scripts/convert-drawio.mjs <path-to.drawio> [out.md]
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const input = process.argv[2];
const output = process.argv[3];
if (!input) {
  console.error('用法：node scripts/convert-drawio.mjs <path-to.drawio> [out.md]');
  process.exit(1);
}
if (!existsSync(input)) {
  console.error(`文件不存在：${input}`);
  process.exit(1);
}

let content = readFileSync(input, 'utf8');
// style 属性里可能塞了大量 base64 图片数据，先去掉，避免干扰
content = content.replace(/style="[^"]*"/g, '');

function decodeEntities(s) {
  return s
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');
}

// 收集所有顶点（含无文字的容器，用于保留层级）
const nodes = new Map(); // id -> { value, parent, children[] }
const cellRe = /<mxCell\b[^>]*>/g;
let m;
while ((m = cellRe.exec(content))) {
  const tag = m[0];
  if (!/\bvertex="1"/.test(tag)) continue; // 只处理顶点，忽略连线
  const attr = (name) => {
    const mm = tag.match(new RegExp('\\b' + name + '="([^"]*)"'));
    return mm ? mm[1] : null;
  };
  const id = attr('id');
  if (!id || nodes.has(id)) continue;
  nodes.set(id, {
    id,
    parent: attr('parent'),
    value: decodeEntities(attr('value') ?? '').trim(),
    children: [],
  });
}

// 建树
const roots = [];
for (const node of nodes.values()) {
  const p = nodes.get(node.parent);
  if (p) p.children.push(node);
  else if (node.parent !== '1') roots.push(node); // parent=1 是根层，也视为顶层
  else roots.push(node);
}

const lines = [];
function walk(node, depth) {
  const hasText = node.value.length > 0;
  const indent = '  '.repeat(depth);
  if (hasText) lines.push(`${indent}- ${node.value}`);
  // 有文字的节点下，子节点加一层；纯容器节点不占缩进
  for (const child of node.children) walk(child, hasText ? depth + 1 : depth);
}
for (const r of roots) walk(r, 0);

const md = lines.join('\n') + '\n';
if (output) {
  writeFileSync(output, md);
  console.log(`已写出 ${output}（${lines.length} 个节点）`);
} else {
  process.stdout.write(md);
}
