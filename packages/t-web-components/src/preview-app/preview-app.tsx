import { Component, h, JSX, State } from '@stencil/core';
import { ColourSettings } from '../components';
import { DEFAULT_CHROMA, DEFAULT_HUE, DEFAULT_NUMBER_OF_HUES, PATH_ABOUT } from '../constants';
import state from '../store';
import { PageComponents } from './PageComponents/PageComponents';
import { PageAbout } from './PageAbout/PageAbout';
import { iconUrl, setIcon } from '../utils/iconUtils';

@Component({
  tag: 'preview-app',
})
export class PreviewApp {

  @State() baseHue = DEFAULT_HUE;
  @State() baseChroma = DEFAULT_CHROMA;
  @State() numberOfHues = DEFAULT_NUMBER_OF_HUES;
  @State() contrast = 1;
  @State() urlHash = window.location.hash;
  @State() url = new URL(window.location.href);
  @State() hueOffsetCode = 180;
  @State() hueOffsetVisitedLink = 30;

  handleColourSettingsChange = (colourSettings: ColourSettings) => {
    this.baseHue = colourSettings.hue;
    this.baseChroma = colourSettings.chroma;
    this.numberOfHues = colourSettings.numberOfHues;
    this.contrast = colourSettings.contrast;
    this.hueOffsetCode = colourSettings.hueOffsetCode;
    this.hueOffsetVisitedLink = colourSettings.hueOffsetVisitedLink;
    setIcon(colourSettings.hue);
  };

  connectedCallback() {
    this.setUrlHash();
    this.setUrl();
    window.addEventListener('hashchange', () => {
      this.setUrlHash();
    });
    window.addEventListener('popstate', () => {
      this.setUrl();
    });
    setIcon();
  }

  setUrlHash() {
    this.urlHash = window.location.hash;
  }

  setUrl() {
    this.url = new URL(window.location.href);
  }

  get previewIframes(): NodeListOf<HTMLIFrameElement> {
    return document.querySelectorAll('preview-iframe iframe');
  }

  componentDidRender() {
    this.previewIframes?.forEach(iframe => {
      const contextElement: HTMLTContextElement = iframe.contentWindow.document.querySelector('t-context');
      if (contextElement) {
        contextElement.basehue = this.baseHue;
        contextElement.basechroma = this.baseChroma;
        contextElement.selectMode(state.selectedMode).then();
      }
    });
  }

  render(): JSX.Element {
    const isAboutPageOpen = this.url.searchParams.get('s') === PATH_ABOUT;
    const colourSettings: ColourSettings = {
      hue: this.baseHue,
      chroma: this.baseChroma,
      numberOfHues: this.numberOfHues,
      contrast: this.contrast,
      hueOffsetVisitedLink: this.hueOffsetVisitedLink,
      hueOffsetCode: this.hueOffsetCode,
    };
    return (
      <t-context
        basehue={this.baseHue}
        basechroma={this.baseChroma}
        contrast={this.contrast}
        hueoffsetcode={this.hueOffsetCode}
        hueoffsetvisitedlink={this.hueOffsetVisitedLink}
      >
        <t-layout sitetitle="Tomas sitt designsystem" stickyleftbar={true}>
          <img slot="logo" src={iconUrl(this.baseHue)}  alt='Logo'/>
          <t-layout-nav slot="nav">
            <t-layout-nav-item open={!isAboutPageOpen}><a href="?">Oversikt</a></t-layout-nav-item>
            <t-layout-nav-item open={isAboutPageOpen}><a href={"?s=" + PATH_ABOUT}>Om</a></t-layout-nav-item>
          </t-layout-nav>
          {isAboutPageOpen ? <PageAbout/> : (
            <PageComponents
              colourSettings={colourSettings}
              onColourSettingsChange={this.handleColourSettingsChange}
            />
          )}
        </t-layout>
      </t-context>
    );
  }
}
