import { Component, h, State } from '@stencil/core';
import { TSwitchCustomEvent } from '../../components';

@Component({
  tag: 'page-home',
})
export class PageHome {

  @State() darkMode = false;

  handleSetDarkMode = ({detail}: TSwitchCustomEvent<boolean>) => {
    this.darkMode = detail;
  }

  render() {
    return (
      <t-context darkMode={this.darkMode}>
        <t-layout>
          <t-switch onSwitch={this.handleSetDarkMode} checked={this.darkMode}>Mørk modus</t-switch>
          <t-heading level={1}>Tomas sitt designsystem</t-heading>
          <t-heading level={2}>Komponenter</t-heading>
          <t-heading level={3}>Knapp</t-heading>
          <t-button>Klikk meg</t-button>
          <t-heading level={3}>Bryter</t-heading>
          <t-switch checked={true}>På</t-switch>
          <t-switch checked={false}>Av</t-switch>
        </t-layout>
      </t-context>
    );
  }
}
