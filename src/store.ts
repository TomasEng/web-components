import { createStore } from '@stencil/store';
import { GlobalState } from './types/GlobalState';
import { systemMode } from './utils/browserUtils';

const { state, onChange } = createStore<GlobalState>({
  selectedMode: 'system',
  mode: systemMode(),
  baseHue: 160,
  baseChroma: 0.4,
});

onChange('selectedMode', (selectedMode) => {
  state.mode = selectedMode === 'system' ? systemMode() : selectedMode;
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  if (state.selectedMode === 'system') {
    state.mode = event.matches ? 'dark' : 'light';
  }
});

export default state;
