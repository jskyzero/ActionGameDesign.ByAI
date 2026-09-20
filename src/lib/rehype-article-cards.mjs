// 在构建时组织卡片，文章继续使用普通 Markdown，关闭 JS 也能完整呈现。
const textContent = (node) => node.value ?? (node.children ?? []).map(textContent).join('');
const element = (tagName, className, children) => ({
  type: 'element', tagName, properties: { className: [className] }, children,
});

export default function rehypeArticleCards() {
  return (tree) => {
    for (const node of tree.children) {
      if (node.type !== 'element' || node.tagName !== 'blockquote') continue;
      const label = node.children.find((child) => child.tagName === 'p');
      if (!label || !/^✦ 设计自查(?:：|$)/u.test(textContent(label))) continue;
      node.tagName = 'aside';
      node.properties = { ...node.properties, className: ['design-checklist'], 'aria-label': '设计自查' };
      label.properties = { ...label.properties, className: ['design-checklist-title'] };
    }

    const children = [];
    let card;
    for (const node of tree.children) {
      if (node.type === 'element' && node.tagName === 'h3') {
        card = element('div', 'article-point', [node]);
        children.push(card);
      } else {
        // 引用和结尾自查独立于观点卡片；下一节和分隔线结束当前卡片。
        if (node.type === 'element' && ['h1', 'h2', 'hr', 'blockquote', 'aside'].includes(node.tagName)) card = undefined;
        (card ? card.children : children).push(node);
      }
    }
    tree.children = children;
  };
}
