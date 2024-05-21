import { r as registerInstance, g as getElement } from './index-d1462df2.js';
import { D as DEFAULT_HUE, a as DEFAULT_CHROMA } from './constants-500bbf63.js';
import { s as state } from './store-9af57529.js';

const PreviewComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.html = undefined;
        this.script = undefined;
        this.hue = DEFAULT_HUE;
        this.chroma = DEFAULT_CHROMA;
    }
    componentDidRender() {
        const wrapperElement = this.element.querySelector('#wrapper');
        wrapperElement.style.padding = '1rem';
        wrapperElement.style.background = state.mode === 'dark' ? '#000' : '#fff';
    }
    render() {
        state.mode;
    }
    connectedCallback() {
        this.element.innerHTML = `
      <t-context baseHue="${this.hue}" baseChroma="${this.chroma}" id="context">
        <div id="wrapper">
          ${this.html}
        </div>
      </t-context>
    `;
        if (this.script) {
            const script = document.createElement('script');
            document.body.appendChild(script);
            script.innerHTML = this.script;
        }
    }
    get element() { return getElement(this); }
};

export { PreviewComponent as preview_component };

//# sourceMappingURL=preview-component.entry.js.map