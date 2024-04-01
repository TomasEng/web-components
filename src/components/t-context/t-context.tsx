import { Component, h, Prop, Element } from '@stencil/core';
import { Chromator, Hsl } from 'chromator';
import { asPercents } from '../../utils/utils';
import {
  BASE_COLOUR_LUMINANCE_DARK_MODE, BASE_COLOUR_LUMINANCE_LIGHT_MODE,
  DARK_MODE_BACKGROUND_LUMINANCE, DEFAULT_BORDER_TO_BACKGROUND_CONTRAST,
  LIGHT_MODE_BACKGROUND_LUMINANCE,
} from '../../constants';
import {
  getDecreasedLuminanceByContrast,
  getIncreasedLuminanceByContrast,
  getIncreasedLuminanceByContrastFromColour,
} from '../../utils/colourUtils';

@Component({
  tag: 't-context',
  styleUrl: 't-context.css',
})
export class TContext {

  @Prop() darkMode: boolean = false;
  @Prop() baseHue: number = 160;
  @Prop() baseSaturation: number = 1;

  @Element() element: HTMLElement;

  connectedCallback() {
    const baseColour = this.baseColour();
    const { hue, saturation } = baseColour.getHsl();
    this.setCssVariable('--t-base-colour-hue', hue.toFixed() + 'deg');
    this.setCssVariable('--t-base-colour-saturation', asPercents(saturation));
  }

  render() {
    const modeClass = this.darkMode ? 'dark' : 'light';
    const baseColour = this.baseColour();
    const { lightness } = baseColour.getHsl();
    this.setCssVariable('--t-page-background-colour', this.pageBackgroundColour().getHexCode());
    this.setCssVariable('--t-base-colour', baseColour.getHexCode());
    this.setCssVariable('--t-base-colour-lightness', asPercents(lightness));
    this.setCssVariable('--t-base-border-colour', this.baseBorderColour().getHexCode());

    return <div class={modeClass}><slot/></div>;
  }

  private baseColour(): Chromator {
    const hue = this.baseHue;
    const saturation = this.baseSaturation;
    const hsl: Hsl = { hue, saturation, lightness: 0.5 };
    return new Chromator(hsl).setRelativeLuminance(this.baseColourLuminance());
  }

  private baseColourLuminance(): number {
    return this.darkMode ? BASE_COLOUR_LUMINANCE_DARK_MODE : BASE_COLOUR_LUMINANCE_LIGHT_MODE;
  }

  private pageBackgroundColour(): Chromator {
    const backgroundColour = new Chromator('#fff');
    backgroundColour.setRelativeLuminance(this.pageBackgroundLuminance());
    return backgroundColour;
  }

  private pageBackgroundLuminance(): number {
    return this.darkMode ? DARK_MODE_BACKGROUND_LUMINANCE : LIGHT_MODE_BACKGROUND_LUMINANCE;
  }

  private baseBorderColour(): Chromator {
    return this.baseColour().copy().setRelativeLuminance(this.baseBorderColourLuminance());
  }

  private baseBorderColourLuminance(): number {
    return this.darkMode
      ? getIncreasedLuminanceByContrast(DARK_MODE_BACKGROUND_LUMINANCE, DEFAULT_BORDER_TO_BACKGROUND_CONTRAST)
      : getDecreasedLuminanceByContrast(LIGHT_MODE_BACKGROUND_LUMINANCE, DEFAULT_BORDER_TO_BACKGROUND_CONTRAST);
  }

  private setCssVariable(key: `--t-${string}`, value: string) {
    this.element.style.setProperty(key, value);
  }
}
