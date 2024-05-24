import { Component, h, Prop, VNode, Element } from '@stencil/core';
import { ComponentHue } from '../../types/ComponentHue';
import { ButtonAttributes } from '../../types/HTMLAttributes';
import { ButtonVariant } from './ButtonVariant';

@Component({
  tag: 't-button',
  styleUrl: 't-button.css',
  shadow: true,
})
export class TButton {

  @Prop() hue: ComponentHue = 0;
  @Prop() buttonAttributes: ButtonAttributes;
  @Prop() variant: ButtonVariant = 'default';

  @Element() element: HTMLElement;

  render() {
    return <internal-style-provider hueOffsetInTurns={this.hue}>
      <button class={`t-button ${this.variant}`} type='button' {...this.buttonAttributes}>
        <slot name='icon' aria-hidden={true}/>
        <slot/>
      </button>
    </internal-style-provider>;
  }
}
