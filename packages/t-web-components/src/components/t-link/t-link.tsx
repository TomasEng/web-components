import { Component, h, Event, Method, Prop, Element, EventEmitter } from '@stencil/core';
import { ExternalLinkIcon } from '../../icons/ExternalLinkIcon';
import { setBaseColour } from '../../utils/componentUtils';

@Component({
  tag: 't-link',
  styleUrl: 't-link.css',
  shadow: true,
})
export class TLink {

  @Element() element: HTMLTLinkElement;

  @Prop() hue: number = 0;
  @Prop() href: string;
  @Prop() target?: string;
  @Prop() external?: boolean;
  @Prop() focusable: boolean = true;

  @Event() linkClick: EventEmitter<MouseEvent>;

  @Method() async focusOnAnchor() {
    await customElements.whenDefined('t-link');
    this.anchor.focus();
  }

  connectedCallback() {
    setBaseColour(this.element, this.hue * 360);
  }

  get anchor(): HTMLAnchorElement {
    return this.element.shadowRoot.querySelector('a');
  }

  private handleClick = (e: MouseEvent) => {
    this.linkClick.emit(e);
  }

  render() {
    const target = this.target || (this.external ? '_blank' : undefined);
    return (
      <a
        class='link'
        href={this.href}
        onClick={(e) => this.handleClick(e)}
        part='link'
        tabIndex={this.focusable ? 0 : -1}
        target={target}
      >
        <slot/>
        {this.external && <ExternalLinkIcon/>}
      </a>
    );
  }
}
