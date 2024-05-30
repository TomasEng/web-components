import { Component, EventEmitter, h, Prop, Event, Element } from '@stencil/core';
import { ComponentHue } from '../../types/ComponentHue';
import { setBaseColour } from '../../utils/componentUtils';

@Component({
  tag: 't-textfield',
  styleUrls: ['t-textfield.css', '../../style/text-input.css'],
  shadow: true,
})
export class TTextfield {

  @Element() element: HTMLTTextfieldElement;

  @Prop() hue: ComponentHue = 0;
  @Prop() label: string;
  @Prop() value: string;

  @Event() valueChange: EventEmitter<string>;

  connectedCallback() {
    setBaseColour(this.element, this.hue * 360);
  }

  render() {
    return <internal-input-wrapper>
      <label htmlFor="input" slot="label">{this.label}</label>
      <input
        slot="input"
        id="input"
        class="text-input"
        type="text"
        value={this.value}
        onInput={(e) => {
          this.valueChange.emit((e.target as HTMLInputElement).value);
        }}
      />
    </internal-input-wrapper>;
  }
}
