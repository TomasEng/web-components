import { Component, h } from '@stencil/core';

@Component({
  tag: 't-switch',
  styleUrl: 't-switch.css',
  shadow: true,
})
export class TSwitch {

  render() {
    return <label htmlFor="input" class="wrapper">
      <span class="switch">
        <input id="input" type="checkbox"></input>
        <span class="slider"/>
      </span>
      <span class="label"><slot/></span>
    </label>;
  }
}
