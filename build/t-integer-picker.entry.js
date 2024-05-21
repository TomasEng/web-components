import { r as registerInstance, i as createEvent, h } from './index-d1462df2.js';

const tIntegerPickerCss = "input::-webkit-inner-spin-button{height:var(--height);cursor:pointer;margin-right:calc(-1 * var(--padding));margin-left:var(--padding)}";

const textInputCss = ".text-input{--font-size:var(--t-default-font-size);--height:1.5rem;--padding:calc((var(--height) - var(--t-default-font-size))/2);background-color:var(--t-input-field-background-colour);border-radius:6px;border:1px solid var(--t-base-border-colour);box-shadow:inset 1px 1px 1px rgba(0,0,0,0.3);box-sizing:border-box;color:var(--t-font-colour-default);line-height:var(--font-size);outline:none;padding:var(--padding);transition:var(--t-transition-duration-medium)}.text-input:focus{transform:scale(1.05);background-color:var(--t-page-background-colour);box-shadow:color-mix(in oklab, var(--t-base-border-colour) 20%, transparent) 0 0 24px}.text-input::selection{background-color:var(--t-selection-background-colour);color:var(--t-selection-font-colour)}";

const TIntegerPicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.integerChange = createEvent(this, "integerChange", 7);
        this.handleChange = (event) => {
            const target = event.target;
            this.integerChange.emit(target.valueAsNumber);
        };
        this.label = undefined;
        this.value = undefined;
        this.min = undefined;
        this.max = undefined;
        this.hue = undefined;
    }
    render() {
        return h("internal-style-provider", { key: 'a810ac8791ffeec0cd8f28cb188616e54de79416', hueOffsetInTurns: this.hue }, h("internal-input-wrapper", { key: 'c8150635ba41f80ee8905cb3126babb07a9b4ff6' }, h("label", { key: '3d7871ebb989be5ddd179258f9135df1c39cfb7c', htmlFor: "input", slot: "label" }, this.label), h("input", { key: '59cc9e2a4aa7f487b421002091a9a5b616d9c3ea', class: "text-input", id: "input", max: this.max, min: this.min, onChange: this.handleChange, slot: "input", type: "number", value: this.value })));
    }
};
TIntegerPicker.style = tIntegerPickerCss + textInputCss;

export { TIntegerPicker as t_integer_picker };

//# sourceMappingURL=t-integer-picker.entry.js.map