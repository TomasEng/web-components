import { Component, EventEmitter, h, Prop, Event } from '@stencil/core';
import { ComponentHue } from '../../types/ComponentHue';
import { Mode, SelectedMode } from '../../types/Mode';
import { SunIcon } from '../../icons/SunIcon';
import { MoonIcon } from '../../icons/MoonIcon';
import state from '../../store';

@Component({
  tag: 't-mode-picker',
  styleUrl: 't-mode-picker.css',
})
export class TModePicker {

  @Prop() hue: ComponentHue = 0;
  @Prop() systemSelected: boolean = true;

  render() {
    const label = state.mode === 'light' ? <SunIcon fill class='icon'/> : <MoonIcon fill class='icon'/>;

    return <internal-style-provider hueOffsetInTurns={this.hue}>
      <t-dropdown-menu
        label={label}
        buttonAttributes={{title: 'Velg modus'}}
        items={[
          {label: 'Systemmodus', action: () => this.selectMode('system')},
          {label: 'Lys modus', action: () => this.selectMode('light')},
          {label: 'Mørk modus', action: () => this.selectMode('dark')},
        ]}
      />
    </internal-style-provider>;
  }

  private selectMode(mode: SelectedMode) {
    state.selectedMode = mode;
  }
}
