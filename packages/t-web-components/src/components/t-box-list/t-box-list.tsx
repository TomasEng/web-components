import { Component, h } from '@stencil/core';

@Component({
  tag: 't-box-list',
  styleUrl: 't-box-list.css',
  scoped: true,
})
export class TBoxList {

  render() {
    return (
      <ul>
        <slot></slot>
      </ul>
    );
  }
}
