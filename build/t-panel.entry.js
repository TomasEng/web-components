import { r as registerInstance, h, e as Host } from './index-d1462df2.js';

const tPanelCss = ":host{--top-shadow-inset:color-mix(in oklab, transparent 80%, white) inset 0 1px;--top-shadow-outset:color-mix(in oklab, black 20%, transparent) 0 -1px 2px;--bottom-shadow-inset:color-mix(in oklab, transparent 80%, black) inset 0 -1px;--bottom-shadow-outset:color-mix(in oklab, white 30%, transparent) 0 1px 2px;--top-shadow:var(--top-shadow-inset), var(--top-shadow-outset);--bottom-shadow:var(--bottom-shadow-inset), var(--bottom-shadow-outset);background-color:var(--t-panel-background-colour);border-radius:var(--t-border-radius-default);box-shadow:var(--top-shadow), var(--bottom-shadow);color:var(--t-font-colour-default);display:block;font-size:var(--t-default-font-size);padding:1rem}";

const TPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '7fa00b8fcea83ea3ace2371866d0550c4c5415e7' }, h("slot", { key: '01e8cd6d59e142a1c0b786914869509abda8b7c9' })));
    }
};
TPanel.style = tPanelCss;

export { TPanel as t_panel };

//# sourceMappingURL=t-panel.entry.js.map