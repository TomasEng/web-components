import { r as registerInstance, h } from './index-d1462df2.js';

const tButtonCss = ".t-button {\r\n  --button-colour: var(--t-base-colour);\r\n  background: linear-gradient(\r\n    to top,\r\n    color-mix(in oklab, var(--button-colour) 90%, black),\r\n    var(--button-colour),\r\n    color-mix(in oklab, var(--button-colour) 90%, white)\r\n  );\r\n  box-shadow:\r\n    inset color-mix(in oklab, var(--button-colour) 75%, white) 0 1px,\r\n    inset color-mix(in oklab, var(--button-colour) 75%, black) 0 -1px,\r\n    color-mix(in oklab, white 30%, transparent) 0 1px 1px,\r\n    color-mix(in oklab, black 10%, transparent) 0 -1px 1px,\r\n    rgb(0 0 0 / 0.2) 0 -1px 1px;\r\n  align-items: center;\r\n  border-radius: 100px;\r\n  border: 0 solid var(--t-base-border-colour);\r\n  color: var(--t-font-colour-default);\r\n  cursor: pointer;\r\n  display: inline-flex;\r\n  font-size: 1rem;\r\n  gap: var(--t-spacing-inline);\r\n  line-height: 1;\r\n  padding: .5rem;\r\n  transition: box-shadow var(--transistion-duration);\r\n\r\n  .icon {\r\n    align-self: center;\r\n  }\r\n}\r\n\r\n.t-button:hover {\r\n  --button-colour: color-mix(in oklab, var(--t-base-colour) 75%, white);\r\n}\r\n\r\n.t-button:active {\r\n  --transistion-duration: 0s;\r\n  background: var(--button-colour);\r\n}\r\n\r\n* {\r\n  --t-base-colour-hue-offset: 180;\r\n}\r\n";

const TButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hue = 0;
        this.buttonAttributes = undefined;
        this.icon = undefined;
    }
    render() {
        return h("internal-style-provider", { key: 'aac78e33c8c490730a1bf794443d5ef6d3af3f67', hueOffsetInTurns: this.hue }, h("button", Object.assign({ key: '11fbea534809a8511fc0b6122197e356a1c000de', class: 't-button', type: 'button' }, this.buttonAttributes), this.icon && h("span", { class: 'icon', "aria-hidden": true }, this.icon), h("slot", { key: '9945bafcfdb4166b8d1056a1b5b6857eab335951' })));
    }
};
TButton.style = tButtonCss;

export { TButton as t_button };

//# sourceMappingURL=t-button.entry.js.map