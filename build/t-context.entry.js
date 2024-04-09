import { r as registerInstance, h, g as getElement } from './index-d71aeab2.js';
import { s as state, a as asPercents, d as dist, B as BASE_COLOUR_LUMINANCE_DARK_MODE, b as BASE_COLOUR_LUMINANCE_LIGHT_MODE, D as DARK_MODE_BACKGROUND_LUMINANCE, L as LIGHT_MODE_BACKGROUND_LUMINANCE, g as getIncreasedLuminanceByContrast, c as DEFAULT_BORDER_TO_BACKGROUND_CONTRAST, e as getDecreasedLuminanceByContrast, I as INPUT_FIELD_TO_PAGE_CONTRAST } from './store-bc9fba1a.js';

const tContextCss = ".root{--t-base-border-colour:unset;--t-base-colour-hue:unset;--t-base-colour-lightness:unset;--t-base-colour-saturation:unset;--t-base-colour-chroma:unset;--t-base-colour:oklch(\n    var(--t-base-colour-lightness)\n    var(--t-base-colour-chroma)\n    calc(var(--t-base-colour-hue) + var(--t-base-colour-hue-offset, 0) * 1turn)\n  );--t-base-fill-colour:var(--t-base-border-colour);--t-font-colour-default:var(--t-full-contrast-colour);--t-input-field-background-colour:unset;--t-page-background-colour:unset;--t-selection-background-colour:var(--t-base-fill-colour);--t-selection-font-colour:var(--t-font-colour-default);--t-transition-duration-long:calc(--t-transition-duration-medium * 2);--t-transition-duration-medium:calc(--t-transition-duration-short * 2);--t-transition-duration-short:0.1s;--t-background-background-colour:lch(from var(--t-page-background-colour) calc(l * 0.9) h c)}@media (prefers-reduced-motion){.root{--t-transition-duration-short:0}}.root *::selection{background-color:var(--t-selection-background-colour);color:var(--t-selection-font-colour)}.root.light{--t-selection-font-colour:white;--t-full-contrast-colour:black}.root.dark{--t-selection-font-colour:black;--t-full-contrast-colour:white}";

const TContext = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.darkMode = false;
        this.baseHue = 160;
        this.baseChroma = 0.3;
    }
    render() {
        state.darkMode = this.darkMode;
        state.baseHue = this.baseHue;
        state.baseChroma = this.baseChroma;
        const modeClass = this.darkMode ? 'dark' : 'light';
        const baseColour = this.baseColour();
        const { hue, chroma, l } = baseColour.getOklch();
        this.setCssVariable('--t-base-colour-hue', hue.toFixed() + 'deg');
        this.setCssVariable('--t-base-colour-chroma', chroma.toFixed(2));
        this.setCssVariable('--t-page-background-colour', this.pageBackgroundColour().getHexCode());
        this.setCssVariable('--t-base-colour', baseColour.getOklchCode());
        this.setCssVariable('--t-base-colour-lightness', asPercents(l));
        this.setCssVariable('--t-base-border-colour', this.baseBorderColour().getHexCode());
        this.setCssVariable('--t-input-field-background-colour', this.inputFieldColour().getHexCode());
        return h("div", { key: 'd4780ff1f32f70f2ede0069b67785040f4b912e1', class: 'root ' + modeClass }, h("slot", { key: '12050353b58dabf1bb86c56f9920e5dc24a6e955' }));
    }
    baseColour() {
        const hue = this.baseHue;
        const chroma = this.baseChroma;
        const oklch = { hue, chroma, l: 0.5 };
        return new dist.Chromator(oklch).setRelativeLuminance(this.baseColourLuminance(), 'oklch');
    }
    baseColourLuminance() {
        return this.darkMode ? BASE_COLOUR_LUMINANCE_DARK_MODE : BASE_COLOUR_LUMINANCE_LIGHT_MODE;
    }
    pageBackgroundColour() {
        const backgroundColour = new dist.Chromator('#fff');
        backgroundColour.setRelativeLuminance(this.pageBackgroundLuminance(), 'oklch');
        return backgroundColour;
    }
    pageBackgroundLuminance() {
        return this.darkMode ? DARK_MODE_BACKGROUND_LUMINANCE : LIGHT_MODE_BACKGROUND_LUMINANCE;
    }
    baseBorderColour() {
        return this.baseColour().copy().setRelativeLuminance(this.baseBorderColourLuminance(), 'oklch');
    }
    baseBorderColourLuminance() {
        return this.darkMode
            ? getIncreasedLuminanceByContrast(DARK_MODE_BACKGROUND_LUMINANCE, DEFAULT_BORDER_TO_BACKGROUND_CONTRAST)
            : getDecreasedLuminanceByContrast(LIGHT_MODE_BACKGROUND_LUMINANCE, DEFAULT_BORDER_TO_BACKGROUND_CONTRAST);
    }
    inputFieldColour() {
        const fieldColour = new dist.Chromator('#fff');
        fieldColour.setRelativeLuminance(this.inputFieldColourLuminance(), 'oklch');
        return fieldColour;
    }
    inputFieldColourLuminance() {
        return this.darkMode
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