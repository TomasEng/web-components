import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 't-slider',
  styleUrl: 't-slider.css',
  shadow: true,
})
export class TSlider {

  @Prop() max: number = 1;
  @Prop() min: number = 0;
  @Prop() step: number = 0.01;
  @Prop() label: string;
  @Prop() value: number;

  @Event() sliderChange: EventEmitter<number>;

  handleInput = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;
    this.sliderChange.emit(target.valueAsNumber);
  };

  render() {
    return <internal-input-wrapper>
      <label htmlFor={inputId} slot='label'>{this.label}</label>
      <input
        id={inputId}
        max={this.max}
        min={this.min}
        onInput={this.handleInput}
        slot='input'
        step={this.step}
        type="range"
        value={this.value}
      />
    </internal-input-wrapper>;
  }
}

const inputId = 'input';
