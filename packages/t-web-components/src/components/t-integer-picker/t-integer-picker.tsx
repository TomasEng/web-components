import { Component, h, Prop, Event, EventEmitter, Element } from '@stencil/core';
import { ComponentHue } from '../../types/ComponentHue';
import { setBaseColour } from '../../utils/componentUtils';

@Component({
  tag: 't-integer-picker',
  styleUrls: ['t-integer-picker.css', '../../style/text-input.css'],
  shadow: true,
})
export class TIntegerPicker {

  @Element() element: HTMLTIntegerPickerElement;

  @Prop() label: string;
  @Prop() value: number;
  @Prop() min: number;
  @Prop() max: number;
  @Prop() hue: ComponentHue = 0;

  @Event() integerChange: EventEmitter<number>;

  connectedCallback() {
    setBaseColour(this.element, this.hue * 360);
  }

  private handleChange = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;
    this.integerChange.emit(target.valueAsNumber);
  };

  render() {
    return <internal-input-wrapper>
      <label htmlFor="input" slot="label">{this.label}</label>
      <input
        class="text-input"
        id="input"
        max={this.max}
        min={this.min}
        onChange={this.handleChange}
        slot="input"
        type="number"
        value={this.value}
      />
    </internal-input-wrapper>;
  }
}
