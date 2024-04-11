import { Component, h, Prop } from '@stencil/core';
import { ComponentHue } from '../../types/ComponentHue';
import { SelectedMode } from '../../types/Mode';
import { SunIcon } from '../../icons/SunIcon';
import { MoonIcon } from '../../icons/MoonIcon';
import state from '../../store';
import { CogIcon } from '../../icons/CogIcon';

@Component({
  tag: 't-mode-picker',
  styleUrl: 't-mode-picker.css',
})
export class TModePicker {

  @Prop() hue: ComponentHue = 0;
  @Prop() systemSelected: boolean = true;

  render() {
    console.log(state.mode, state.selectedMode);
    const label = state.mode === 'light' ? <SunIcon fill class='icon'/> : <MoonIcon fill class='icon'/>;

    return <internal-style-provider hueOffsetInTurns={this.hue}>
      <t-dropdown-menu
        label={label}
        buttonAttributes={{title: 'Velg modus'}}
        items={[
          {
            label: 'Automatisk',
            action: () => this.selectMode('system'),
            selected: state.selectedMode === 'system',
            icon: <CogIcon/>,
            buttonAttributes: {title: 'Bruk samme innstilling som nettleseren'}
          },
          {
            label: 'Lys modus',
            action: () => this.selectMode('light'),
            selected: state.selectedMode === 'light',
            icon: <SunIcon/>,
            buttonAttributes: {title: 'Velg lys modus'}
          },
          {
            label: 'Mørk modus',
            action: () => this.selectMode('dark'),
            selected: state.selectedMode === 'dark',
            icon: <MoonIcon/>,
            buttonAttributes: {title: 'Velg mørk modus'}
          },
        ]}
      />
    </internal-style-provider>;
  }

  private selectMode(mode: SelectedMode) {
    state.selectedMode = mode;
  }
}
