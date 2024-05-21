import { h, r as registerInstance, g as getElement } from './index-d1462df2.js';
import { S as SvgTemplate } from './SvgTemplate-8e2fcbd6.js';

var __rest$1 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const MenuToggleIcon = (_a) => {
    var { fill } = _a, rest = __rest$1(_a, ["fill"]);
    return (h(SvgTemplate, Object.assign({}, rest),
        h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2.75 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 2.75 6Zm0 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17a.75.75 0 0 1-.75-.75Zm.75 5.25a.75.75 0 0 0 0 1.5h17a.75.75 0 0 0 0-1.5h-17Z", fill: "currentColor" })));
};

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const CrossIcon = (_a) => {
    var { fill } = _a, rest = __rest(_a, ["fill"]);
    return (h(SvgTemplate, Object.assign({}, rest),
        h("path", { d: "M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94 6.53 5.47Z", fill: "currentColor" })));
};

const tLayoutHeaderCss = "header {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr;\r\n  grid-template-areas: \"title hcontent\";\r\n  align-items: stretch;\r\n  box-sizing: border-box;\r\n  gap: 0 1rem;\r\n\r\n  .title {\r\n    grid-area: title;\r\n    font-size: 1.5rem;\r\n    padding: 1rem 0;\r\n  }\r\n\r\n  .collapsible-content {\r\n    grid-area: hcontent;\r\n    flex: 1;\r\n  }\r\n\r\n  .collapsible-content-inner {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    box-sizing: border-box;\r\n\r\n    .nav {\r\n      align-self: stretch;\r\n\r\n      ul {\r\n        display: flex;\r\n        flex-direction: row;\r\n        list-style: none;\r\n        margin: 0;\r\n        padding: 0;\r\n        height: 100%;\r\n        gap: 4px;\r\n\r\n        li {\r\n          height: 100%;\r\n\r\n          a {\r\n            align-items: center;\r\n            background-color: var(--main-background);\r\n            border-top-left-radius: var(--t-navbar-item-border-radius);\r\n            border-top-right-radius: var(--t-navbar-item-border-radius);\r\n            box-shadow: var(--top-shadow);\r\n            box-sizing: border-box;\r\n            color: var(--t-base-border-colour);\r\n            display: flex;\r\n            font-weight: 500;\r\n            height: calc(100% + 2px);\r\n            padding: 1rem;\r\n            text-decoration: none;\r\n\r\n            &:hover {\r\n              text-decoration: underline;\r\n            }\r\n          }\r\n\r\n          &.open a {\r\n            color: var(--t-font-colour-default);\r\n            position: relative;\r\n            z-index: 2;\r\n          }\r\n\r\n          &:not(.open) a:hover {\r\n            background-color: color-mix(in oklab, var(--t-page-background-colour) 90%, white);\r\n            color: var(--t-font-colour-default);\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    .toolbar {\r\n      flex: 1;\r\n      display: flex;\r\n      justify-content: flex-end;\r\n    }\r\n  }\r\n\r\n  .nav-toggle {\r\n    grid-area: toggle;\r\n    display: none;\r\n    align-self: center;\r\n  }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  header {\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n\r\n  header {\r\n    display: grid;\r\n    grid-template-areas: \"title toggle\" \"hcontent hcontent\";\r\n    transition: background-color var(--t-transition-duration-medium);\r\n    padding: 0;\r\n\r\n    .title {\r\n      grid-area: title;\r\n      margin-left: 1rem;\r\n    }\r\n\r\n    .collapsible-content {\r\n      grid-area: hcontent;\r\n      display: grid;\r\n      grid-template-rows: 1fr; /* To make height transition work */\r\n      transition: grid-template-rows var(--t-transition-duration-medium);\r\n\r\n      .collapsible-content-inner {\r\n        display: flex;\r\n        flex-direction: column-reverse;\r\n        overflow: hidden;\r\n\r\n        .toolbar {\r\n          align-self: flex-start;\r\n          padding: 0 1rem;\r\n        }\r\n\r\n        .nav {\r\n\r\n          ul {\r\n            flex-direction: column;\r\n            gap: 0;\r\n\r\n            li {\r\n\r\n              a {\r\n                box-sizing: border-box;\r\n                width: 100vw;\r\n                border-radius: 0;\r\n                box-shadow: none;\r\n                height: auto;\r\n                padding: 0.5rem 1rem;\r\n                background-color: transparent;\r\n\r\n                &:hover {\r\n                  box-shadow: var(--top-shadow), var(--bottom-shadow);\r\n                }\r\n              }\r\n\r\n              &:not(.open) a:hover {\r\n                background-color: color-mix(in oklab, var(--t-page-background-colour) 95%, var(--t-full-contrast-colour));\r\n              }\r\n\r\n              &.open a {\r\n                background-color: color-mix(in oklch, var(--t-base-colour) 75%, transparent);\r\n                --top-shadow: inset color-mix(in oklab, var(--t-base-colour) 85%, white) 0 1px 0;\r\n                --bottom-shadow: inset color-mix(in oklab, var(--t-base-colour) 85%, black) 0 -1px 0;\r\n              }\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    .nav-toggle {\r\n      display: flex;\r\n      justify-content: flex-end;\r\n      grid-area: toggle;\r\n      margin-right: 1rem;\r\n    }\r\n\r\n    &.nav-closed {\r\n      .collapsible-content {\r\n        grid-template-rows: 0fr;\r\n      }\r\n    }\r\n\r\n    &.nav-open {\r\n      width: 100%;\r\n      z-index: 100;\r\n      position: relative;\r\n      background-color: var(--t-page-background-colour);\r\n      box-shadow: var(--t-page-background-colour) 0 -100px, var(--bottom-shadow);\r\n    }\r\n  }\r\n}\r\n";

const TLayoutHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.siteTitle = undefined;
        this.navItems = [];
        this.navOpen = false;
    }
    expandNav() {
        this.navOpen = true;
    }
    collapseNav() {
        this.navOpen = false;
    }
    render() {
        return h("header", { key: '3e5f5c166bd23a38a8cabf9782b4e36f49235498', class: this.navOpen ? 'nav-open' : 'nav-closed' }, h("div", { key: '2ec0b2d1216588af67c12bbc343b55487ec1dc1f', class: "title" }, this.siteTitle), h("div", { key: '7c60df9683a76b2ef6f25383170956a034194624', class: "collapsible-content" }, h("div", { key: '2bbbd10daf28020b8e0a770cec97d783fc3ef34d', class: "collapsible-content-inner" }, h(Navbar, { key: 'dd7ccb1e0774b3a4272e0c35ef66604c9747fed1', items: this.navItems }), h("div", { key: 'd2b4f4f56fec7e0efd745c5cc221f424e1d9c0c7', class: "toolbar" }, h("t-mode-switcher", { key: '71523d52af0075f457ad928b282e766d852d4fea', label: "Fargemodus" })))), h("div", { key: '14987b942dee35bc08c605696618388d6f6a2e4e', class: "nav-toggle", onClick: () => this.navOpen ? this.collapseNav() : this.expandNav() }, h("t-button", { key: '5179bf36a42240752d91b14148645d359a235c1f', buttonAttributes: { title: this.navOpen ? 'Lukk' : 'Meny' } }, this.navOpen ? h(CrossIcon, null) : h(MenuToggleIcon, null))));
    }
    get el() { return getElement(this); }
};
const Navbar = ({ items }) => {
    return (h("nav", { class: "nav" }, h("ul", null, items.map(item => (h("li", { class: item.open ? 'open' : '', key: item.href }, h("a", { href: item.href }, h("span", null, item.label))))))));
};
TLayoutHeader.style = tLayoutHeaderCss;

export { TLayoutHeader as t_layout_header };

//# sourceMappingURL=t-layout-header.entry.js.map