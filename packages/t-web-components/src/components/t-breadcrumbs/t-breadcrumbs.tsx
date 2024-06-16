import { Component, h, Host, Prop } from '@stencil/core';
import { TBreadcrumbsText } from './t-breadcrumbs.text';
import defaultText from './t-breadcrumbs.text';

@Component({
  tag: 't-breadcrumbs',
  styleUrl: 't-breadcrumbs.css',
  shadow: true,
})
export class TBreadcrumbs {

  @Prop() text: TBreadcrumbsText = defaultText;

  render() {
    return (
      <Host>
        <div id='prefix'>{this.text.prefix}</div>
        <ol id='list'>
          <slot></slot>
        </ol>
      </Host>
    );
  }
}
