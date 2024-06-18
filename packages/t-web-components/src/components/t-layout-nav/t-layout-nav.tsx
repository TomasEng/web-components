import { Component, h } from '@stencil/core';

@Component({
  tag: 't-layout-nav',
  styleUrl: 't-layout-nav.css',
  shadow: true,
})
export class TLayoutNav {

  render() {
    return (
      <nav>
        <ul>
          <slot></slot>
        </ul>
      </nav>
    );
  }
}
