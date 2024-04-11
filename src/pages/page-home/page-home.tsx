import { Component, h, JSX, State, Fragment } from '@stencil/core';
import {
  THuePickerCustomEvent,
  TIntegerPickerCustomEvent,
  TSaturationPickerCustomEvent,
  TSelectOption,
} from '../../components';
import { integerArray } from '../../utils/numberUtils';

@Component({
  tag: 'page-home',
})
export class PageHome {

  @State() baseHue = 160;
  @State() baseChroma = 0.3;
  @State() numberOfHues = 3;

  handleHueChange = ({ detail }: THuePickerCustomEvent<number>) => {
    this.baseHue = detail;
  };

  handleSaturationChange = ({ detail }: TSaturationPickerCustomEvent<number>) => {
    this.baseChroma = detail;
  };

  handleNumberOfHuesChange = ({ detail }: TIntegerPickerCustomEvent<number>) => {
    this.numberOfHues = detail;
  };

  render(): JSX.Element {
    return (
      <t-context baseHue={this.baseHue} baseChroma={this.baseChroma}>
        <t-layout>
          <t-layout-header slot='header' siteTitle="Tomas sitt designsystem" />
          <t-layout-main slot='main'>
            <t-heading level={1}>Komponentoversikt</t-heading>
            <t-heading level={2}>Innstillinger</t-heading>
            <t-row>
              <t-hue-picker label="Hovedfargetone" onHueChange={this.handleHueChange} value={this.baseHue} />
              <t-saturation-picker
                label="Metning"
                onSaturationChange={this.handleSaturationChange}
                value={this.baseChroma}
              />
              <t-integer-picker
                label="Antall fargetoner"
                onIntegerChange={this.handleNumberOfHuesChange}
                value={this.numberOfHues}
                min={1}
                max={10}
              />
            </t-row>
            <t-heading level={2}>Komponenter</t-heading>
            {this.renderPreview(
              hue => <t-button hue={hue}>Klikk meg</t-button>,
              'Knapp',
            )}
            {this.renderPreview(
              hue => <t-column>
                <t-switch hue={hue} checked={true}>På</t-switch>
                <t-switch hue={hue} checked={false}>Av</t-switch>
              </t-column>,
              'Bryter',
            )}
            {this.renderPreview(
              hue => <t-integer-picker hue={hue} label="Antall" value={5} min={0} max={10} />,
              'Tallvelger',
            )}
            {this.renderPreview(
              hue => <t-textfield hue={hue} label="Test" />,
              'Tekstfelt',
            )}
            {this.renderPreview(
              hue => {
                const options: TSelectOption[] = [
                  { value: '1', label: 'Alternativ 1' },
                  { value: '2', label: 'Alternativ 2' },
                  { value: '3', label: 'Alternativ 3' },
                ];
                return <t-select hue={hue} label="Alternativer" options={options} value="1" />;
              },
              'Nedtrekksliste',
            )}
            {this.renderPreview(
              hue => (
                <t-dropdown-menu
                  hue={hue}
                  label="Velg"
                  items={[
                    { label: 'Alternativ 1', action: () => alert('Alternativ 1') },
                    { label: 'Alternativ 2', action: () => alert('Alternativ 2') },
                    { label: 'Alternativ 3', action: () => alert('Alternativ 3') },
                  ]}
                />
              ),
              'Nedtrekksmeny'
            )}
          </t-layout-main>
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
          {this.hueArray().map(hue => component(hue / this.numberOfHues))}
        </t-row>
      </>
    );
  }
}
