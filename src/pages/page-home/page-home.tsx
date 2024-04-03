import { Component, h, JSX, State, Fragment } from '@stencil/core';
import {
  THuePickerCustomEvent,
  TIntegerPickerCustomEvent,
  TSaturationPickerCustomEvent,
  TSwitchCustomEvent,
} from '../../components';
import { integerArray } from '../../utils/numberUtils';

@Component({
  tag: 'page-home',
})
export class PageHome {

  @State() darkMode = false;
  @State() baseHue = 160;
  @State() baseSaturation = 1;
  @State() numberOfHues = 3;

  handleSetDarkMode = ({detail}: TSwitchCustomEvent<boolean>) => {
    this.darkMode = detail;
  }

  handleHueChange = ({detail}: THuePickerCustomEvent<number>) => {
    this.baseHue = detail;
  }

  handleSaturationChange = ({detail}: TSaturationPickerCustomEvent<number>) => {
    this.baseSaturation = detail;
  }

  handleNumberOfHuesChange = ({detail}: TIntegerPickerCustomEvent<number>) => {
    this.numberOfHues = detail;
  }

  render(): JSX.Element {
    return (
      <t-context darkMode={this.darkMode} baseHue={this.baseHue} baseSaturation={this.baseSaturation}>
        <t-layout>
          <t-heading level={1}>Tomas sitt designsystem</t-heading>
          <t-heading level={2}>Innstillinger</t-heading>
          <t-row>
            <t-switch onSwitch={this.handleSetDarkMode} checked={this.darkMode}>Mørk modus</t-switch>
            <t-hue-picker label="Hovedfargetone" onHueChange={this.handleHueChange} value={this.baseHue}/>
            <t-saturation-picker label="Metning" onSaturationChange={this.handleSaturationChange} value={this.baseSaturation}/>
            <t-integer-picker label="Antall fargetoner" onIntegerChange={this.handleNumberOfHuesChange} value={this.numberOfHues} min={1} max={10}/>
          </t-row>
          <t-heading level={2}>Komponenter</t-heading>
          {this.renderPreview(
            hue => <t-button hue={hue}>Klikk meg</t-button>,
            'Knapp'
          )}
          {this.renderPreview(
            hue => <t-column>
              <t-switch hue={hue} checked={true}>På</t-switch>
              <t-switch hue={hue} checked={false}>Av</t-switch>
            </t-column>,
            'Bryter',
          )}
          {this.renderPreview(
            hue => <t-integer-picker hue={hue} label="Antall" value={5} min={0} max={10}/>,
            'Tallvelger',
          )}
        </t-layout>
      </t-context>
    );
  }

  private hueArray(): number[] {
    return integerArray(this.numberOfHues);
  }

  private renderPreview(
    component: (hue: number) => JSX.Element,
    title: string,
  ): JSX.Element {
    return (
      <>
        <t-heading level={3}>{title}</t-heading>
        <t-row>
          {this.hueArray().map(hue => component(hue/this.numberOfHues))}
        </t-row>
      </>
    )
  }
}
