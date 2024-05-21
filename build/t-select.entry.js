import { r as registerInstance, h } from './index-d1462df2.js';

const textInputCss = ".text-input{--font-size:var(--t-default-font-size);--height:1.5rem;--padding:calc((var(--height) - var(--t-default-font-size))/2);background-color:var(--t-input-field-background-colour);border-radius:6px;border:1px solid var(--t-base-border-colour);box-shadow:inset 1px 1px 1px rgba(0,0,0,0.3);box-sizing:border-box;color:var(--t-font-colour-default);line-height:var(--font-size);outline:none;padding:var(--padding);transition:var(--t-transition-duration-medium)}.text-input:focus{transform:scale(1.05);background-color:var(--t-page-background-colour);box-shadow:color-mix(in oklab, var(--t-base-border-colour) 20%, transparent) 0 0 24px}.text-input::selection{background-color:var(--t-selection-background-colour);color:var(--t-selection-font-colour)}";

const TSelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hue = 0;
        this.label = undefined;
        this.options = undefined;
        this.value = undefined;
        this.labelPlacement = 'top';
    }
    render() {
        return h("internal-style-provider", { key: 'c92667ca0d67c35ceae7a039fe0a5b94e8d7ce80', hueOffsetInTurns: this.hue }, h("internal-input-wrapper", { key: 'd68ae68af62ee4fc8ce9359cd10576336aa76c1c', labelPlacement: this.labelPlacement }, h("label", { key: '3bbaf2f095b1c597b3a644df5de15413530a3902', htmlFor: "input", slot: "label" }, this.label), h("select", { key: 'eb97a5d65c52d73ee69ab414d5d48a8aaecb8338', slot: "input", id: "input", class: "text-input" }, this.options.map(option => (h("option", { value: option.value, selected: option.value === this.value }, option.label))))));
    }
};
TSelect.style = textInputCss;

export { TSelect as t_select };

//# sourceMappingURL=t-select.entry.js.map