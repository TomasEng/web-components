import { h, Fragment } from '@stencil/core';
import {
  ColourSettings,
  ComponentColourSettingsCustomEvent,
} from '../../components';
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
import { tArticleListDemo } from '../../components/t-article-list/t-article.list.demo';
import { tCodeDemo } from '../../components/t-code/t-code.demo';
import { tSpinnerDemo } from '../../components/t-spinner/t-spinner.demo';
import { tTooltipDemo } from '../../components/t-tooltip/t-tooltip.demo';
import { tPanelDemo } from '../../components/t-panel/t-panel.demo';
import { tTreeDemo } from '../../components/t-tree/t-tree.demo';
import { tTableOfContentsDemo } from '../../components/t-table-of-contents/t-table-of-contents.demo';
import { tIframeDemo } from '../../components/t-iframe/t-iframe.demo';
import { tHeadingDemo } from '../../components/t-heading/t-heading.demo';
import { tBreadcrumbsDemo } from '../../components/t-breadcrumbs/t-breadcrumbs.demo';

export interface PageComponentsProps {
  colourSettings: ColourSettings;
  onColourSettingsChange: (settings: ColourSettings) => void;
}

export const PageComponents = ({colourSettings, onColourSettingsChange}: PageComponentsProps) => {

  const handleColourSettingsChange = ({ detail }: ComponentColourSettingsCustomEvent<ColourSettings>) => {
    onColourSettingsChange(detail);
  };

  return (
    <>
      <component-colour-settings
        slot="leftbar"
        settings={colourSettings}
        onChangeSettings={handleColourSettingsChange}
      />
      <div slot="content">
        <t-heading level={1}>Eksempler</t-heading>
        <component-documentation
          name='Knapp'
          examples={[
            { title: 'Med tekst', code: tButtonDemo.simple, previewMode: 'hue' },
            { title: 'Med ikon og tekst', code: tButtonDemo.withIcon, previewMode: 'hue' },
            { title: 'Med kun ikon', code: tButtonDemo.iconOnly, previewMode: 'hue' },
            { title: 'Gjennomsiktig', code: tButtonDemo.transparent, previewMode: 'hue' },
            { title: 'Lenkeformat', code: tButtonDemo.link, previewMode: 'inline' },
          ]}
          colourSettings={colourSettings}
        />
        <component-documentation
          name='Lenke'
          examples={[
            { title: 'Intern lenke', code: tLinkDemo.internal, previewMode: 'inline' },
            { title: 'Ekstern lenke', code: tLinkDemo.external, previewMode: 'inline' },
          ]}
          colourSettings={colourSettings}
        />
        <component-documentation
          name='Overskrifter'
          examples={[
            { title: 'Alle nivåer', code: tHeadingDemo.allLevels, previewMode: 'iframe' },
            { title: 'Med tilleggsinformasjon', code: tHeadingDemo.withNote, previewMode: 'iframe' },
          ]}
          colourSettings={colourSettings}
        />
        <component-documentation
          name='Tekstfelt'
          examples={[{ code: tTextfieldDemo.valueChange, previewMode: 'hue' }]}
          colourSettings={colourSettings}
        />
        <component-documentation
          name='Nedtrekksliste'
          examples={[{ code: tSelectDemo.simple, previewMode: 'hue' }]}
          colourSettings={colourSettings}
        />
        <component-documentation
          name='Trevisning'
          examples={[{ code: tTreeDemo.withLinks, previewMode: 'inline' }]}
          colourSettings={colourSettings}
        />
        <component-documentation
          name='Nedtrekksmeny'
          examples={[{ code: tDropdownMenuDemo.simple, previewMode: 'hue' }]}
          colourSettings={colourSettings}
        />
        <component-documentation
          name='Brødsmulesti'
          examples={[
            { code: tBreadcrumbsDemo.default, previewMode: 'inline' },
          ]}
          colourSettings={colourSettings}
        />
        <component-documentation
          name='Tallvelger'
          examples={[{ code: tIntegerPickerDemo.simple, previewMode: 'hue' }]}
          colourSettings={colourSettings}
        />
        <component-documentation
          name='Faner'
          examples={[{ code: tTabsDemo.simple, previewMode: 'inline' }]}
          colourSettings={colourSettings}
        />
        <component-documentation
          name='Kildeliste'
          examples={[{ code: tSourceListDemo.simple, previewMode: 'inline' }]}
          colourSettings={colourSettings}
        />
        <component-documentation
          name='Artikkel'
          examples={[{ code: tArticleDemo.withSources, previewMode: 'iframe' }]}
          colourSettings={colourSettings}
        />
        <component-documentation
          name='Artikkelliste'
          examples={[{ code: tArticleListDemo.simple, previewMode: 'inline' }]}
          colourSettings={colourSettings}
        />
        <component-documentation
          name="Panel"
          examples={[
            { title: 'Standard', code: tPanelDemo.default, previewMode: 'inline' },
            { title: 'Med overskrift', code: tPanelDemo.withHeading, previewMode: 'inline' },
            { title: 'Med overskrift og ikon', code: tPanelDemo.withHeadingAndIcon, previewMode: 'inline' },
          ]}
          colourSettings={colourSettings}
        />
        <component-documentation
          name='Innholdsfortegnelse'
          examples={[{ code: tTableOfContentsDemo.inArticle, previewMode: 'iframe' }]}
          colourSettings={colourSettings}
        />
        <component-documentation
          name='Kode'
          examples={[
            { title: 'Standard (på linje)', code: tCodeDemo.inline, previewMode: 'inline' },
            { title: 'Blokk', code: tCodeDemo.block, previewMode: 'inline' },
            { title: 'Panel', code: tCodeDemo.panel, previewMode: 'inline' },
            { title: 'Trimmet marg', code: tCodeDemo.trimMargin, previewMode: 'inline' },
            { title: 'Direkte', code: tCodeDemo.slot, previewMode: 'inline' },
          ]}
          colourSettings={colourSettings}
        />
        <component-documentation
          name='Spinner'
          examples={[{ code: tSpinnerDemo.default, previewMode: 'inline' }]}
          colourSettings={colourSettings}
        />
        <component-documentation
          name='Verktøyhjelp'
          examples={[{ code: tTooltipDemo.withLongContent, previewMode: 'inline' }]}
          colourSettings={colourSettings}
        />
        <component-documentation
          name='Bryter'
          examples={[
            { title: 'På', code: tSwitchDemo.on, previewMode: 'hue' },
            { title: 'Av', code: tSwitchDemo.off, previewMode: 'hue' },
          ]}
          colourSettings={colourSettings}
        />
        <component-documentation
          name='Ramme'
          examples={[
            { title: 'Standard', code: tIframeDemo.srcdoc, previewMode: 'inline' },
            { title: 'Med mulighet for endring av størrelse', code: tIframeDemo.resizable, previewMode: 'inline' },
          ]}
          colourSettings={colourSettings}
        />
      </div>
    </>
  );
}
