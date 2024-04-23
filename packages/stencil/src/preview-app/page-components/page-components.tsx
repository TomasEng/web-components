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
      <t-layout-main stickyLeftbar={true}>
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
        <t-heading level={2}>Artikkelliste</t-heading>
        <t-article-list hue={0} items={[
          { href: '#', title: 'Lorem ipsum', intro: 'Lorem ipsum dolor sit amet', date: new Date() },
          { href: '#', title: 'Lorem ipsum dolor sit amet', intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra mauris sit amet varius sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet quam in mauris mattis sollicitudin. Maecenas interdum, tortor non congue varius, erat nibh ornare ligula, non ultricies risus mi quis ipsum. Integer efficitur quis nisl sit amet fringilla. Duis consequat congue mi, vel vehicula mauris facilisis eu. Aliquam accumsan bibendum ante quis fermentum. Aenean ac tincidunt leo. Proin id ipsum et libero posuere volutpat semper ut dolor.', date: new Date() },
          { href: '#', title: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse faucibus erat ut velit aliquet mattis. Nunc vitae lectus ac urna fermentum consectetur vitae quis enim. Vivamus scelerisque, neque id fermentum ultrices, diam est fermentum quam, eu ornare diam sem vel nisl. Nullam porta tortor nisi, ut aliquam est cursus id. Aliquam turpis nisl, feugiat a massa vitae, efficitur viverra sapien. Cras sed suscipit tellus. Nunc pretium massa vitae ante euismod iaculis. Praesent pellentesque at libero eu lacinia.', intro: 'In hac habitasse platea dictumst. Maecenas eget justo ut velit imperdiet viverra eget vitae lectus. Curabitur at fringilla augue, ac tristique libero. Vivamus consectetur nisl a facilisis auctor. Integer sed purus nisi. Fusce in ligula convallis, auctor sapien non, mattis turpis. Morbi vitae elementum lectus, egestas suscipit nisl. Morbi imperdiet eleifend magna ac varius.', date: new Date() },
        ]} />
        <t-heading level={2}>Spinner</t-heading>
        <t-spinner />
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
