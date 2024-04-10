import { Component, h, Prop, Element } from '@stencil/core';
import { LabelPlacement } from '../../types/LabelPlacement';

@Component({
  tag: 'internal-input-wrapper',
  styleUrl: 'internal-input-wrapper.css',
  shadow: true,
})
export class InternalStyleProvider {

  @Prop() labelPlacement: LabelPlacement = 'top';

  @Element() element: HTMLElement;

  render() {
    return <div class={'wrapper ' + this.labelPlacement}>
      <slot name='label'/>
      <slot name='input'/>
    </div>;
  }
}
