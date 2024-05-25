import { Component, h, Method, Prop, Element } from '@stencil/core';
import { ExternalLinkIcon } from '../../icons/ExternalLinkIcon';

@Component({
  tag: 't-link',
  styleUrl: 't-link.css',
  shadow: true,
})
export class TLink {

  @Element() element: HTMLTLinkElement;

  @Prop() href: string;
  @Prop() target?: string;
  @Prop() external?: boolean;
  @Prop() focusable: boolean = true;

  @Method() async getAnchorElement(): Promise<HTMLAnchorElement> {
    await customElements.whenDefined('t-link');
    return this.element.shadowRoot.querySelector('a');
  }

  render() {
    const target = this.target || (this.external ? '_blank' : undefined);
    return <internal-style-provider>
      <a
        class='link'
        href={this.href}
        part='link'
        tabIndex={this.focusable ? 0 : -1}
        target={target}
      >
        <slot/>
        {this.external && <ExternalLinkIcon/>}
      </a>
    </internal-style-provider>;
  }
}
