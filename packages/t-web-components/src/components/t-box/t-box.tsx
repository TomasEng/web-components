import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 't-box',
  styleUrl: 't-box.css',
  shadow: true,
})
export class TBox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
