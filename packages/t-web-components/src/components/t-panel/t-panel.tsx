import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 't-panel',
  styleUrl: 't-panel.css',
  shadow: true,
})
export class TPanel {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
