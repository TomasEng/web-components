import { Component, h } from '@stencil/core';

@Component({
  tag: 't-layout',
  styleUrl: 't-layout.css',
  shadow: true,
})
export class TLayout {

  render() {
    return <div class='wrapper'><div class='layout'><slot/></div></div>;
  }
}
