import { r as registerInstance, h } from './index-d1462df2.js';

const tSpinnerCss = ".t-spinner{--size:2rem;animation:spin 1s linear infinite;background-color:transparent;border-color:var(--t-small-contrast-colour);border-radius:50%;border-style:solid;border-top-color:var(--t-base-fill-colour);border-width:4px;box-sizing:border-box;display:inline-block;height:var(--size);position:relative;width:var(--size)}@keyframes spin{to{transform:rotate(1turn)}}";

const TSpinner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.spinnerTitle = 'Laster';
    }
    render() {
        return h("span", { key: 'b606c15ae647b443fa3268aa2045b67d37ebe685', class: 't-spinner', title: this.spinnerTitle });
    }
};
TSpinner.style = tSpinnerCss;

export { TSpinner as t_spinner };

//# sourceMappingURL=t-spinner.entry.js.map