import { Component, Element, Prop } from '@stencil/core';
import { DEFAULT_CHROMA, DEFAULT_HUE } from '../constants';
import state from '../store';

@Component({
  tag: 'preview-component',
})
export class PreviewComponent {

  @Element() element: HTMLElement;

  @Prop() html: string;
  @Prop() script?: string;
  @Prop() hue: number = DEFAULT_HUE;
  @Prop() chroma: number = DEFAULT_CHROMA;

  componentDidRender() {
    const wrapperElement: HTMLDivElement = this.element.querySelector('#wrapper');
    wrapperElement.style.padding = '1rem';
    wrapperElement.style.background = state.mode === 'dark' ? '#000' : '#fff';
  }

  render() {
    state.mode;
  }

  connectedCallback() {

    this.element.innerHTML = `
      <t-context baseHue="${this.hue}" baseChroma="${this.chroma}" id="context">
        <div id="wrapper">
          ${this.html}
        </div>
      </t-context>
    `;

    if (this.script) {
      const script = document.createElement('script');
      document.body.appendChild(script);
      script.innerHTML = this.script;
    }
  }
}
