import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 't-integer-picker',
  styleUrl: 't-integer-picker.css',
  shadow: true
})
export class TIntegerPicker {

  @Prop() label: string;
  @Prop() value: number;
  @Prop() min: number;
  @Prop() max: number;

  @Event() event: EventEmitter<number>;

  private handleChange = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;
    this.event.emit(target.valueAsNumber);
  }

  render() {
    return <div class='wrapper'>
      <label>{this.label}</label>
      <input
        type="number"
        min={this.min}
        max={this.max}
        value={this.value}
        onChange={this.handleChange}
      />
    </div>;
  }
}
