import { Component, h, JSX, Fragment, EventEmitter, Event, Prop } from '@stencil/core';
import {
  ColourSettings,
  ComponentColourSettingsCustomEvent,
  TSelectOption,
} from '../../components';
import { integerArray } from '../../utils/numberUtils';

@Component({
  tag: 'page-components',
})
export class PageComponents {

  @Prop() colourSettings: ColourSettings;

  @Event() colourSettingsChange: EventEmitter<ColourSettings>;

  handleColourSettingsChange = ({ detail }: ComponentColourSettingsCustomEvent<ColourSettings>) => {
    this.colourSettingsChange.emit(detail);
  }

  render(): JSX.Element {
    return (
      <t-layout-main>
        <component-colour-settings
          slot="leftbar"
          settings={this.colourSettings}
          onChangeSettings={this.handleColourSettingsChange}
        />
        <t-heading level={1}>Komponentoversikt</t-heading>
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
          'Nedtrekksmeny',
        )}
        <t-heading level={2}>Lenke</t-heading>
        <t-link href="#">Intern lenke</t-link>
        &nbsp;
        <t-link href="#" external={true}>Ekstern lenke</t-link>
      </t-layout-main>
    );
  }

  private hueArray(): number[] {
    return integerArray(this.colourSettings.numberOfHues);
  }

  private renderPreview(
    component: (hue: number) => JSX.Element,
    title: string,
  ): JSX.Element {
    return (
      <>
        <t-heading level={2}>{title}</t-heading>
        <t-row>
          {this.hueArray().map(hue => component(hue / this.colourSettings.numberOfHues))}
        </t-row>
      </>
    );
  }
}
