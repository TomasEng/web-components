import { Component, h, Prop } from '@stencil/core';
import { Chromator, Hsl } from 'chromator';
import { asPercents } from '../../utils/utils';

const contextId = 't-context';

@Component({
  tag: 't-context',
  styleUrl: 't-context.css',
})
export class TContext {

  @Prop() darkMode: boolean = false;
  @Prop() baseHue: number = 160;
  @Prop() baseSaturation: number = 1;

  get rootElement() {
    return document.getElementById(contextId);
  }

  baseColour(): Chromator {
    const hue = this.baseHue;
    const saturation = this.baseSaturation;
    const hsl: Hsl = { hue, saturation, lightness: 0.5 };
    return new Chromator(hsl).setRelativeLuminance(0.18); // Use 0.18 as the default luminance since this satisfies WCAG contrast criteria against both black and white
  }

  connectedCallback() {
    const baseColour = this.baseColour();
    this.rootElement.style.setProperty('--t-base-colour', this.baseColour().getHexCode());
    const { hue, saturation, lightness } = baseColour.getHsl();
    this.rootElement.style.setProperty('--t-base-colour-hue', hue.toFixed() + 'deg');
    this.rootElement.style.setProperty('--t-base-colour-saturation', asPercents(saturation));
    this.rootElement.style.setProperty('--t-base-colour-lightness', asPercents(lightness));
  }

  render() {
    const modeClass = this.darkMode ? 'dark' : 'light';

    return <div id={contextId} class={modeClass}><slot/></div>;
  }
}
