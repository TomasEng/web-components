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
  styleUrl: 'component-colour-settings.css',
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

  handleVisitdedLinkHueChange = ({ detail: hueOffsetVisitedLink }: THuePickerCustomEvent<number>) => {
    const newSettings: ColourSettings = { ...this.settings, hueOffsetVisitedLink };
    this.changeSettings.emit(newSettings);
  };

  handleCodeHueChange = ({ detail: hueOffsetCode }: THuePickerCustomEvent<number>) => {
    const newSettings: ColourSettings = { ...this.settings, hueOffsetCode };
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
            max={12}
          />
          <t-slider
            class="contrast-slider"
            label="Kontrast"
            max={2}
            min={0}
            onSliderChange={this.handleContrastChange}
            step={0.01}
            value={this.settings.contrast}
          />
          <t-hue-picker
            label="Fargetone for besøkte lenker"
            onHueChange={this.handleVisitdedLinkHueChange}
            value={this.settings.hueOffsetVisitedLink}
            withOffset={true}
          />
          <t-hue-picker
            label="Fargetone for kode"
            onHueChange={this.handleCodeHueChange}
            value={this.settings.hueOffsetCode}
            withOffset={true}
          />
        </t-column>
      </t-fieldset>
    );
  }
}
