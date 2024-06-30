import { Component, h } from '@stencil/core';

@Component({
  tag: 't-box-list',
  styleUrls: [
    't-box-list.css',
    '../t-box/t-box.context.css'
  ],
  shadow: true,
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
