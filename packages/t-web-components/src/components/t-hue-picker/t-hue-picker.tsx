import { Component, h, Prop, Event, EventEmitter, Element } from '@stencil/core';
import { TSliderCustomEvent } from '../../components';
import state from '../../store';

@Component({
  tag: 't-hue-picker',
  styleUrl: 't-hue-picker.css',
  shadow: true
})
export class THuePicker {

  @Element() element: HTMLTHuePickerElement;

  @Prop() label: string;
  @Prop() value: number;
  @Prop() withOffset: boolean = false;

  @Event() hueChange: EventEmitter<number>;

  connectedCallback() {
    if (this.withOffset) {
      this.element.style.setProperty('--hue-offset', `var(--t-colour-base-app-hue)`);
    }
  }

  handleSliderChange = (event: TSliderCustomEvent<number>) =>
    this.hueChange.emit(event.detail);

  render() {
    return <t-slider
      label={this.label}
      max={360}
      min={0}
      onSliderChange={this.handleSliderChange}
      step={1}
      value={this.value}
    />;
  }
}
