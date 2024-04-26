import { Component, h, JSX, Element, Prop } from '@stencil/core';
import { DEFAULT_CHROMA, DEFAULT_HUE } from '../constants';

@Component({
  tag: 'preview-component',
})
export class PreviewComponent {

  @Element() element: HTMLElement;

  @Prop() html: string;
  @Prop() script?: string;

  connectedCallback() {

    this.element.innerHTML = `
      <t-context baseHue="${DEFAULT_HUE}" baseChroma="${DEFAULT_CHROMA}" id="context">
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
