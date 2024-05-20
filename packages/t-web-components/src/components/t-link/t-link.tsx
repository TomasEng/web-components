import { Component, h, Prop } from '@stencil/core';
import { ExternalLinkIcon } from '../../icons/ExternalLinkIcon';

@Component({
  tag: 't-link',
  styleUrl: 't-link.css',
  shadow: true,
})
export class TLink {

  @Prop() href: string;
  @Prop() target?: string;
  @Prop() external?: boolean;

  render() {
    const target = this.target || (this.external ? '_blank' : undefined);
    return <internal-style-provider>
      <a class='link' href={this.href} target={target}>
        <slot/>
        {this.external && <ExternalLinkIcon/>}
      </a>
    </internal-style-provider>;
  }
}
