import { r as registerInstance, h, g as getElement } from './index-d1462df2.js';

const tTabsCss = ":host {\n  display: block;\n}\n\n.t-tabs {\n  --top-shadow-inset: color-mix(in oklab, transparent 75%, white) inset 0 1px;\n  --top-shadow-outset: color-mix(in oklab, black 25%, transparent) 0 -1px 2px;\n  --bottom-shadow-inset: color-mix(in oklab, transparent 75%, black) inset 0 -1px;\n  --bottom-shadow-outset: color-mix(in oklab, white 30%, transparent) 0 1px 2px;\n  --top-shadow: var(--top-shadow-inset), var(--top-shadow-outset);\n  --bottom-shadow: var(--bottom-shadow-inset), var(--bottom-shadow-outset);\n  --selected-colour: var(--t-base-colour);\n\n  [role='tablist'] {\n    height: var(--t-clickable-area-size);\n\n    [role='tab'] {\n      margin-left: var(--t-border-radius-default);\n      background: linear-gradient(\n        to bottom,\n        color-mix(in oklab, var(--selected-colour) 80%, white),\n        var(--selected-colour)\n      );\n      border: none;\n      border-top-left-radius: var(--t-border-radius-default);\n      border-top-right-radius: var(--t-border-radius-default);\n      box-shadow: var(--top-shadow);\n      box-sizing: border-box;\n      color: var(--t-font-colour-default);\n      cursor: pointer;\n      font-size: var(--t-default-font-size);\n      padding: .5rem;\n      height: calc(100% + 2px);\n\n      &[aria-selected='true'] {\n        position: relative;\n        z-index: 2;\n      }\n\n      &[aria-selected='false']:not(:hover) {\n        background: var(--t-small-contrast-colour);\n        color: color-mix(in oklab, var(--t-font-colour-default) 60%, var(--t-page-background-colour));\n      }\n    }\n  }\n\n  [role='tabpanel'] {\n    background: linear-gradient(\n      to bottom,\n      var(--selected-colour),\n      var(--selected-colour) 3px,\n      var(--t-panel-background-colour) 4px,\n      var(--t-panel-background-colour)\n    );\n    position: relative;\n    z-index: 1;\n\n    &.inactive {\n      display: none;\n    }\n  }\n}\n";

const TTabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tabList = [];
        this.selectedIndex = 0;
        this.focusableIndex = 0;
    }
    connectedCallback() {
        this.tabList = Array.from(this.element.querySelectorAll('t-tab'));
    }
    get tabs() {
        return this.element.querySelectorAll('[role="tab"]');
    }
    selectTab(index) {
        this.selectedIndex = index;
    }
    moveFocus(index) {
        this.focusableIndex = index;
        this.tabs[index].focus();
    }
    moveFocusLeft() {
        if (this.focusableIndex > 0) {
            this.moveFocus(this.focusableIndex - 1);
        }
    }
    moveFocusRight() {
        if (this.focusableIndex < this.tabs.length - 1) {
            this.moveFocus(this.focusableIndex + 1);
        }
    }
    handleKeyDown(event) {
        const { key } = event;
        switch (key) {
            case 'ArrowLeft':
                event.preventDefault();
                this.moveFocusLeft();
                break;
            case 'ArrowRight':
                event.preventDefault();
                this.moveFocusRight();
                break;
        }
    }
    componentDidRender() {
        const tabPanels = this.element.shadowRoot.querySelectorAll('[role="tabpanel"]');
        this.tabList.forEach((tab, index) => {
            tabPanels[index].appendChild(tab);
        });
    }
    render() {
        return (h("div", { key: '7f0789ffc664ee4329398f3648f4b271aa4d7fab', class: 't-tabs' }, h("div", { key: 'a606a9f0a771f3c20b7a43aff6295b162e286817', role: 'tablist' }, this.tabList.map((tab, index) => (h("button", { "aria-controls": index.toString(), "aria-selected": this.selectedIndex === index ? 'true' : 'false', key: 'tab_' + tab.heading, onClick: () => this.selectTab(index), onKeyDown: (event) => this.handleKeyDown(event), role: 'tab', tabindex: this.focusableIndex === index ? 0 : -1 }, tab.heading)))), this.tabList.map((tab, index) => (h("t-panel", { class: this.selectedIndex === index ? 'active' : 'inactive', id: index.toString(), key: 'panel_' + tab.heading, role: 'tabpanel' })))));
    }
    get element() { return getElement(this); }
};
TTabs.style = tTabsCss;

export { TTabs as t_tabs };

//# sourceMappingURL=t-tabs.entry.js.map