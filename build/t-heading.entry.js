import { r as registerInstance, h, g as getElement } from './index-d1462df2.js';

const tHeadingCss = ".wrapper {\r\n  display: flex;\r\n  align-items: baseline;\r\n  gap: var(--t-spacing-in-group);\r\n\r\n  .hashlink {\r\n    display: none;\r\n  }\r\n\r\n  &:hover .hashlink {\r\n    display: inline;\r\n  }\r\n}\r\n\r\nh1 {\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\n";

const THeading = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.level = 1;
    }
    render() {
        return (h("div", { key: 'c133806c2695eacb102cf8909cd716b5db4688ec', class: 'wrapper' }, this.renderH(), this.element.id && h("t-link", { class: 'hashlink', href: `#${this.element.id}` }, "#")));
    }
    renderH() {
        switch (this.level) {
            case 1:
                return h("h1", null, h("slot", null));
            case 2:
                return h("h2", null, h("slot", null));
            case 3:
                return h("h3", null, h("slot", null));
            case 4:
                return h("h4", null, h("slot", null));
            case 5:
                return h("h5", null, h("slot", null));
            case 6:
                return h("h6", null, h("slot", null));
            default:
                return h("h1", null, h("slot", null));
        }
    }
    get element() { return getElement(this); }
};
THeading.style = tHeadingCss;

export { THeading as t_heading };

//# sourceMappingURL=t-heading.entry.js.map