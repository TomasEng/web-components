import { createStore } from '@stencil/store';
import { GlobalState } from './types/GlobalState';

const { state } = createStore<GlobalState>({
  darkMode: false,
  baseHue: 160,
  baseSaturation: 1,
});

export default state;
