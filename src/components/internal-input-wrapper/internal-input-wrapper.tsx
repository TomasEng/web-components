import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'internal-input-wrapper',
  styleUrl: 'internal-input-wrapper.css',
  shadow: true,
})
export class InternalStyleProvider {

  @Prop() hueOffsetInTurns: number = 0;

  @Element() element: HTMLElement;

  render() {
    return <div class="wrapper">
      <slot name='label'/>
      <slot name='input'/>
    </div>;
  }
}
