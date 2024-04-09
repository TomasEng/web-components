import { Component, h, Prop } from '@stencil/core';
import { ComponentHue } from '../../types/ComponentHue';
import { TSelectOption } from './TSelectOption';

@Component({
  tag: 't-select',
  styleUrls: ['../../style/text-input.css'],
  shadow: true,
})
export class TSelect {

  @Prop() hue: ComponentHue = 0;
  @Prop() label: string;
  @Prop() options: TSelectOption[];
  @Prop() value: string;

  render() {
    return <internal-style-provider hueOffsetInTurns={this.hue}>
      <internal-input-wrapper>
        <label htmlFor="input" slot="label">{this.label}</label>
        <select
          slot="input"
          id="input"
          class="text-input"
        >
          {this.options.map(option => (
            <option
              value={option.value}
              selected={option.value === this.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </internal-input-wrapper>
    </internal-style-provider>;
  }
}
