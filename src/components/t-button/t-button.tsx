import { Component, h } from '@stencil/core';

@Component({
  tag: 't-button',
  styleUrl: 't-button.css',
  shadow: true,
})
export class TButton {

  render() {
    return <button><slot/></button>;
  }
}
