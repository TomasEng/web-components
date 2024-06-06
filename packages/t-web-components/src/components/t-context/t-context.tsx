import { Component, h, Prop, Element, Method } from '@stencil/core';

import { Chromator, Oklch } from 'chromator';
import { asPercents } from '../../utils/utils';
import {
  BASE_COLOUR_LUMINANCE_DARK_MODE,
  BASE_COLOUR_LUMINANCE_LIGHT_MODE,
  DARK_MODE_BACKGROUND_LUMINANCE,
  HIGH_CONTRAST,
  INPUT_FIELD_TO_PAGE_CONTRAST,
  LIGHT_MODE_BACKGROUND_LUMINANCE,
  LOW_CONTRAST,
} from '../../constants';
import {
  getDecreasedLuminanceByContrast,
  getIncreasedLuminanceByContrast,
} from '../../utils/colourUtils';
import state, {selectMode} from '../../store';
import { SelectedMode } from '../../types/Mode';

@Component({
  tag: 't-context',
  styleUrl: 't-context.css',
})
export class TContext {

  @Prop() baseHue: number = 263;
  @Prop() baseChroma: number = 0.4;
  @Prop() contrast: number = 1;

  @Method() async selectMode(mode: SelectedMode) {
    selectMode(mode);
  }

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
    this.setCssVariable('--t-colour-base-app-hue', hue.toFixed() + 'deg');
    this.setCssVariable('--t-colour-base-app-chroma', chroma.toFixed(2));
    this.setCssVariable('--t-colour-page-background', this.pageBackgroundColour().getOklchCode());
    this.setCssVariable('--t-colour-base-app-lightness', asPercents(l));
    this.setCssVariable('--t-colour-base-app', baseColour.getOklchCode());
    this.setCssVariable('--t-colour-base-app-high-contrast', this.baseColourHighContrast().getOklchCode());
    this.setCssVariable('--t-colour-base-app-low-contrast', this.baseColourLowContrast().getOklchCode());
    this.setCssVariable('--t-colour-grey', this.greyColour().getOklchCode());
    this.setCssVariable('--t-colour-grey-high-contrast', this.greyColourHighContrast().getOklchCode());
    this.setCssVariable('--t-colour-grey-low-contrast', this.greyColourLowContrast().getOklchCode());
    this.setCssVariable('--t-colour-input-field-background', this.inputFieldColour().getHexCode());
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

  private greyColour(): Chromator {
    const luminance = this.baseColourLuminance();
    const grey = new Chromator('#000');
    grey.setRelativeLuminance(luminance, 'oklch');
    return grey;
  }

  private greyColourHighContrast(): Chromator {
    return this.getAdjustedColourByContrast(this.pageBackgroundColour(), HIGH_CONTRAST);
  }

  private greyColourLowContrast(): Chromator {
    return this.getAdjustedColourByContrast(this.pageBackgroundColour(), LOW_CONTRAST);
  }

  private getAdjustedColourByContrast(colour: Chromator, contrast: number): Chromator {
    const newColour = colour.copy();
    if (this.isDarkMode()) {
      return newColour.increaseLuminanceByContrast(contrast);
    } else {
      return newColour.decreaseLuminanceByContrast(contrast);
    }
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

  private baseColourHighContrast(): Chromator {
    return this.baseColour().copy().setRelativeLuminance(this.baseColourHighContrastLuminance(), 'oklch');
  }

  private baseColourHighContrastLuminance(): number {
    return this.isDarkMode()
      ? getIncreasedLuminanceByContrast(DARK_MODE_BACKGROUND_LUMINANCE, HIGH_CONTRAST)
      : getDecreasedLuminanceByContrast(LIGHT_MODE_BACKGROUND_LUMINANCE, HIGH_CONTRAST);
  }

  private baseColourLowContrast(): Chromator {
    return this.baseColour().copy().setRelativeLuminance(this.baseColourLowContrastLuminance(), 'oklch');
  }

  private baseColourLowContrastLuminance(): number {
    return this.isDarkMode()
      ? getIncreasedLuminanceByContrast(DARK_MODE_BACKGROUND_LUMINANCE, LOW_CONTRAST)
      : getDecreasedLuminanceByContrast(LIGHT_MODE_BACKGROUND_LUMINANCE, LOW_CONTRAST);
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
