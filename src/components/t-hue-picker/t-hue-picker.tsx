import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { TSliderCustomEvent } from '../../components';

@Component({
  tag: 't-hue-picker',
  styleUrl: 't-hue-picker.css',
  shadow: true
})
export class THuePicker {

  @Prop() label: string;

  @Event() hueChange: EventEmitter<number>;

  handleSliderChange = (event: TSliderCustomEvent<number>) =>
    this.hueChange.emit(event.detail);

  render() {
    return <t-slider
      label={this.label}
      max={360}
      min={0}
      onSliderChange={this.handleSliderChange}
      step={1}
    />;
  }
}
