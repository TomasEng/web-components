import { r as registerInstance, g as getElement } from './index-d1462df2.js';

const ComponentPreview = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentTestCode = undefined;
    }
    connectedCallback() {
        const html = this.componentTestCode.generateMinifiedHtml();
        const script = this.componentTestCode.generateMinifiedScript();
        this.element.innerHTML = html;
        if (script) {
            const scriptElement = document.createElement('script');
            document.body.appendChild(scriptElement);
            scriptElement.innerHTML = script;
        }
    }
    get element() { return getElement(this); }
};

export { ComponentPreview as component_preview };

//# sourceMappingURL=component-preview.entry.js.map