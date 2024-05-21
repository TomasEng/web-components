import { h, r as registerInstance } from './index-d1462df2.js';
import { S as SvgTemplate } from './SvgTemplate-8e2fcbd6.js';

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
const ChevronRightIcon = (_a) => {
    var { fill } = _a, rest = __rest(_a, ["fill"]);
    return (h(SvgTemplate, Object.assign({}, rest),
        h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M9.47 5.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06L14.44 12 9.47 7.03a.75.75 0 0 1 0-1.06Z", fill: "currentColor" })));
};

const tLayoutMainCss = ".main {\r\n  --border-radius: 12px;\r\n  border-radius: var(--border-radius);\r\n  box-shadow: var(--back-shadow);\r\n  color: var(--t-font-colour-default);\r\n  display: flex;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.main .leftbar {\r\n  --background-base: color-mix(in oklch, var(--t-page-background-colour) 95%, var(--t-full-contrast-colour));\r\n  --main-background: color-mix(in oklch, var(--background-base) 90%, var(--t-background-background-colour));\r\n  --top-shadow: inset color-mix(in oklab, var(--background-base) 90%, white) 0 1px 0;\r\n  --bottom-shadow: inset color-mix(in oklab, var(--background-base) 90%, black) 0 -1px 0;\r\n  /* --main-background, --top-shadow and --bottom-shadow are already defined at a higher level, but the change of --background-base does not change their values unless they are redefined here for some reason */\r\n  background-color: var(--main-background);\r\n  border-bottom-left-radius: var(--border-radius);\r\n  border-top-left-radius: var(--border-radius);\r\n  box-shadow: var(--top-shadow), var(--bottom-shadow);\r\n  box-sizing: border-box;\r\n  width: 20%;\r\n\r\n  .leftbar-content {\r\n    padding: 1rem;\r\n  }\r\n\r\n  .leftbar-toggle {\r\n    display: none;\r\n  }\r\n\r\n  &.sticky .leftbar-content {\r\n    max-height: 100vh;\r\n    overflow-y: auto;\r\n    position: sticky;\r\n    top: 0;\r\n  }\r\n}\r\n\r\n.main .content {\r\n  background-color: var(--main-background);\r\n  border-bottom-right-radius: var(--border-radius);\r\n  border-top-right-radius: var(--border-radius);\r\n  box-shadow: var(--top-shadow), var(--bottom-shadow);\r\n  flex: 1;\r\n  min-width: 0;\r\n  padding: 1rem;\r\n}\r\n\r\n.leftbar:has(.leftbar-content:empty) {\r\n  display: none;\r\n}\r\n\r\n.leftbar:has(.leftbar-content:empty) + .content {\r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  .main {\r\n    --border-radius: 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n\r\n  .main {\r\n    --closed-bar-width: var(--t-clickable-area-size);\r\n    position: relative;\r\n\r\n    .leftbar {\r\n      display: flex;\r\n      flex-direction: row;\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      height: 100%;\r\n      z-index: 100;\r\n      background-color: transparent;\r\n\r\n      .leftbar-toggle {\r\n        backdrop-filter: var(--t-popover-backdrop-filter);\r\n        background-color: color-mix(in oklch, var(--t-base-colour) calc(var(--t-popover-alpha) * 100%), transparent);\r\n        border: 0;\r\n        color: var(--t-font-colour-default);\r\n        display: block;\r\n        height: 100%;\r\n        max-height: 100vh;\r\n        position: sticky;\r\n        top: 0;\r\n        width: var(--closed-bar-width);\r\n\r\n        &:hover {\r\n          background-color: var(--t-base-colour);\r\n        }\r\n\r\n        .chevron {\r\n          transform: scale(1.5) rotate(0deg);\r\n        }\r\n      }\r\n\r\n      .leftbar-content {\r\n        backdrop-filter: var(--t-popover-backdrop-filter);\r\n        background-color: var(--t-popover-background-colour-base);\r\n        overflow: hidden;\r\n        transition-duration: var(--t-transition-duration-medium);\r\n        transition-property: width, padding;\r\n        width: 200px;\r\n      }\r\n    }\r\n\r\n    .content {\r\n      padding-left: calc(1rem + var(--closed-bar-width));\r\n    }\r\n  }\r\n\r\n  .main.leftbar-closed {\r\n    .leftbar {\r\n      position: absolute;\r\n      height: 100%;\r\n      width: fit-content;\r\n\r\n      .leftbar-content {\r\n        width: 0;\r\n        padding: 1rem 0;\r\n      }\r\n    }\r\n  }\r\n\r\n  .main.leftbar-open {\r\n    .leftbar {\r\n      .leftbar-content {\r\n        width: 200px;\r\n      }\r\n\r\n      .leftbar-toggle {\r\n        box-shadow: #0002 6px 0 12px;\r\n\r\n        .chevron {\r\n          transform: scale(1.5) rotate(180deg);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n";

const TLayoutMain = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.leftbarOpen = false;
        this.stickyLeftbar = false;
    }
    toggleLeftbar() {
        this.leftbarOpen = !this.leftbarOpen;
    }
    render() {
        const stateClass = this.leftbarOpen ? 'leftbar-open' : 'leftbar-closed';
        return h("internal-style-provider", { key: 'dd8513fb02f03599072f136fc52ff10ba46fad3b' }, h("main", { key: 'f635125785adb7346b2f3947025641998b5db28d', class: `main ${stateClass}` }, h("div", { key: 'b11b29d1ece97b87f1f86b37502f6c0fae848287', class: `leftbar${this.stickyLeftbar ? ' sticky' : ''}` }, h("div", { key: '5198ba2953c8637f8fd05ae48986dd5222542521', class: "leftbar-content" }, h("slot", { key: '5d233d59ae6c75b6bb51d82219958d9582548855', name: "leftbar" })), h("button", { key: '7f66b9f2e55b8db0199f7e9c3e97508501dfbaeb', class: "leftbar-toggle", onClick: () => this.toggleLeftbar(), title: this.leftbarOpen ? 'Lukk sidepanel' : 'Åpne sidepanel' }, h(ChevronRightIcon, { key: 'c5791ebaf6f64d2a15fe1f92643f3b267ea66c9d', class: 'chevron' }))), h("div", { key: 'f067b53301f3d32f06f1046fa303a615a8597106', class: "content" }, h("slot", { key: 'd659e9457d491810ae8e13688fb23c2582a8df52', name: 'content' }))));
    }
};
TLayoutMain.style = tLayoutMainCss;

export { TLayoutMain as t_layout_main };

//# sourceMappingURL=t-layout-main.entry.js.map