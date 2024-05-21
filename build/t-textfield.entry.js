import { r as registerInstance, i as createEvent, h } from './index-d1462df2.js';

const tTextfieldCss = "";

const textInputCss = ".text-input{--font-size:var(--t-default-font-size);--height:1.5rem;--padding:calc((var(--height) - var(--t-default-font-size))/2);background-color:var(--t-input-field-background-colour);border-radius:6px;border:1px solid var(--t-base-border-colour);box-shadow:inset 1px 1px 1px rgba(0,0,0,0.3);box-sizing:border-box;color:var(--t-font-colour-default);line-height:var(--font-size);outline:none;padding:var(--padding);transition:var(--t-transition-duration-medium)}.text-input:focus{transform:scale(1.05);background-color:var(--t-page-background-colour);box-shadow:color-mix(in oklab, var(--t-base-border-colour) 20%, transparent) 0 0 24px}.text-input::selection{background-color:var(--t-selection-background-colour);color:var(--t-selection-font-colour)}";

const TTextfield = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChange = createEvent(this, "valueChange", 7);
        this.hue = 0;
        this.label = undefined;
        this.value = undefined;
    }
    render() {
        return h("internal-style-provider", { key: 'c7cdb09517b680a9f79b4beaaa65fc720cee3760', hueOffsetInTurns: this.hue }, h("internal-input-wrapper", { key: '48d1ed0b51a8edec61ea8bfb7f881fbbc83c538d' }, h("label", { key: '42f82e4d44770455f4cbc7e6e030f495e5b27565', htmlFor: "input", slot: 'label' }, this.label), h("input", { key: '190fed918a41af85eb2c658081b38a992b3dd3c1', slot: 'input', id: "input", class: "text-input", type: "text", value: this.value, onInput: (e) => {
                this.valueChange.emit(e.target.value);
            } })));
    }
};
TTextfield.style = tTextfieldCss + textInputCss;

export { TTextfield as t_textfield };

//# sourceMappingURL=t-textfield.entry.js.map