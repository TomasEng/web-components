import { Component, EventEmitter, h, Prop, Event } from '@stencil/core';
import { ColourSettings } from '../../types/ColourSettings';
import {
  THuePickerCustomEvent,
  TIntegerPickerCustomEvent,
  TSaturationPickerCustomEvent,
  TSliderCustomEvent,
} from '../../components';

@Component({
  tag: 'component-colour-settings',
})
export class ComponentColourSettings {

  @Prop() settings: ColourSettings;

  @Event() changeSettings: EventEmitter<ColourSettings>;

  handleHueChange = ({ detail: hue }: THuePickerCustomEvent<number>) => {
    const newSettings: ColourSettings = { ...this.settings, hue };
    this.changeSettings.emit(newSettings);
  };

  handleSaturationChange = ({ detail: chroma }: TSaturationPickerCustomEvent<number>) => {
    const newSettings: ColourSettings = { ...this.settings, chroma };
    this.changeSettings.emit(newSettings);
  };

  handleNumberOfHuesChange = ({ detail: numberOfHues }: TIntegerPickerCustomEvent<number>) => {
    const newSettings: ColourSettings = { ...this.settings, numberOfHues };
    this.changeSettings.emit(newSettings);
  };

  handleContrastChange = ({ detail: contrast }: TSliderCustomEvent<number>) => {
    const newSettings: ColourSettings = { ...this.settings, contrast };
    this.changeSettings.emit(newSettings);
  };

  render() {
    return (
      <t-fieldset legend='Innstillinger'>
        <t-column>
          <t-hue-picker label="Hovedfargetone" onHueChange={this.handleHueChange} value={this.settings.hue} />
          <t-saturation-picker
            label="Metning"
            onSaturationChange={this.handleSaturationChange}
            value={this.settings.chroma}
          />
          <t-integer-picker
            label="Antall fargetoner"
            onIntegerChange={this.handleNumberOfHuesChange}
            value={this.settings.numberOfHues}
            min={1}
            max={10}
          />
          <t-slider
            label="Kontrast"
            max={2}
            min={0}
            onSliderChange={this.handleContrastChange}
            step={0.01}
            value={this.settings.contrast}
          />
        </t-column>
      </t-fieldset>
    );
  }
}
