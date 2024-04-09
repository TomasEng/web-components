import { r as registerInstance, h, g as getElement } from './index-d71aeab2.js';
import { a as asPercents, s as state, d as dist, B as BASE_COLOUR_LUMINANCE_DARK_MODE, b as BASE_COLOUR_LUMINANCE_LIGHT_MODE, g as getIncreasedLuminanceByContrast, D as DARK_MODE_BACKGROUND_LUMINANCE, c as DEFAULT_BORDER_TO_BACKGROUND_CONTRAST, e as getDecreasedLuminanceByContrast, L as LIGHT_MODE_BACKGROUND_LUMINANCE, G as GRADIENT_FACTOR_DARK_MODE, f as GRADIENT_FACTOR_LIGHT_MODE } from './store-bc9fba1a.js';

const internalStyleProviderCss = ":host{--t-base-colour:oklch(var(--t-base-colour-lightness) var(--t-base-colour-chroma) var(--t-base-colour-hue));--t-selection-background-colour:var(--t-base-fill-colour)}";

const InternalStyleProvider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hueOffsetInTurns = 0;
    }
    render() {
        const hue = this.hueWithOffset();
        const baseColour = this.baseColour();
        const { l } = baseColour.getOklch();
        this.setCssVariable('--t-base-colour-hue', hue.toFixed() + 'deg');
        this.setCssVariable('--t-base-colour-lightness', asPercents(l));
        this.setCssVariable('--t-base-colour', 'oklch(var(--t-base-colour-lightness) var(--t-base-colour-chroma, 0.4) var(--t-base-colour-hue))');
        this.setCssVariable('--t-base-border-colour', this.baseContrastColour().getOklchCode());
        this.setCssVariable('--t-base-fill-colour', this.baseContrastColour().getOklchCode());
        this.setCssVariable('--t-gradient-factor', this.gradientFactor().toFixed(2));
        return h("slot", { key: '13cb92ae36157735a2afe28b524f3cc38b0e1081' });
    }
    hueWithOffset() {
        return (state.baseHue + this.hueOffsetInTurns * 360) % 360;
    }
    baseColour() {
        const { baseChroma } = state;
        const hue = this.hueWithOffset();
        const baseOklch = { hue, chroma: baseChroma, l: 0.5 };
        return new dist.Chromator(baseOklch).setRelativeLuminance(this.baseColourLuminance(), 'oklch');
    }
    baseColourLuminance() {
        return state.darkMode ? BASE_COLOUR_LUMINANCE_DARK_MODE : BASE_COLOUR_LUMINANCE_LIGHT_MODE;
    }
    baseContrastColour() {
        return this.baseColour().copy().setRelativeLuminance(this.baseContrastColourLuminance(), 'oklch');
    }
    baseContrastColourLuminance() {
        return state.darkMode
            ? getIncreasedLuminanceByContrast(DARK_MODE_BACKGROUND_LUMINANCE, DEFAULT_BORDER_TO_BACKGROUND_CONTRAST)
            : getDecreasedLuminanceByContrast(LIGHT_MODE_BACKGROUND_LUMINANCE, DEFAULT_BORDER_TO_BACKGROUND_CONTRAST);
    }
    gradientFactor() {
        return state.darkMode ? GRADIENT_FACTOR_DARK_MODE : GRADIENT_FACTOR_LIGHT_MODE;
    }
    setCssVariable(key, value) {
        this.element.style.setProperty(key, value);
    }
    get element() { return getElement(this); }
};
InternalStyleProvider.style = internalStyleProviderCss;

export { InternalStyleProvider as internal_style_provider };

//# sourceMappingURL=internal-style-provider.entry.js.map