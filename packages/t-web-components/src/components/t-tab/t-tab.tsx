import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 't-tab',
  styleUrl: 't-tab.css',
})
export class TTab {

  @Prop() heading: string;
  @Prop() name: string;

  render() {
    return <Host><slot/></Host>;
  }
}
