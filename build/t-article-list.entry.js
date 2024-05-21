import { r as registerInstance, h } from './index-d1462df2.js';

const tArticleListCss = "ul.t-article-list {\r\n  container-type: inline-size;\r\n  container-name: article-list;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2px;\r\n\r\n  li a {\r\n    --background-colour: var(--t-small-contrast-colour);\r\n\r\n    background-color: var(--background-colour);\r\n    color: var(--t-font-colour-default);\r\n    column-gap: var(--t-spacing-in-group);\r\n    display: grid;\r\n    grid-template: \"title date\" auto\r\n                   \"intro date\" auto\r\n                   / 1fr auto;\r\n    padding: var(--t-spacing-in-group);\r\n    text-decoration: none;\r\n\r\n    &:hover {\r\n      --background-colour: var(--t-base-low-contrast-colour);\r\n    }\r\n\r\n    .item-title {\r\n      font-weight: bold;\r\n      grid-area: title;\r\n      overflow: hidden;\r\n      text-overflow: ellipsis;\r\n      white-space: nowrap;\r\n    }\r\n\r\n    .item-intro {\r\n      grid-area: intro;\r\n      overflow: hidden;\r\n      text-overflow: ellipsis;\r\n      white-space: nowrap;\r\n    }\r\n\r\n    .item-date {\r\n      align-self: center;\r\n      grid-area: date;\r\n      text-align: right;\r\n    }\r\n  }\r\n\r\n  li:first-child a {\r\n    border-top-left-radius: var(--t-border-radius-default);\r\n    border-top-right-radius: var(--t-border-radius-default);\r\n  }\r\n\r\n  li:last-child a {\r\n    border-bottom-left-radius: var(--t-border-radius-default);\r\n    border-bottom-right-radius: var(--t-border-radius-default);\r\n  }\r\n}\r\n\r\n@container article-list (max-width: 600px) {\r\n  ul.t-article-list li a {\r\n    grid-template:\r\n        \"title title\"\r\n        \"intro date\"\r\n        / 1fr auto;\r\n  }\r\n}\r\n";

const TArticleList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hue = 0;
        this.items = [];
    }
    render() {
        return h("internal-style-provider", { key: '5d324cad88580c84b9fc8ee7d368786ae3fb64c5', hueOffsetInTurns: this.hue }, h("ul", { key: '361f490fd001528a294b64988e2ad456c984813b', class: 't-article-list' }, this.items.map(item => h(Item, { item: item }))));
    }
};
const Item = ({ item }) => {
    var _a;
    return h("li", null, h("a", { href: item.href, title: item.title }, h("span", { class: 'item-title' }, item.title), h("span", { class: 'item-intro' }, item.intro), h("span", { class: 'item-date' }, (_a = item.date) === null || _a === void 0 ? void 0 : _a.toLocaleDateString())));
};
TArticleList.style = tArticleListCss;

export { TArticleList as t_article_list };

//# sourceMappingURL=t-article-list.entry.js.map