import { Component, Element, Prop, h, EventEmitter, Event, Method } from '@stencil/core';
import { TButtonCustomEvent, TLinkCustomEvent } from '../../components';

@Component({
  tag: 't-link-or-button',
  styleUrl: 't-link-or-button.css',
})
export class TLinkOrButton {

  @Element() element: HTMLTLinkOrButtonElement;

  @Prop() href: string | null = null;
  @Prop() target: string | null = null;
  @Prop() focusable: boolean = true;

  @Event() elementClick: EventEmitter<MouseEvent>;

  @Method() async focusOnElement() {
    await whenElementsReady();
    if (this.isLink) {
      const link = this.element.querySelector('t-link');
      await link.focusOnAnchor();
    } else {
      const button = this.element.querySelector('t-button');
      await button.focusOnButton();
    }
  }

  private isLink: boolean = !!this.href;

  render() {
    if (this.href) {
      return (
        <t-link
          focusable={this.focusable}
          href={this.href}
          onLinkClick={(e: TLinkCustomEvent<MouseEvent>) => this.elementClick.emit(e.detail)}
          target={this.target}
        >
          <slot></slot>
        </t-link>
      );
    } else {
      return (
        <t-button
          focusable={this.focusable}
          onButtonClick={(e: TButtonCustomEvent<MouseEvent>) => this.elementClick.emit(e.detail)}
          variant="link"
        >
          <slot></slot>
        </t-button>
      );
    }
  }
}

async function whenElementsReady() {
  await Promise.all([
    customElements.whenDefined('t-link'),
    customElements.whenDefined('t-button'),
  ]);
}
