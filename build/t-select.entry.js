import { r as registerInstance, h } from './index-d71aeab2.js';

const textInputCss = ".text-input{--font-size:var(--t-default-font-size);--height:1.5rem;--padding:calc((var(--height) - var(--t-default-font-size))/2);background-color:var(--t-input-field-background-colour);border-radius:6px;border:1px solid var(--t-base-border-colour);box-shadow:inset 1px 1px 1px rgba(0,0,0,0.3);box-sizing:border-box;color:var(--t-font-colour-default);line-height:var(--font-size);outline:none;padding:var(--padding);transition:var(--t-transition-duration-medium)}.text-input:focus{transform:scale(1.05);background-color:var(--t-page-background-colour);box-shadow:rgb(from var(--t-base-border-colour) r g b / 0.2) 0 0 24px}.text-input::selection{background-color:var(--t-selection-background-colour);color:var(--t-selection-font-colour)}";

const TSelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hue = 0;
        this.label = undefined;
        this.options = undefined;
        this.value = undefined;
    }
    render() {
        return h("internal-style-provider", { key: '40f4f36f1ffe03b9db7d7afd9b3905a0b9aa814f', hueOffsetInTurns: this.hue }, h("internal-input-wrapper", { key: '6c796a44de173d0848653b198e1da41175d19f58' }, h("label", { key: 'c2a2701db2da55d9320fa07d62024a3baa10c4e3', htmlFor: "input", slot: "label" }, this.label), h("select", { key: '3c537025770130b4942fcaca53221c427dadb59c', slot: "input", id: "input", class: "text-input" }, this.options.map(option => (h("option", { value: option.value, selected: option.value === this.value }, option.label))))));
    }
};
TSelect.style = textInputCss;

export { TSelect as t_select };

//# sourceMappingURL=t-select.entry.js.map