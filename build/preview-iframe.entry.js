import { r as registerInstance, h } from './index-d1462df2.js';
import { D as DEFAULT_HUE, a as DEFAULT_CHROMA } from './constants-500bbf63.js';

const previewIframeCss = "iframe{width:100%;border:1px solid var(--t-font-colour-default)}";

const PreviewIframe = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentTestCode = undefined;
        this.hue = DEFAULT_HUE;
        this.chroma = DEFAULT_CHROMA;
    }
    render() {
        const html = this.componentTestCode.generateMinifiedHtml();
        const script = this.componentTestCode.generateMinifiedScript();
        return h("iframe", { key: '6fd08ad29294e0fcbc16ac0bbf3a77af57ef743a', src: `?html=${html}&script=${script}` });
    }
};
PreviewIframe.style = previewIframeCss;

export { PreviewIframe as preview_iframe };

//# sourceMappingURL=preview-iframe.entry.js.map