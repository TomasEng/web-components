import { Component, h } from '@stencil/core';

@Component({
  tag: 't-row',
  styleUrl: 't-row.css',
  shadow: true
})
export class TRow {

  render() {
    return <div><slot/></div>;
  }
}
