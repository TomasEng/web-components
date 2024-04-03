import { Component, h, Prop } from '@stencil/core';
import { ComponentHue } from '../../types/ComponentHue';

@Component({
  tag: 't-button',
  styleUrl: 't-button.css',
  shadow: true,
})
export class TButton {

  @Prop() hue: ComponentHue = 0;

  render() {
    return <internal-style-provider hueOffsetInTurns={this.hue}>
      <button>
        <slot />
      </button>
    </internal-style-provider>;
  }
}
