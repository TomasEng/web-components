import { Component, h, Prop, Element } from '@stencil/core';
import { Chromator, Hsl } from 'chromator';
import { asPercents } from '../../utils/utils';

@Component({
  tag: 't-context',
  styleUrl: 't-context.css',
})
export class TContext {

  @Prop() darkMode: boolean = false;
  @Prop() baseHue: number = 160;
  @Prop() baseSaturation: number = 1;

  @Element() element: HTMLElement;

  baseColour(): Chromator {
    const hue = this.baseHue;
    const saturation = this.baseSaturation;
    const hsl: Hsl = { hue, saturation, lightness: 0.5 };
    const luminance = this.darkMode ? 0.1 : 0.3; // 0.1 gives a contrast of 7 against white, while 0.3 gives a contrast of 7 against black
    return new Chromator(hsl).setRelativeLuminance(luminance);
  }

  connectedCallback() {
    const baseColour = this.baseColour();
    const { hue, saturation } = baseColour.getHsl();
    this.element.style.setProperty('--t-base-colour-hue', hue.toFixed() + 'deg');
    this.element.style.setProperty('--t-base-colour-saturation', asPercents(saturation));
  }

  render() {
    const modeClass = this.darkMode ? 'dark' : 'light';
    const baseColour = this.baseColour();
    const { lightness } = baseColour.getHsl();
    this.element.style.setProperty('--t-base-colour', this.baseColour().getHexCode());
    this.element.style.setProperty('--t-base-colour-lightness', asPercents(lightness));

    return <div class={modeClass}><slot/></div>;
  }
}
