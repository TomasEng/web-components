import { r as registerInstance, h } from './index-d71aeab2.js';

const tButtonCss = "button{--shadow-size:1px;--shadow-blur:calc(var(--shadow-size) * 2);--inset-shadow-size:0px;--inset-shadow-blur:calc(var(--inset-shadow-size) * 2);--t-gradient-factor:unset;--gradient-term:calc(l * var(--t-gradient-factor));--button-colour:var(--t-base-colour);background:linear-gradient(\n    to top,\n    oklch(from var(--button-colour) calc((l - var(--gradient-term))) c h),\n    oklch(from var(--button-colour) l c h),\n    oklch(from var(--button-colour) calc((l + var(--gradient-term))) c h)\n  );cursor:pointer;border-radius:100px;font-size:1rem;padding:.5rem;color:var(--t-font-colour-default);transition:box-shadow var(--transistion-duration);border:1px solid var(--t-base-border-colour)}button:hover{--inset-shadow-size:0.5rem;--button-colour:oklch(from var(--t-base-colour) calc(l + var(--gradient-term) / 2) c h)}button:active{--inset-shadow-size:0px;--transistion-duration:0s;--gradient-factor:0}*{--t-base-colour-hue-offset:180}";

const TButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hue = 0;
    }
    render() {
        return h("internal-style-provider", { key: 'e86c5a741ae8aad80dacafdba49d349317fea031', hueOffsetInTurns: this.hue }, h("button", { key: '0539a8f78f7dd2d08bf697d303e136793c0965d9' }, h("slot", { key: '149ce2176daa63a9ddb14edc63abe4f7a5bf792a' })));
    }
};
TButton.style = tButtonCss;

export { TButton as t_button };

//# sourceMappingURL=t-button.entry.js.map