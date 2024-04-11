import { Component, h } from '@stencil/core';

@Component({
  tag: 't-layout-main',
  styleUrl: 't-layout-main.css',
})
export class TLayoutMain {

  render() {
    return <main class='main'><slot/></main>;
  }
}
