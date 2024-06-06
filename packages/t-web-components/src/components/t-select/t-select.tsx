import { Component, h, Prop, Element } from '@stencil/core';
import { ComponentHue } from '../../types/ComponentHue';
import { TSelectOption } from './TSelectOption';
import { LabelPlacement } from '../../types/LabelPlacement';
import { setBaseColour } from '../../utils/componentUtils';

@Component({
  tag: 't-select',
  styleUrls: ['../../style/text-input.css'],
  shadow: true,
})
export class TSelect {

  @Element() element: HTMLTSelectElement;

  @Prop() hueoffset: ComponentHue = 0;
  @Prop() label: string;
  @Prop() options: TSelectOption[];
  @Prop() value: string;
  @Prop() labelPlacement: LabelPlacement = 'top';

  connectedCallback() {
    setBaseColour(this.element, this.hueoffset);
  }

  render() {
    return <internal-input-wrapper labelPlacement={this.labelPlacement}>
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
    </internal-input-wrapper>;
  }
}
