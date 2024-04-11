import { Component, h } from '@stencil/core';

@Component({
  tag: 't-column',
  styleUrl: 't-column.css',
  shadow: true
})
export class TColumn {

  render() {
    return <div><slot/></div>;
  }
}
