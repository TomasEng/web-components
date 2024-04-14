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
    return <internal-style-provider>
      <a class='link' href={this.href} target={this.target}>
        <slot/>
        {this.external && <ExternalLinkIcon/>}
      </a>
    </internal-style-provider>;
  }
}
