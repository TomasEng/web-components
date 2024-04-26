import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { ComponentHue } from '../../types/ComponentHue';

@Component({
  tag: 't-integer-picker',
  styleUrls: ['t-integer-picker.css', '../../style/text-input.css'],
  shadow: true,
})
export class TIntegerPicker {

  @Prop() label: string;
  @Prop() value: number;
  @Prop() min: number;
  @Prop() max: number;
  @Prop() hue: ComponentHue;

  @Event() integerChange: EventEmitter<number>;

  private handleChange = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;
    this.integerChange.emit(target.valueAsNumber);
  };

  render() {
    return <internal-style-provider hueOffsetInTurns={this.hue}>
      <internal-input-wrapper>
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
      </internal-input-wrapper>
    </internal-style-provider>;
  }
}
