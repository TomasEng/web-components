import { Component, h, JSX, Element, Prop } from '@stencil/core';
import { DEFAULT_CHROMA, DEFAULT_HUE } from '../constants';

@Component({
  tag: 'preview-component',
})
export class PreviewComponent {

  @Element() element: HTMLElement;

  @Prop() html: string;
  @Prop() script?: string;
  @Prop() hue: number = DEFAULT_HUE;
  @Prop() chroma: number = DEFAULT_CHROMA;

  componentWillUpdate() {
    const contextElement = this.element.querySelector('t-context');
    contextElement.baseHue = this.hue;
    contextElement.baseChroma = this.chroma;
  }

  connectedCallback() {

    this.element.innerHTML = `
      <t-context baseHue="${this.hue}" baseChroma="${this.chroma}" id="context">
        ${this.html}
      </t-context>
    `;

    if (this.script) {
      const script = document.createElement('script');
      document.body.appendChild(script);
      script.innerHTML = this.script;
    }
  }
}
