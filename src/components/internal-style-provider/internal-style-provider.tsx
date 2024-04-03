import { Component, h, Prop, Element } from '@stencil/core';
import { Chromator, Hsl } from 'chromator';
import {
  BASE_COLOUR_LUMINANCE_DARK_MODE,
  BASE_COLOUR_LUMINANCE_LIGHT_MODE,
  DARK_MODE_BACKGROUND_LUMINANCE, DEFAULT_BORDER_TO_BACKGROUND_CONTRAST, LIGHT_MODE_BACKGROUND_LUMINANCE,
} from '../../constants';
import { asPercents } from '../../utils/utils';
import state from '../../store';
import { getDecreasedLuminanceByContrast, getIncreasedLuminanceByContrast } from '../../utils/colourUtils';

@Component({
  tag: 'internal-style-provider',
  shadow: true,
})
export class InternalStyleProvider {

  @Prop() hueOffsetInTurns: number = 0;

  @Element() element: HTMLElement;

  render() {
    const hue = this.hueWithOffset();
    const baseColour = this.baseColour();
    const { lightness } = baseColour.getHsl();
    this.setCssVariable('--t-base-colour-hue', hue.toFixed() + 'deg');
    this.setCssVariable('--t-base-colour-lightness', asPercents(lightness));
    this.setCssVariable('--t-base-colour', 'hsl(var(--t-base-colour-hue), var(--t-base-colour-saturation), var(--t-base-colour-lightness))');
    this.setCssVariable('--t-base-border-colour', this.baseContrastColour().getHexCode());
    this.setCssVariable('--t-base-fill-colour', this.baseContrastColour().getHexCode());
    return <slot/>;
  }

  private hueWithOffset(): number {
    return (state.baseHue + this.hueOffsetInTurns * 360) % 360;
  }

  private baseColour(): Chromator {
    const { baseSaturation } = state;
    const hue = this.hueWithOffset();
    const baseHsl: Hsl = { hue, saturation: baseSaturation, lightness: 0.5 };
    return new Chromator(baseHsl).setRelativeLuminance(this.baseColourLuminance());
  }

  private baseColourLuminance(): number {
    return state.darkMode ? BASE_COLOUR_LUMINANCE_DARK_MODE : BASE_COLOUR_LUMINANCE_LIGHT_MODE;
  }

  private baseContrastColour(): Chromator {
    return this.baseColour().copy().setRelativeLuminance(this.baseContrastColourLuminance());
  }

  private baseContrastColourLuminance(): number {
    return state.darkMode
      ? getIncreasedLuminanceByContrast(DARK_MODE_BACKGROUND_LUMINANCE, DEFAULT_BORDER_TO_BACKGROUND_CONTRAST)
      : getDecreasedLuminanceByContrast(LIGHT_MODE_BACKGROUND_LUMINANCE, DEFAULT_BORDER_TO_BACKGROUND_CONTRAST);
  }

  private setCssVariable(key: `--t-${string}`, value: string) {
    this.element.style.setProperty(key, value);
  }
}
