import { Component, h, JSX, Element, Prop, Host } from '@stencil/core';
import { ComponentTestCode } from '../../test-utils/ComponentTestCode';

@Component({
  tag: 'component-preview',
})
export class ComponentPreview {

  @Element() element: HTMLElement;

  @Prop() componentTestCode: ComponentTestCode;

  render() {
    return <Host innerHtml={this.componentTestCode.generateHtml()}/>;
  }

  componentDidRender() {
    const topLevelElement = this.element.querySelector('*');
    if (this.componentTestCode.config.props?.hue) {
      topLevelElement.setAttribute('hue', this.componentTestCode.config.props.hue);
    }
  }

  connectedCallback() {
    const html = this.componentTestCode.generateHtml();
    const script = this.componentTestCode.generateMinifiedScript();

    this.element.innerHTML = html;

    if (script) {
      const scriptElement = document.createElement('script');
      document.body.appendChild(scriptElement);
      scriptElement.innerHTML = script;
    }
  }
}
