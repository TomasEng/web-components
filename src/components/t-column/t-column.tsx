import { Component, h, Prop } from '@stencil/core';

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
