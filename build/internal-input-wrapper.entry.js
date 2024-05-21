import { r as registerInstance, h, g as getElement } from './index-d1462df2.js';

const internalInputWrapperCss = ".wrapper{display:flex;flex-direction:column;gap:var(--t-spacing-in-group)}.wrapper.left{flex-direction:row}";

const InternalStyleProvider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.labelPlacement = 'top';
    }
    render() {
        return h("div", { key: '7f25a184fa2455d6d9f3a8895b5c637bf96f9d4f', class: 'wrapper ' + this.labelPlacement }, h("slot", { key: '767fa132c84c0d7450d0fd2c3a28ff77e8ae0cc7', name: 'label' }), h("slot", { key: '473d59c2c74e419e9af76925ea5c8b9e683ec657', name: 'input' }));
    }
    get element() { return getElement(this); }
};
InternalStyleProvider.style = internalInputWrapperCss;

export { InternalStyleProvider as internal_input_wrapper };

//# sourceMappingURL=internal-input-wrapper.entry.js.map