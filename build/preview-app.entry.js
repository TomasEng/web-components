import { r as registerInstance, h } from './index-d1462df2.js';
import { D as DEFAULT_HUE, a as DEFAULT_CHROMA, b as DEFAULT_NUMBER_OF_HUES, P as PATH_ABOUT } from './constants-500bbf63.js';

const PreviewApp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.handleColourSettingsChange = ({ detail }) => {
            this.baseHue = detail.hue;
            this.baseChroma = detail.chroma;
            this.numberOfHues = detail.numberOfHues;
            this.contrast = detail.contrast;
        };
        this.baseHue = DEFAULT_HUE;
        this.baseChroma = DEFAULT_CHROMA;
        this.numberOfHues = DEFAULT_NUMBER_OF_HUES;
        this.contrast = 1;
        this.urlHash = window.location.hash;
        this.url = new URL(window.location.href);
    }
    connectedCallback() {
        this.setUrlHash();
        this.setUrl();
        window.addEventListener('hashchange', () => {
            this.setUrlHash();
        });
        window.addEventListener('popstate', () => {
            this.setUrl();
        });
    }
    setUrlHash() {
        this.urlHash = window.location.hash;
    }
    setUrl() {
        this.url = new URL(window.location.href);
    }
    render() {
        const isAboutPageOpen = this.url.searchParams.get('s') === PATH_ABOUT;
        const colourSettings = {
            hue: this.baseHue,
            chroma: this.baseChroma,
            numberOfHues: this.numberOfHues,
            contrast: this.contrast,
        };
        return (h("t-context", { key: '147677c14fc7961f7f7a11293c22c99baf7db10b', baseHue: this.baseHue, baseChroma: this.baseChroma, contrast: this.contrast }, h("t-layout", { key: '27b3f16c760e10730883e5049bb3d3a7f9386af7' }, h("t-layout-header", { key: '1c592f3756c46c56998a06ffd69e169debd2ce53', slot: 'header', siteTitle: "Tomas sitt designsystem", navItems: [
                { label: 'Oversikt', href: '?', open: !isAboutPageOpen },
                { label: 'Om', href: '?s=' + PATH_ABOUT, open: isAboutPageOpen },
            ] }), isAboutPageOpen ? h("page-about", { slot: 'main' }) : (h("page-components", { slot: 'main', colourSettings: colourSettings, onColourSettingsChange: this.handleColourSettingsChange })))));
    }
};

export { PreviewApp as preview_app };

//# sourceMappingURL=preview-app.entry.js.map