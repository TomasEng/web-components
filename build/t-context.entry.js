import { r as registerInstance, h, g as getElement } from './index-d1462df2.js';
import { a as asPercents, d as dist, g as getIncreasedLuminanceByContrast, b as getDecreasedLuminanceByContrast } from './colourUtils-ab1b9726.js';
import { B as BASE_COLOUR_LUMINANCE_DARK_MODE, c as BASE_COLOUR_LUMINANCE_LIGHT_MODE, d as DARK_MODE_BACKGROUND_LUMINANCE, L as LIGHT_MODE_BACKGROUND_LUMINANCE, H as HIGH_CONTRAST, I as INPUT_FIELD_TO_PAGE_CONTRAST } from './constants-500bbf63.js';
import { a as selectMode, s as state } from './store-9af57529.js';
import './_commonjsHelpers-6cbf8316.js';

const tContextCss = ".root{--t-base-border-colour:unset;--t-base-colour-hue:unset;--t-base-colour-lightness:unset;--t-base-colour-saturation:unset;--t-base-colour-chroma:unset;--t-offset-base-colour-hue:calc(var(--t-base-colour-hue) + var(--t-base-colour-hue-offset, 0) * 1turn);--t-base-colour:oklch(\r\n    var(--t-base-colour-lightness)\r\n    var(--t-base-colour-chroma)\r\n    var(--t-offset-base-colour-hue)\r\n  );--t-background-background-colour:color-mix(in oklab, var(--t-page-background-colour) 90%, black);--t-base-contrast-colour:unset;--t-base-fill-colour:var(--t-base-border-colour);--t-base-low-contrast-colour:unset;--t-border-radius-default:6px;--t-clickable-area-size:44px;--t-default-font-size:1rem;--t-font-colour-default:var(--t-full-contrast-colour);--t-input-field-background-colour:color-mix(in oklab, var(--t-full-contrast-colour) 5%, transparent);--t-navbar-item-border-radius:8px;--t-page-background-colour:unset;--t-page-max-width:1200px;--t-panel-background-colour:color-mix(in oklab, var(--t-base-colour) 12%, var(--t-small-contrast-colour));--t-popover-alpha:0.75;--t-popover-backdrop-filter:blur(8px);--t-popover-background-colour-base:color-mix(in oklab, var(--t-small-contrast-colour) calc(var(--t-popover-alpha) * 100%), transparent);--t-popover-border-radius:var(--t-border-radius-default);--t-popover-shadow:#000c 0 4px 12px;--t-selection-background-colour:var(--t-base-fill-colour);--t-selection-font-colour:var(--t-font-colour-default);--t-small-contrast-colour:color-mix(in oklab, var(--t-page-background-colour) 95%, var(--t-full-contrast-colour));--t-spacing-default:1rem;--t-spacing-in-group:0.5rem;--t-spacing-inline:0.25rem;--t-spacing-large:2rem;--t-transition-duration-long:0.4s;--t-transition-duration-medium:0.2s;--t-transition-duration-short:0.1s;--t-z-index-dropdown-menu:200;--t-z-index-tooltip:100;color:var(--t-font-colour-default);font-family:Calibri, Arial, sans-serif;font-size:var(--t-default-font-size);min-height:100vh}@media (prefers-reduced-motion){.root{--t-transition-duration-short:0}}.root *::selection{background-color:var(--t-selection-background-colour);color:var(--t-selection-font-colour)}.root.light{--t-selection-font-colour:white;--t-full-contrast-colour:black;--t-mode-colour-scaling:1}.root.dark{--t-selection-font-colour:black;--t-full-contrast-colour:white;--t-mode-colour-scaling:-1}";

const TContext = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.baseHue = 263;
        this.baseChroma = 0.4;
        this.contrast = 1;
    }
    async selectMode(mode) {
        selectMode(mode);
    }
    componentWillRender() {
        state.baseHue = this.baseHue;
        state.baseChroma = this.baseChroma;
        state.contrast = this.contrast;
    }
    render() {
        const modeClass = state.mode;
        const baseColour = this.baseColour();
        const { hue, chroma, l } = baseColour.getOklch();
        this.setCssVariable('--t-base-colour-hue', hue.toFixed() + 'deg');
        this.setCssVariable('--t-base-colour-chroma', chroma.toFixed(2));
        this.setCssVariable('--t-page-background-colour', this.pageBackgroundColour().getHexCode());
        this.setCssVariable('--t-base-colour', baseColour.getOklchCode());
        this.setCssVariable('--t-base-colour-lightness', asPercents(l));
        this.setCssVariable('--t-base-border-colour', this.baseBorderColour().getHexCode());
        this.setCssVariable('--t-input-field-background-colour', this.inputFieldColour().getHexCode());
        this.element.style.setProperty('filter', `contrast(${this.contrast})`);
        return h("div", { key: 'bc402efb9333966ed267ef05d7f3e597a4dec980', class: 'root ' + modeClass }, h("slot", { key: '4c1a5185225c81034cbd934325113f6318cab5c8' }));
    }
    baseColour() {
        const hue = state.baseHue;
        const chroma = state.baseChroma;
        const oklch = { hue, chroma, l: 0.5 };
        return new dist.Chromator(oklch).setRelativeLuminance(this.baseColourLuminance(), 'oklch');
    }
    baseColourLuminance() {
        return this.isDarkMode() ? BASE_COLOUR_LUMINANCE_DARK_MODE : BASE_COLOUR_LUMINANCE_LIGHT_MODE;
    }
    isDarkMode() {
        return state.mode === 'dark';
    }
    pageBackgroundColour() {
        const backgroundColour = new dist.Chromator('#fff');
        backgroundColour.setRelativeLuminance(this.pageBackgroundLuminance(), 'oklch');
        return backgroundColour;
    }
    pageBackgroundLuminance() {
        return this.isDarkMode() ? DARK_MODE_BACKGROUND_LUMINANCE : LIGHT_MODE_BACKGROUND_LUMINANCE;
    }
    baseBorderColour() {
        return this.baseColour().copy().setRelativeLuminance(this.baseBorderColourLuminance(), 'oklch');
    }
    baseBorderColourLuminance() {
        return this.isDarkMode()
            ? getIncreasedLuminanceByContrast(DARK_MODE_BACKGROUND_LUMINANCE, HIGH_CONTRAST)
            : getDecreasedLuminanceByContrast(LIGHT_MODE_BACKGROUND_LUMINANCE, HIGH_CONTRAST);
    }
    inputFieldColour() {
        const fieldColour = new dist.Chromator('#fff');
        fieldColour.setRelativeLuminance(this.inputFieldColourLuminance(), 'oklch');
        return fieldColour;
    }
    inputFieldColourLuminance() {
        return this.isDarkMode()
            ? getIncreasedLuminanceByContrast(DARK_MODE_BACKGROUND_LUMINANCE, INPUT_FIELD_TO_PAGE_CONTRAST)
            : getDecreasedLuminanceByContrast(LIGHT_MODE_BACKGROUND_LUMINANCE, INPUT_FIELD_TO_PAGE_CONTRAST);
    }
    setCssVariable(key, value) {
        this.element.style.setProperty(key, value);
    }
    get element() { return getElement(this); }
};
TContext.style = tContextCss;

export { TContext as t_context };

//# sourceMappingURL=t-context.entry.js.map