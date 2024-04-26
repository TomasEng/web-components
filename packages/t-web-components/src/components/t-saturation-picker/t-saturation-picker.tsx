import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { TSliderCustomEvent } from '../../components';

@Component({
  tag: 't-saturation-picker',
  styleUrl: 't-saturation-picker.css',
  shadow: true,
})
export class TSaturationPicker {

  @Prop() label: string;
  @Prop() value: number;

  @Event() saturationChange: EventEmitter<number>;

  handleSliderChange = (event: TSliderCustomEvent<number>) =>
    this.saturationChange.emit(event.detail);

  render() {
    return <t-slider
      label={this.label}
      max={0.3}
      min={0}
      onSliderChange={this.handleSliderChange}
      step={0.01}
      value={this.value}
    />;
  }
}
