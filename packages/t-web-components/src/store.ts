import { createStore } from '@stencil/store';
import { GlobalState } from './types/GlobalState';
import {
  getMode,
  getModeFromLocalStorage,
  resetModeInLocalStorage,
  setModeInLocalStorage,
  systemMode,
} from './utils/browserUtils';
import { SelectedMode } from './types/Mode';

const { state } = createStore<GlobalState>({
  selectedMode: getModeFromLocalStorage() || 'system',
  mode: getMode(),
  baseHue: 160,
  baseChroma: 0.4,
  contrast: 1,
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  if (state.selectedMode === 'system') {
    state.mode = event.matches ? 'dark' : 'light';
  }
});

window.addEventListener('storage', event => {
  if (event.key === 't-mode') {
    state.mode = getMode();
  }
});

export const selectMode = (mode: SelectedMode) => {
  state.selectedMode = mode;
  if (mode === 'system') {
    state.mode = systemMode();
    resetModeInLocalStorage();
  } else {
    state.mode = mode;
    setModeInLocalStorage(mode);
  }
}

export default state;
