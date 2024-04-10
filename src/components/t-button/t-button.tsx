import { Component, h, Prop } from '@stencil/core';
import { ComponentHue } from '../../types/ComponentHue';
import { ButtonAttributes } from '../../types/HTMLAttributes';

@Component({
  tag: 't-button',
  styleUrl: 't-button.css',
  shadow: true,
})
export class TButton {

  @Prop() hue: ComponentHue = 0;
  @Prop() buttonAttributes: ButtonAttributes;

  render() {
    return <internal-style-provider hueOffsetInTurns={this.hue}>
      <button class='t-button' type='button' {...this.buttonAttributes}>
        <slot />
      </button>
    </internal-style-provider>;
  }
}
