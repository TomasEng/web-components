import { Component, h, Prop, Element } from '@stencil/core';
import { Chromator, Oklch } from 'chromator';
import {
  BASE_COLOUR_LUMINANCE_DARK_MODE,
  BASE_COLOUR_LUMINANCE_LIGHT_MODE,
  DARK_MODE_BACKGROUND_LUMINANCE,
  DEFAULT_BORDER_TO_BACKGROUND_CONTRAST,
  GRADIENT_FACTOR_DARK_MODE,
  GRADIENT_FACTOR_LIGHT_MODE,
  LIGHT_MODE_BACKGROUND_LUMINANCE,
} from '../../constants';
import { asPercents } from '../../utils/utils';
import state from '../../store';
import { getDecreasedLuminanceByContrast, getIncreasedLuminanceByContrast } from '../../utils/colourUtils';

@Component({
  tag: 'internal-style-provider',
  styleUrl: 'internal-style-provider.css',
  shadow: true,
})
export class InternalStyleProvider {

  @Prop() hueOffsetInTurns: number = 0;

  @Element() element: HTMLElement;

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
    return <slot/>;
  }

  private hueWithOffset(): number {
    return (state.baseHue + this.hueOffsetInTurns * 360) % 360;
  }

  private baseColour(): Chromator {
    const { baseChroma } = state;
    const hue = this.hueWithOffset();
    const baseOklch: Oklch = { hue, chroma: baseChroma, l: 0.5 };
    return new Chromator(baseOklch).setRelativeLuminance(this.baseColourLuminance(), 'oklch');
  }

  private baseColourLuminance(): number {
    return this.isDarkMode() ? BASE_COLOUR_LUMINANCE_DARK_MODE : BASE_COLOUR_LUMINANCE_LIGHT_MODE;
  }

  private isDarkMode(): boolean {
    return state.mode === 'dark';
  }

  private baseContrastColour(): Chromator {
    return this.baseColour().copy().setRelativeLuminance(this.baseContrastColourLuminance(), 'oklch');
  }

  private baseContrastColourLuminance(): number {
    return this.isDarkMode()
      ? getIncreasedLuminanceByContrast(DARK_MODE_BACKGROUND_LUMINANCE, DEFAULT_BORDER_TO_BACKGROUND_CONTRAST)
      : getDecreasedLuminanceByContrast(LIGHT_MODE_BACKGROUND_LUMINANCE, DEFAULT_BORDER_TO_BACKGROUND_CONTRAST);
  }

  private gradientFactor(): number {
    return this.isDarkMode() ? GRADIENT_FACTOR_DARK_MODE : GRADIENT_FACTOR_LIGHT_MODE;
  }

  private setCssVariable(key: `--t-${string}`, value: string) {
    this.element.style.setProperty(key, value);
  }
}
