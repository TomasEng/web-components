import { r as registerInstance, h } from './index-d71aeab2.js';

const tTextfieldCss = "";

const textInputCss = ".text-input{--font-size:var(--t-default-font-size);--height:1.5rem;--padding:calc((var(--height) - var(--t-default-font-size))/2);background-color:var(--t-input-field-background-colour);border-radius:6px;border:1px solid var(--t-base-border-colour);box-shadow:inset 1px 1px 1px rgba(0,0,0,0.3);box-sizing:border-box;color:var(--t-font-colour-default);line-height:var(--font-size);outline:none;padding:var(--padding);transition:var(--t-transition-duration-medium)}.text-input:focus{transform:scale(1.05);background-color:var(--t-page-background-colour);box-shadow:rgb(from var(--t-base-border-colour) r g b / 0.2) 0 0 24px}.text-input::selection{background-color:var(--t-selection-background-colour);color:var(--t-selection-font-colour)}";

const TTextfield = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hue = 0;
        this.label = undefined;
        this.value = undefined;
    }
    render() {
        return h("internal-style-provider", { key: '1fa172a949d9dc9f4d3a79c42a522658dcaa94e6', hueOffsetInTurns: this.hue }, h("internal-input-wrapper", { key: '6cef07cf5ff50820d2846cf5d0d24f43a063f72b' }, h("label", { key: 'bcbb206dc341b6e8af3c6875ac0b1e6f559ea88e', htmlFor: "input", slot: 'label' }, this.label), h("input", { key: '43de6bdad860760b23ebe9d6c42e2bd35238b667', slot: 'input', id: "input", class: "text-input", type: "text", value: this.value })));
    }
};
TTextfield.style = tTextfieldCss + textInputCss;

export { TTextfield as t_textfield };

//# sourceMappingURL=t-textfield.entry.js.map