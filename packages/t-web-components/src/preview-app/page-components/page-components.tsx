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
import state from '../../store';
import { tArticleListDemo } from '../../components/t-article-list/t-article.list.demo';
import { tCodeDemo } from '../../components/t-code/t-code.demo';
import { tSpinnerDemo } from '../../components/t-spinner/t-spinner.demo';
import { tTooltipDemo } from '../../components/t-tooltip/t-tooltip.demo';

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
      const contextElement: HTMLTContextElement = iframe.contentWindow.document.querySelector('t-context');
      if (contextElement) {
        contextElement.baseHue = this.colourSettings.hue;
        contextElement.baseChroma = this.colourSettings.chroma;
        contextElement.selectMode(state.selectedMode).then();
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
          <component-documentation
            name='Artikkelliste'
            examples={[{ code: tArticleListDemo.simple, previewMode: 'inline' }]}
            colourSettings={this.colourSettings}
          />
          <component-documentation
            name='Kode'
            examples={[
              { title: 'Standard', code: tCodeDemo.default, previewMode: 'inline' },
              { title: 'Panel', code: tCodeDemo.panel, previewMode: 'inline' },
            ]}
            colourSettings={this.colourSettings}
          />
          <component-documentation
            name='Spinner'
            examples={[{ code: tSpinnerDemo.default, previewMode: 'inline' }]}
            colourSettings={this.colourSettings}
          />
          <component-documentation
            name='Verktøyhjelp'
            examples={[{ code: tTooltipDemo.default, previewMode: 'inline' }]}
            colourSettings={this.colourSettings}
          />
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
