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
  };

  render(): JSX.Element {
    return (
      <t-layout-main stickyLeftbar={true}>
        <component-colour-settings
          slot="leftbar"
          settings={this.colourSettings}
          onChangeSettings={this.handleColourSettingsChange}
        />
        <div slot="content">
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
          <t-heading level={2}>Kildeliste</t-heading>
          <t-source-list sources={{
            'snl-sola': {
              authors: [{ forename: 'Oddbjørn', surname: 'Engvold' }],
              articleTitle: 'Sola',
              retrievedDate: { year: 2024, month: 5, day: 12 },
              url: 'https://snl.no/Sola',
              journal: 'Store norske leksikon',
            },
            'pmwtfpr': {
              authors: [
                { forename: 'Oliver H.', surname: 'Lowry' },
                { forename: 'Nina J.', surname: 'Rosebrough' },
                { forename: 'A. Lewis', surname: 'Farr' },
                { forename: 'Rose J.', surname: 'Randall' },
              ],
              articleTitle: 'Protein measurement with the Folin phenol reagent',
              journal: 'The Journal of Biological Chemistry',
              volume: 193,
              pageStart: 265,
              pageEnd: 275,
              date: { year: 1951 },
              issue: 1,
              doi: '10.1016/S0021-9258(19)52451-6',
            },
            'clean-code': {
              authors: [{ forename: 'Robert C.', surname: 'Martin' }],
              bookTitle: 'Clean Code - A Handbook of Agile Software Craftsmanship',
              publisher: 'Prentice Hall',
              date: { year: 2008, month: 8 },
              isbn: '9780136083252, 0136083250',
            },
          }} />
          <t-heading level={2}>Artikkel</t-heading>
          <t-article sources={{
            'cc': {
              authors: [{ forename: 'Robert C.', surname: 'Martin' }],
              title: 'Clean Code - A Handbook of Agile Software Craftsmanship',
              publisher: 'Prentice Hall',
              date: { year: 2008, month: 8 },
              isbn: '9780136083252, 0136083250',
            },
            'test': {
              authors: [{ forename: 'John', surname: 'Doe' }],
              title: 'Test',
              date: { year: 2024, month: 5, day: 12 },
              url: 'https://example.com',
              journal: 'Test Journal',
            },
          }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<t-source-ref sourceId='test'/> Mauris ac nisl pellentesque, tempus metus non, pretium felis. Suspendisse potenti. Nullam laoreet, neque eu pharetra lobortis, diam ligula posuere augue, in imperdiet quam felis nec sem.<t-source-ref sourceId='cc'/> Suspendisse suscipit, dui nec volutpat porttitor, sapien turpis pharetra elit, et cursus ante nisi eu nunc. Phasellus facilisis nunc arcu, eget laoreet purus vehicula sit amet. Curabitur convallis, metus finibus tristique viverra, nunc sem suscipit orci, nec gravida leo risus nec orci. Aenean pretium, eros eget blandit tristique, quam tellus porttitor felis, non molestie neque ipsum et leo. Etiam tincidunt, massa vitae bibendum posuere, arcu orci aliquam dolor, a viverra ligula lectus at ante.</p>
            <p>Cras iaculis sapien nec nisl luctus viverra. Integer eget dui ipsum.<t-source-ref sourceId='test'/> Pellentesque vel efficitur risus. Phasellus libero ante, porttitor non consequat id, euismod quis sem. Maecenas egestas mi quis est mattis, a ultricies nulla fermentum. Sed venenatis ultricies pellentesque. Integer varius ipsum dolor, placerat consectetur magna blandit nec. Donec et tortor metus. Nullam libero lacus, vulputate nec massa non, hendrerit sodales sapien. Aenean pellentesque sapien sed diam dapibus dignissim. Morbi sodales massa ut suscipit mollis. Aliquam id velit non dui congue convallis eget eget augue. Duis dignissim lectus eros, eu molestie nibh scelerisque vel. Nullam scelerisque ultrices felis id euismod. Etiam enim nisi, dignissim et odio eu, tristique tempor magna.</p>
          </t-article>
          <t-heading level={2}>Artikkelliste</t-heading>
          <t-article-list hue={0} items={[
            { href: '#', title: 'Lorem ipsum', intro: 'Lorem ipsum dolor sit amet', date: new Date() },
            {
              href: '#',
              title: 'Lorem ipsum dolor sit amet',
              intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra mauris sit amet varius sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet quam in mauris mattis sollicitudin. Maecenas interdum, tortor non congue varius, erat nibh ornare ligula, non ultricies risus mi quis ipsum. Integer efficitur quis nisl sit amet fringilla. Duis consequat congue mi, vel vehicula mauris facilisis eu. Aliquam accumsan bibendum ante quis fermentum. Aenean ac tincidunt leo. Proin id ipsum et libero posuere volutpat semper ut dolor.',
              date: new Date(),
            },
            {
              href: '#',
              title: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse faucibus erat ut velit aliquet mattis. Nunc vitae lectus ac urna fermentum consectetur vitae quis enim. Vivamus scelerisque, neque id fermentum ultrices, diam est fermentum quam, eu ornare diam sem vel nisl. Nullam porta tortor nisi, ut aliquam est cursus id. Aliquam turpis nisl, feugiat a massa vitae, efficitur viverra sapien. Cras sed suscipit tellus. Nunc pretium massa vitae ante euismod iaculis. Praesent pellentesque at libero eu lacinia.',
              intro: 'In hac habitasse platea dictumst. Maecenas eget justo ut velit imperdiet viverra eget vitae lectus. Curabitur at fringilla augue, ac tristique libero. Vivamus consectetur nisl a facilisis auctor. Integer sed purus nisi. Fusce in ligula convallis, auctor sapien non, mattis turpis. Morbi vitae elementum lectus, egestas suscipit nisl. Morbi imperdiet eleifend magna ac varius.',
              date: new Date(),
            },
            {
              href: '#',
              title: 'Morbi auctor, ligula nec malesuada ultricies, purus metus ultricies metus, nec tincidunt nunc turpis ut ligula.',
              intro: 'Sed sit amet nunc et nunc lacinia tincidunt. Integer auctor, lorem nec ultricies ultricies, orci dui convallis purus, eget fermentum velit neque nec dui.',
            },
          ]} />
          <t-heading level={2}>Kode</t-heading>
          <t-code language="typescript" code='const test: string = "test";'/>
          <t-heading level={2}>Spinner</t-heading>
          <t-spinner />
          <t-heading level={2}>Verktøyhjelp</t-heading>
          Lorem ipsum dolor sit amet. <t-tooltip><span slot="trigger">[1]</span><span slot="content">Bla bla</span>
        </t-tooltip>
        </div>
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
