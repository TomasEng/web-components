import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 't-layout-nav-item',
  styleUrl: 't-layout-nav-item.css',
  shadow: true,
})
export class TLayoutNavItem {

  @Prop() open: boolean = false;

  render() {
    return (
      <li class={this.open ? 'open' : ''}>
        <slot></slot>
      </li>
    );
  }
}
