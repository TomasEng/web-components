import { createStore } from '@stencil/store';
import { GlobalState } from './types/GlobalState';
import { getMode, resetModeInLocalStorage, setModeInLocalStorage, systemMode } from './utils/browserUtils';

const { state, onChange } = createStore<GlobalState>({
  selectedMode: getMode() || 'system',
  mode: getMode(),
  baseHue: 160,
  baseChroma: 0.4,
  contrast: 1,
});

onChange('selectedMode', (selectedMode) => {
  if (selectedMode === 'system') {
    state.mode = systemMode();
    resetModeInLocalStorage();
  } else {
    state.mode = selectedMode;
    setModeInLocalStorage(selectedMode);
  }
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  if (state.selectedMode === 'system') {
    state.mode = event.matches ? 'dark' : 'light';
  }
});

window.addEventListener('storage', event => {
  if (event.key === 't-mode') {
    state.selectedMode = getMode() || 'system';
  }
});

export default state;
