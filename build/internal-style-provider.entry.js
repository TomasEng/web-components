import { r as registerInstance, h, g as getElement } from './index-d1462df2.js';
import { a as asPercents, d as dist, g as getIncreasedLuminanceByContrast, b as getDecreasedLuminanceByContrast } from './colourUtils-ab1b9726.js';
import { B as BASE_COLOUR_LUMINANCE_DARK_MODE, c as BASE_COLOUR_LUMINANCE_LIGHT_MODE, d as DARK_MODE_BACKGROUND_LUMINANCE, H as HIGH_CONTRAST, L as LIGHT_MODE_BACKGROUND_LUMINANCE, e as LOW_CONTRAST, G as GRADIENT_FACTOR_DARK_MODE, f as GRADIENT_FACTOR_LIGHT_MODE } from './constants-500bbf63.js';
import { s as state } from './store-9af57529.js';
import './_commonjsHelpers-6cbf8316.js';

const internalStyleProviderCss = ":host{--t-base-colour:oklch(var(--t-base-colour-lightness) var(--t-base-colour-chroma) var(--t-base-colour-hue));--t-selection-background-colour:var(--t-base-fill-colour);--t-link-colour:var(--t-base-contrast-colour);--t-link-visited-colour:oklch(from var(--t-base-contrast-colour) l c calc(h + 30))}";

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
        this.setCssVariable('--t-base-contrast-colour', this.baseContrastColour().getOklchCode());
        this.setCssVariable('--t-base-fill-colour', this.baseContrastColour().getOklchCode());
        this.setCssVariable('--t-gradient-factor', this.gradientFactor().toFixed(2));
        this.setCssVariable('--t-base-low-contrast-colour', this.baseLowContrastColour().getOklchCode());
        return h("slot", { key: '0246b4413167041691d01f3c32befe2d8f680e1f' });
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
        return this.isDarkMode() ? BASE_COLOUR_LUMINANCE_DARK_MODE : BASE_COLOUR_LUMINANCE_LIGHT_MODE;
    }
    isDarkMode() {
        return state.mode === 'dark';
    }
    baseContrastColour() {
        return this.baseColour().copy().setRelativeLuminance(this.baseContrastColourLuminance(), 'oklch');
    }
    baseContrastColourLuminance() {
        return this.isDarkMode()
            ? getIncreasedLuminanceByContrast(DARK_MODE_BACKGROUND_LUMINANCE, HIGH_CONTRAST)
            : getDecreasedLuminanceByContrast(LIGHT_MODE_BACKGROUND_LUMINANCE, HIGH_CONTRAST);
    }
    baseLowContrastColour() {
        return this.baseColour().copy().setRelativeLuminance(this.baseLowContrastColourLuminance(), 'oklch');
    }
    baseLowContrastColourLuminance() {
        return this.isDarkMode()
            ? getIncreasedLuminanceByContrast(DARK_MODE_BACKGROUND_LUMINANCE, LOW_CONTRAST)
            : getDecreasedLuminanceByContrast(LIGHT_MODE_BACKGROUND_LUMINANCE, LOW_CONTRAST);
    }
    gradientFactor() {
        return this.isDarkMode() ? GRADIENT_FACTOR_DARK_MODE : GRADIENT_FACTOR_LIGHT_MODE;
    }
    setCssVariable(key, value) {
        this.element.style.setProperty(key, value);
    }
    get element() { return getElement(this); }
};
InternalStyleProvider.style = internalStyleProviderCss;

export { InternalStyleProvider as internal_style_provider };

//# sourceMappingURL=internal-style-provider.entry.js.map