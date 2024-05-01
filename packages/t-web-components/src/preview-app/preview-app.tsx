import { Component, h, JSX, State } from '@stencil/core';
import { ColourSettings, PageComponentsCustomEvent } from '../components';
import { DEFAULT_CHROMA, DEFAULT_HUE, DEFAULT_NUMBER_OF_HUES, PATH_ABOUT } from '../constants';

@Component({
  tag: 'preview-app',
})
export class PreviewApp {

  @State() baseHue = DEFAULT_HUE;
  @State() baseChroma = DEFAULT_CHROMA;
  @State() numberOfHues = DEFAULT_NUMBER_OF_HUES;
  @State() contrast = 1;
  @State() urlHash = window.location.hash;

  handleColourSettingsChange = ({ detail }: PageComponentsCustomEvent<ColourSettings>) => {
    this.baseHue = detail.hue;
    this.baseChroma = detail.chroma;
    this.numberOfHues = detail.numberOfHues;
    this.contrast = detail.contrast;
  };

  connectedCallback() {
    this.setUrlHash();
    window.addEventListener('hashchange', () => {
      this.setUrlHash();
    });
  }

  setUrlHash() {
    this.urlHash = window.location.hash;
  }

  render(): JSX.Element {
    const isAboutPageOpen = this.urlHash === '#' + PATH_ABOUT;
    const colourSettings: ColourSettings = {
      hue: this.baseHue,
      chroma: this.baseChroma,
      numberOfHues: this.numberOfHues,
      contrast: this.contrast,
    };
    return (
      <t-context baseHue={this.baseHue} baseChroma={this.baseChroma} contrast={this.contrast}>
        <t-layout>
          <t-layout-header
            slot='header'
            siteTitle="Tomas sitt designsystem"
            navItems={[
              { label: 'Oversikt', href: '#', open: !isAboutPageOpen },
              { label: 'Om', href: '#' + PATH_ABOUT, open: isAboutPageOpen},
            ]}
          />
          {isAboutPageOpen ? <page-about slot='main' /> : (
            <page-components
              slot='main'
              colourSettings={colourSettings}
              onColourSettingsChange={this.handleColourSettingsChange}
            />
          )}
        </t-layout>
      </t-context>
    );
  }
}
