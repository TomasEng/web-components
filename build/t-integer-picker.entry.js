import { r as registerInstance, e as createEvent, h } from './index-d71aeab2.js';

const tIntegerPickerCss = "input::-webkit-inner-spin-button{height:var(--height);cursor:pointer;margin-right:calc(-1 * var(--padding));margin-left:var(--padding)}";

const textInputCss = ".text-input{--font-size:var(--t-default-font-size);--height:1.5rem;--padding:calc((var(--height) - var(--t-default-font-size))/2);background-color:var(--t-input-field-background-colour);border-radius:6px;border:1px solid var(--t-base-border-colour);box-shadow:inset 1px 1px 1px rgba(0,0,0,0.3);box-sizing:border-box;color:var(--t-font-colour-default);line-height:var(--font-size);outline:none;padding:var(--padding);transition:var(--t-transition-duration-medium)}.text-input:focus{transform:scale(1.05);background-color:var(--t-page-background-colour);box-shadow:rgb(from var(--t-base-border-colour) r g b / 0.2) 0 0 24px}.text-input::selection{background-color:var(--t-selection-background-colour);color:var(--t-selection-font-colour)}";

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
        return h("internal-style-provider", { key: '3e5ae598995ccbb9cae802c173e4c6eeb915f256', hueOffsetInTurns: this.hue }, h("internal-input-wrapper", { key: 'd0590959258eaf545d8f902aa089d148e7055891' }, h("label", { key: '985eaa871e31a712aa92d39891253ae5e4f9e507', htmlFor: "input", slot: "label" }, this.label), h("input", { key: '24ea44e548d632629c41b0552d5ea8505f19a194', class: "text-input", id: "input", max: this.max, min: this.min, onChange: this.handleChange, slot: "input", type: "number", value: this.value })));
    }
};
TIntegerPicker.style = tIntegerPickerCss + textInputCss;

export { TIntegerPicker as t_integer_picker };

//# sourceMappingURL=t-integer-picker.entry.js.map