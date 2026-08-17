// 斜文字水印背景：多行、倾斜、行间随机偏移、hover 奇偶行反向滚动
// 输出 HTML 字符串，配合 global.css 里的 .sw-* 样式与动画。

function seedOf(text) {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) >>> 0;
  return h;
}

export function watermarkHtml(text, rows = 6) {
  if (!text) return '';
  const seed = seedOf(text);
  const seg = Array(8).fill(text).join('　') + '　';
  let html = '<div class="sw">';
  for (let i = 0; i < rows; i++) {
    // 行间随机水平偏移（确定性，稳定不跳动）
    const off = ((seed + i * 17) % 40) - 20; // -20 ~ 20
    const cls = i % 2 === 0 ? 'sw-track-even' : 'sw-track-odd';
    html +=
      `<div class="sw-row" style="margin-left:${off}%">` +
      `<div class="sw-track ${cls}"><span class="sw-seg">${seg}</span><span class="sw-seg">${seg}</span></div>` +
      `</div>`;
  }
  html += '</div>';
  return html;
}
