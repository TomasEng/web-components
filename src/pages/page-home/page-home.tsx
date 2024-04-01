import { Component, h, State } from '@stencil/core';
import { THuePickerCustomEvent, TSaturationPickerCustomEvent, TSwitchCustomEvent } from '../../components';

@Component({
  tag: 'page-home',
})
export class PageHome {

  @State() darkMode = false;
  @State() baseHue = 160;
  @State() baseSaturation = 1;

  handleSetDarkMode = ({detail}: TSwitchCustomEvent<boolean>) => {
    this.darkMode = detail;
  }

  handleHueChange = ({detail}: THuePickerCustomEvent<number>) => {
    this.baseHue = detail;
  }

  handleSaturationChange = ({detail}: TSaturationPickerCustomEvent<number>) => {
    this.baseSaturation = detail;
  }

  render() {
    return (
      <t-context darkMode={this.darkMode} baseHue={this.baseHue} baseSaturation={this.baseSaturation}>
        <t-layout>
          <t-column>
            <t-switch onSwitch={this.handleSetDarkMode} checked={this.darkMode}>Mørk modus</t-switch>
            <t-hue-picker label="Hovedfargetone" onHueChange={this.handleHueChange} />
            <t-saturation-picker label="Metning" onSaturationChange={this.handleSaturationChange}/>
          </t-column>
          <t-heading level={1}>Tomas sitt designsystem</t-heading>
          <t-heading level={2}>Komponenter</t-heading>
          <t-heading level={3}>Knapp</t-heading>
          <t-button>Klikk meg</t-button>
          <t-heading level={3}>Bryter</t-heading>
          <t-row>
            <t-switch checked={true}>På</t-switch>
            <t-switch checked={false}>Av</t-switch>
          </t-row>
        </t-layout>
      </t-context>
    );
  }
}
