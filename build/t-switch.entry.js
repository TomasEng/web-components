import { r as registerInstance, i as createEvent, h } from './index-d1462df2.js';

const tSwitchCss = ".wrapper{display:inline-flex;flex-direction:row;gap:var(--t-spacing-inline);align-items:center}.switch{--height:1.5rem;--padding:1px;--width:calc(var(--height) * 2);--hover-translate:4px;--border-width:1px;position:relative;display:inline-block;height:var(--height);width:var(--width);box-sizing:border-box}.switch input{opacity:0;width:0;height:0}.slider{--top-mix-colour:black;--bottom-mix-colour:white;--chroma:0;--fill-colour:var(--t-input-field-background-colour);background:linear-gradient(\r\n    to bottom,\r\n    color-mix(in oklab, var(--fill-colour) 90%, var(--top-mix-colour)),\r\n    var(--fill-colour),\r\n    color-mix(in oklab, var(--fill-colour) 90%, var(--bottom-mix-colour))\r\n  );border-radius:100px;border:var(--border-width)\r\n    solid\r\n    var(--t-base-border-colour);bottom:0;box-shadow:#0004 0 1px 2px 1px inset;box-sizing:border-box;cursor:pointer;height:var(--height);left:0;position:absolute;right:0;top:0;transition:var(--t-transition-duration-long);width:var(--width)}.slider:before{aspect-ratio:1;background-color:var(--t-base-fill-colour);border-radius:50%;top:var(--padding);content:\"\";height:calc(var(--height) - var(--padding) * 2 - var(--border-width) * 2);left:var(--padding);position:absolute;transition:var(--t-transition-duration-short)}input:checked+.slider{--chroma:0.4;--top-mix-colour:white;--bottom-mix-colour:black;--fill-colour:var(--t-base-fill-colour);box-shadow:none}input:checked+.slider:before{transform:translateX(calc(var(--width) - var(--height)));background-color:var(--t-page-background-colour)}.switch:has(:focus-visible) .slider{outline:#000 auto 2px}.wrapper:hover .slider:before{transform:translateX(var(--hover-translate))}.wrapper:hover input:checked+.slider:before{transform:translateX(calc(var(--width) - var(--height) - var(--hover-translate)))}";

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
        return h("internal-style-provider", { key: 'd875189c14381ea71b33ebf08375e956568387e5', hueOffsetInTurns: this.hue }, h("label", { key: '3c23b4736da0acaa023fd055964a1bc30132b0ea', htmlFor: "input", class: "wrapper" }, h("span", { key: 'c6642122295817c2617b2ba812119bf3485254fb', class: "switch" }, h("input", { key: '943cb9fdec739d3211d38feba757678a6c8d3f8d', id: "input", type: "checkbox", onChange: this.handleChange, checked: this.checked }), h("span", { key: '5307498ba242f68cb5fa2d234d06a1d27390a999', class: "slider" })), h("span", { key: 'b04192f3712c391d43bbe288ae96f410da5f74c7', class: "label" }, h("slot", { key: '79a16f2ef7a33dd8d4e4c4d7711847e960320b0b' }))));
    }
};
TSwitch.style = tSwitchCss;

export { TSwitch as t_switch };

//# sourceMappingURL=t-switch.entry.js.map