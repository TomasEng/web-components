import { Component, h, Host, Element, Prop } from '@stencil/core';
import { ComponentHue } from '../../types/ComponentHue';
import { setBaseColour } from '../../utils/componentUtils';

@Component({
  tag: 't-panel',
  styleUrl: 't-panel.css',
  shadow: true,
})
export class TPanel {

  @Element() element: HTMLElement;

  @Prop() hueoffset: ComponentHue = 0;

  get heading(): HTMLDivElement {
    return this.element.shadowRoot.querySelector('.heading');
  }

  connectedCallback() {
    setBaseColour(this.element, this.hueoffset);
  }

  componentDidRender() {
    const hasHeading = !!this.element.querySelector('[slot="heading"]');
    const hasIcon = !!this.element.querySelector('[slot="icon"]');
    const hasHeadingOrIcon = hasHeading || hasIcon;
    if (!hasHeadingOrIcon) {
      this.heading.style.display = 'none';
    } else {
      this.heading.style.display = 'flex';
    }
  }

  render() {
    return (
      <Host>
        <div class='heading'>
          <slot name="icon"/>
          <slot name="heading"/>
        </div>
        <div class='content'><slot></slot></div>
      </Host>
    );
  }
}
