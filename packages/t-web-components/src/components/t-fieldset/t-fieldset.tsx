import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 't-fieldset',
  styleUrl: 't-fieldset.css',
  shadow: true
})
export class TFieldset {

  @Prop() legend: string;

  render() {
    return <fieldset><legend>{this.legend}</legend><slot/></fieldset>;
  }
}
