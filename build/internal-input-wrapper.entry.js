import { r as registerInstance, h, g as getElement } from './index-d71aeab2.js';

const internalInputWrapperCss = ".wrapper{display:flex;flex-direction:column;gap:var(--t-spacing-in-group);width:min-content}";

const InternalStyleProvider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hueOffsetInTurns = 0;
    }
    render() {
        return h("div", { key: '4f54d45baac2e34e4ab5a2b34b64589729af4bf5', class: "wrapper" }, h("slot", { key: '4587b8997083ed0de9dd542a6eaa3acfe3382248', name: 'label' }), h("slot", { key: 'c84bdadd73e0f281e8b5ed028029f510d4e88835', name: 'input' }));
    }
    get element() { return getElement(this); }
};
InternalStyleProvider.style = internalInputWrapperCss;

export { InternalStyleProvider as internal_input_wrapper };

//# sourceMappingURL=internal-input-wrapper.entry.js.map