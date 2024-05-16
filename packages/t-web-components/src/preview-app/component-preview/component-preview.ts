import { Component, h, JSX, Element, Prop } from '@stencil/core';
import { ComponentTestCode } from '../../test-utils/ComponentTestCode';

@Component({
  tag: 'component-preview',
})
export class ComponentPreview {

  @Element() element: HTMLElement;

  @Prop() componentTestCode: ComponentTestCode;

  connectedCallback() {
    const html = this.componentTestCode.generateMinifiedHtml();
    const script = this.componentTestCode.generateMinifiedScript();

    this.element.innerHTML = html;

    if (script) {
      const scriptElement = document.createElement('script');
      document.body.appendChild(scriptElement);
      scriptElement.innerHTML = script;
    }
  }
}
