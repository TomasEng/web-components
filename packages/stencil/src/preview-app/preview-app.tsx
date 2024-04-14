import { Component, h, JSX, State } from '@stencil/core';
import { PageComponentsCustomEvent } from '../components';
import { DEFAULT_CHROMA, DEFAULT_HUE, DEFAULT_NUMBER_OF_HUES, PATH_ABOUT } from '../constants';

@Component({
  tag: 'preview-app',
})
export class PreviewApp {

  @State() baseHue = DEFAULT_HUE;
  @State() baseChroma = DEFAULT_CHROMA;
  @State() numberOfHues = DEFAULT_NUMBER_OF_HUES;

  handleHueChange = ({ detail }: PageComponentsCustomEvent<number>) => {
    this.baseHue = detail;
  };

  handleSaturationChange = ({ detail }: PageComponentsCustomEvent<number>) => {
    this.baseChroma = detail;
  };

  handleNumberOfHuesChange = ({ detail }: PageComponentsCustomEvent<number>) => {
    this.numberOfHues = detail;
  };

  render(): JSX.Element {
    const isAboutPageOpen = window.location.pathname === '/' + PATH_ABOUT;
    return (
      <t-context baseHue={this.baseHue} baseChroma={this.baseChroma}>
        <t-layout>
          <t-layout-header
            slot='header'
            siteTitle="Tomas sitt designsystem"
            navItems={[
              { label: 'Oversikt', href: '/', open: !isAboutPageOpen },
              { label: 'Om', href: '/' + PATH_ABOUT, open: isAboutPageOpen},
            ]}
          />
          <t-layout-main slot='main'>
            {isAboutPageOpen ? <page-about /> : (
              <page-components
                baseHue={this.baseHue}
                baseChroma={this.baseChroma}
                numberOfHues={this.numberOfHues}
                onHueChange={this.handleHueChange}
                onChromaChange={this.handleSaturationChange}
                onNumberOfHuesChange={this.handleNumberOfHuesChange}
              />
            )}
          </t-layout-main>
        </t-layout>
      </t-context>
    );
  }
}
