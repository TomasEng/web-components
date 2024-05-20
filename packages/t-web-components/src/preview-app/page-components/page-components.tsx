import { Component, h, JSX, Fragment, EventEmitter, Event, Prop } from '@stencil/core';
import {
  ColourSettings,
  ComponentColourSettingsCustomEvent,
} from '../../components';
import { integerArray } from '../../utils/numberUtils';
import { tButtonDemo } from '../../components/t-button/t-button.demo';
import { tSwitchDemo } from '../../components/t-switch/t-switch.demo';
import { tIntegerPickerDemo } from '../../components/t-integer-picker/t-integer-picker.demo';
import { tTextfieldDemo } from '../../components/t-textfield/t-textfield.demo';
import { tSelectDemo } from '../../components/t-select/t-select.demo';
import { tDropdownMenuDemo } from '../../components/t-dropdown/t-dropdown-menu.demo';
import { tLinkDemo } from '../../components/t-link/t-link.demo';
import { tTabsDemo } from '../../components/t-tabs/t-tabs.demo';
import { tSourceListDemo } from '../../components/t-source-list/t-source-list.demo';
import { tArticleDemo } from '../../components/t-article/t-article.demo';

@Component({
  tag: 'page-components',
})
export class PageComponents {

  @Prop() colourSettings: ColourSettings;

  @Event() colourSettingsChange: EventEmitter<ColourSettings>;

  handleColourSettingsChange = ({ detail }: ComponentColourSettingsCustomEvent<ColourSettings>) => {
    this.colourSettingsChange.emit(detail);
  };

  get previewIframes(): NodeListOf<HTMLIFrameElement> {
    return document.querySelectorAll('preview-iframe iframe');
  }

  componentDidRender() {
    this.previewIframes?.forEach(iframe => {
      const contextElement = iframe.contentWindow.document.querySelector('t-context');
      if (contextElement) {
        contextElement.baseHue = this.colourSettings.hue;
        contextElement.baseChroma = this.colourSettings.chroma;
      }
    });
  }

  render(): JSX.Element {
    return (
      <t-layout-main stickyLeftbar={true}>
        <component-colour-settings
          slot="leftbar"
          settings={this.colourSettings}
          onChangeSettings={this.handleColourSettingsChange}
        />
        <div slot="content">
          <t-heading level={1}>Eksempler</t-heading>
          <component-documentation
            name='Knapp'
            examples={[{ code: tButtonDemo.simple, previewMode: 'hue' }]}
            colourSettings={this.colourSettings}
          />
          <component-documentation
            name='Bryter'
            examples={[
              { title: 'På', code: tSwitchDemo.on, previewMode: 'hue' },
              { title: 'Av', code: tSwitchDemo.off, previewMode: 'hue' },
            ]}
            colourSettings={this.colourSettings}
          />
          <component-documentation
            name='Tallvelger'
            examples={[{ code: tIntegerPickerDemo.simple, previewMode: 'hue' }]}
            colourSettings={this.colourSettings}
          />
          <component-documentation
            name='Tekstfelt'
            examples={[{ code: tTextfieldDemo.valueChange, previewMode: 'hue' }]}
            colourSettings={this.colourSettings}
          />
          <component-documentation
            name='Nedtrekksliste'
            examples={[{ code: tSelectDemo.simple, previewMode: 'hue' }]}
            colourSettings={this.colourSettings}
          />
          <component-documentation
            name='Nedtrekksmeny'
            examples={[{ code: tDropdownMenuDemo.simple, previewMode: 'hue' }]}
            colourSettings={this.colourSettings}
          />
          <component-documentation
            name='Lenke'
            examples={[
              { title: 'Intern lenke', code: tLinkDemo.internal, previewMode: 'inline' },
              { title: 'Ekstern lenke', code: tLinkDemo.external, previewMode: 'inline' },
            ]}
            colourSettings={this.colourSettings}
          />
          <component-documentation
            name='Faner'
            examples={[{ code: tTabsDemo.simple, previewMode: 'inline' }]}
            colourSettings={this.colourSettings}
          />
          <component-documentation
            name='Kildeliste'
            examples={[{ code: tSourceListDemo.simple, previewMode: 'inline' }]}
            colourSettings={this.colourSettings}
          />
          <component-documentation
            name='Artikkel'
            examples={[{ code: tArticleDemo.simple, previewMode: 'iframe' }]}
            colourSettings={this.colourSettings}
          />
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <t-source-ref sourceId="test" />
              Mauris ac nisl pellentesque, tempus metus non, pretium felis. Suspendisse potenti. Nullam laoreet, neque
              eu pharetra lobortis, diam ligula posuere augue, in imperdiet quam felis nec sem.
              <t-source-ref sourceId="cc" />
              Suspendisse suscipit, dui nec volutpat porttitor, sapien turpis pharetra elit, et cursus ante nisi eu
              nunc. Phasellus facilisis nunc arcu, eget laoreet purus vehicula sit amet. Curabitur convallis, metus
              finibus tristique viverra, nunc sem suscipit orci, nec gravida leo risus nec orci. Aenean pretium, eros
              eget blandit tristique, quam tellus porttitor felis, non molestie neque ipsum et leo. Etiam tincidunt,
              massa vitae bibendum posuere, arcu orci aliquam dolor, a viverra ligula lectus at ante.
            </p>
            <p>Cras iaculis sapien nec nisl luctus viverra. Integer eget dui ipsum.
              <t-source-ref sourceId="test" />
              Pellentesque vel efficitur risus. Phasellus libero ante, porttitor non consequat id, euismod quis sem.
              Maecenas egestas mi quis est mattis, a ultricies nulla fermentum. Sed venenatis ultricies pellentesque.
              Integer varius ipsum dolor, placerat consectetur magna blandit nec. Donec et tortor metus. Nullam libero
              lacus, vulputate nec massa non, hendrerit sodales sapien. Aenean pellentesque sapien sed diam dapibus
              dignissim. Morbi sodales massa ut suscipit mollis. Aliquam id velit non dui congue convallis eget eget
              augue. Duis dignissim lectus eros, eu molestie nibh scelerisque vel. Nullam scelerisque ultrices felis id
              euismod. Etiam enim nisi, dignissim et odio eu, tristique tempor magna.
            </p>
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
          <t-heading level={3}>Standard</t-heading>
          <t-code language="typescript" code='const test: string = "test";'/>
          <t-heading level={3}>Panel</t-heading>
          <t-code language="typescript" code='const test: string = "test";' panel={true}/>
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
