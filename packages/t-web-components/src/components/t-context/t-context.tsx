import { Component, h, Prop, Element } from '@stencil/core';

import { Chromator, Oklch } from 'chromator';
import { asPercents } from '../../utils/utils';
import {
  BASE_COLOUR_LUMINANCE_DARK_MODE,
  BASE_COLOUR_LUMINANCE_LIGHT_MODE,
  DARK_MODE_BACKGROUND_LUMINANCE,
  HIGH_CONTRAST,
  INPUT_FIELD_TO_PAGE_CONTRAST,
  LIGHT_MODE_BACKGROUND_LUMINANCE,
} from '../../constants';
import {
  getDecreasedLuminanceByContrast,
  getIncreasedLuminanceByContrast,
} from '../../utils/colourUtils';
import state from '../../store';
import { Mode } from '../../types/Mode';

@Component({
  tag: 't-context',
  styleUrl: 't-context.css',
})
export class TContext {

  @Prop() baseHue: number = 263;
  @Prop() baseChroma: number = 0.4;
  @Prop() contrast: number = 1;

  @Element() element: HTMLElement;

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

    return <div class={'root ' + modeClass}>
      <slot/>
    </div>;
  }

  private baseColour(): Chromator {
    const hue = state.baseHue;
    const chroma = state.baseChroma;
    const oklch: Oklch = { hue, chroma, l: 0.5 };
    return new Chromator(oklch).setRelativeLuminance(this.baseColourLuminance(), 'oklch');
  }

  private baseColourLuminance(): number {
    return this.isDarkMode() ? BASE_COLOUR_LUMINANCE_DARK_MODE : BASE_COLOUR_LUMINANCE_LIGHT_MODE;
  }

  private isDarkMode(): boolean {
    return state.mode === 'dark';
  }

  private pageBackgroundColour(): Chromator {
    const backgroundColour = new Chromator('#fff');
    backgroundColour.setRelativeLuminance(this.pageBackgroundLuminance(), 'oklch');
    return backgroundColour;
  }

  private pageBackgroundLuminance(): number {
    return this.isDarkMode() ? DARK_MODE_BACKGROUND_LUMINANCE : LIGHT_MODE_BACKGROUND_LUMINANCE;
  }

  private baseBorderColour(): Chromator {
    return this.baseColour().copy().setRelativeLuminance(this.baseBorderColourLuminance(), 'oklch');
  }

  private baseBorderColourLuminance(): number {
    return this.isDarkMode()
      ? getIncreasedLuminanceByContrast(DARK_MODE_BACKGROUND_LUMINANCE, HIGH_CONTRAST)
      : getDecreasedLuminanceByContrast(LIGHT_MODE_BACKGROUND_LUMINANCE, HIGH_CONTRAST);
  }

  private inputFieldColour(): Chromator {
    const fieldColour = new Chromator('#fff');
    fieldColour.setRelativeLuminance(this.inputFieldColourLuminance(), 'oklch');
    return fieldColour;
  }

  private inputFieldColourLuminance(): number {
    return this.isDarkMode()
      ? getIncreasedLuminanceByContrast(DARK_MODE_BACKGROUND_LUMINANCE, INPUT_FIELD_TO_PAGE_CONTRAST)
      : getDecreasedLuminanceByContrast(LIGHT_MODE_BACKGROUND_LUMINANCE, INPUT_FIELD_TO_PAGE_CONTRAST);
  }

  private setCssVariable(key: `--t-${string}`, value: string) {
    this.element.style.setProperty(key, value);
  }
}
