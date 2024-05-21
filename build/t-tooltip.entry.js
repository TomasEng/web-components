import { r as registerInstance, h, g as getElement } from './index-d1462df2.js';
import { T as TOOLTIP_HIDE_DELAY_MILLISECONDS } from './constants-500bbf63.js';

const tTooltipCss = "#tooltip{backdrop-filter:var(--t-popover-backdrop-filter);background:var(--t-popover-background-colour-base);border-radius:var(--t-popover-border-radius);box-shadow:color-mix(in oklab, var(--t-popover-background-colour-base) 85%, white) inset 0 1px,\n    color-mix(in oklab, var(--t-popover-background-colour-base) 85%, black) inset 0 -1px,\n    var(--t-popover-shadow);color:var(--t-full-contrast-colour);padding:var(--t-spacing-in-group);width:max-content;z-index:var(--t-z-index-tooltip)}#button{background:none;border:none;color:var(--t-link-colour);cursor:pointer;font-family:var(--t-default-font-family);font-size:var(--t-default-font-size);margin:0;padding:0}";

const TTooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.open = false;
    }
    openTooltip() {
        this.open = true;
        this.clearCloseTimeout();
    }
    startCloseTimeout() {
        this.clearCloseTimeout();
        this.closeTimeoutId = setTimeout(() => {
            this.closeTooltip();
        }, TOOLTIP_HIDE_DELAY_MILLISECONDS);
    }
    clearCloseTimeout() {
        clearTimeout(this.closeTimeoutId);
    }
    closeTooltip() {
        this.open = false;
    }
    closeOnEscape(event) {
        if (event.key === 'Escape') {
            this.closeTooltip();
        }
    }
    componentDidLoad() {
        document.addEventListener('keydown', (event) => this.closeOnEscape(event));
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', (event) => this.closeOnEscape(event));
    }
    render() {
        return (h("t-floating-element", { key: '0abf8c9cd1f92ac4aacc28758313b0e22471eb91', visible: this.open, onClickOutside: () => this.closeTooltip() }, h("span", { key: 'de6781e3464f8d31df8e133d2bef1e58642aace7', "aria-describedby": "tooltip", id: "button", onBlur: () => this.closeTooltip(), onFocus: () => this.openTooltip(), onMouseEnter: () => this.openTooltip(), onMouseLeave: () => this.startCloseTimeout(), slot: "anchor" }, h("slot", { key: '0b40de19b60ad52b44a0a8a7a41127f2903398b3', name: "trigger" })), h("div", { key: 'b283980f01474155cbd41549f4f0d823fde02d97', id: "tooltip", role: "tooltip", slot: "content", onMouseEnter: () => this.clearCloseTimeout(), onMouseLeave: () => this.startCloseTimeout() }, h("slot", { key: '989eaae06629d7a2c28d522680020927f9d723be', name: "content" }))));
    }
    get element() { return getElement(this); }
};
TTooltip.style = tTooltipCss;

export { TTooltip as t_tooltip };

//# sourceMappingURL=t-tooltip.entry.js.map