import { Component, h, Prop, VNode } from '@stencil/core';
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
  @Prop() icon?: VNode = undefined;

  render() {
    return <internal-style-provider hueOffsetInTurns={this.hue}>
      <button class='t-button' type='button' {...this.buttonAttributes}>
        {this.icon && <span class='icon' aria-hidden={true}>{this.icon}</span>}
        <slot/>
      </button>
    </internal-style-provider>;
  }
}
