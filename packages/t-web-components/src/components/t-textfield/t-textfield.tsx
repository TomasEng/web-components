import { Component, h, Prop } from '@stencil/core';
import { ComponentHue } from '../../types/ComponentHue';

@Component({
  tag: 't-textfield',
  styleUrls: ['t-textfield.css', '../../style/text-input.css'],
  shadow: true,
})
export class TTextfield {

  @Prop() hue: ComponentHue = 0;
  @Prop() label: string;
  @Prop() value: string;

  render() {
    return <internal-style-provider hueOffsetInTurns={this.hue}>
      <internal-input-wrapper>
        <label htmlFor="input" slot='label'>{this.label}</label>
        <input
          slot='input'
          id="input"
          class="text-input"
          type="text"
          value={this.value}
        />
      </internal-input-wrapper>
    </internal-style-provider>;
  }
}
