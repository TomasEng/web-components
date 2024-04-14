import { Component, h, JSX, State, Fragment } from '@stencil/core';
import {
  PageComponentsCustomEvent,
  THuePickerCustomEvent,
  TIntegerPickerCustomEvent,
  TSaturationPickerCustomEvent,
  TSelectOption,
} from '../components';
import { integerArray } from '../utils/numberUtils';
import { DEFAULT_CHROMA, DEFAULT_HUE, DEFAULT_NUMBER_OF_HUES } from '../constants';

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
    return (
      <t-context baseHue={this.baseHue} baseChroma={this.baseChroma}>
        <t-layout>
          <t-layout-header slot='header' siteTitle="Tomas sitt designsystem" />
          <t-layout-main slot='main'>
            <page-components
              baseHue={this.baseHue}
              baseChroma={this.baseChroma}
              numberOfHues={this.numberOfHues}
              onHueChange={this.handleHueChange}
              onChromaChange={this.handleSaturationChange}
              onNumberOfHuesChange={this.handleNumberOfHuesChange}
            />
          </t-layout-main>
        </t-layout>
      </t-context>
    );
  }
}
