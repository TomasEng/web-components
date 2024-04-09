import { r as registerInstance, e as createEvent, h } from './index-d71aeab2.js';

const tSwitchCss = ".wrapper{display:inline-flex;flex-direction:row;gap:var(--t-spacing-inline);align-items:center}.switch{--height:1.5rem;--padding:1px;--width:calc(var(--height) * 2);--hover-translate:4px;--border-width:1px;position:relative;display:inline-block;height:var(--height);width:var(--width);box-sizing:border-box}.switch input{opacity:0;width:0;height:0}.slider{--gradient-factor:-0.1;--chroma:0;--fill-colour:var(--t-input-field-background-colour);background:linear-gradient(\n    to bottom,\n    oklch(from var(--fill-colour) calc(l * (1 + var(--gradient-factor))) c h),\n    var(--fill-colour),\n    oklch(from var(--fill-colour) calc(l * (1 - var(--gradient-factor))) c h)\n  );border-radius:100px;border:var(--border-width)\n    solid\n    var(--t-base-border-colour);bottom:0;box-shadow:#0004 0 1px 2px 1px inset;box-sizing:border-box;cursor:pointer;height:var(--height);left:0;position:absolute;right:0;top:0;transition:var(--t-transition-duration-long);width:var(--width)}.slider:before{aspect-ratio:1;background-color:var(--t-base-fill-colour);border-radius:50%;top:var(--padding);content:\"\";height:calc(var(--height) - var(--padding) * 2 - var(--border-width) * 2);left:var(--padding);position:absolute;transition:var(--t-transition-duration-short)}input:checked+.slider{--chroma:0.4;--gradient-factor:0.1;--fill-colour:var(--t-base-fill-colour);box-shadow:none}input:checked+.slider:before{transform:translateX(calc(var(--width) - var(--height)));background-color:var(--t-page-background-colour)}.switch:has(:focus-visible) .slider{outline:#000 auto 2px}.wrapper:hover .slider:before{transform:translateX(var(--hover-translate))}.wrapper:hover input:checked+.slider:before{transform:translateX(calc(var(--width) - var(--height) - var(--hover-translate)))}";

const TSwitch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.switch = createEvent(this, "switch", 7);
        this.handleChange = (event) => {
            const target = event.target;
            this.switch.emit(target.checked);
        };
        this.checked = false;
        this.hue = 0;
    }
    render() {
        return h("internal-style-provider", { key: '5f31136467fd764106cbf24804d9657391bb328c', hueOffsetInTurns: this.hue }, h("label", { key: '4ea246b0ecc3cd53c0131e1d6752e371fd6232a3', htmlFor: "input", class: "wrapper" }, h("span", { key: '48e00fe70f3049527b7e3753d5c5bedda283ca3a', class: "switch" }, h("input", { key: '06dcc0e399c84518c71b42392d7a7c206c53decd', id: "input", type: "checkbox", onChange: this.handleChange, checked: this.checked }), h("span", { key: 'bcbb774fc5027fa98abc01f7dba4b9fca3c779c6', class: "slider" })), h("span", { key: 'bccfd04f7465611d56600409cb1014ee13b249c1', class: "label" }, h("slot", { key: '06a38da665c45288a6d61a06f73a7b9459d84177' }))));
    }
};
TSwitch.style = tSwitchCss;

export { TSwitch as t_switch };

//# sourceMappingURL=t-switch.entry.js.map