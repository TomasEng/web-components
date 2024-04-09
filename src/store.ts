import { createStore } from '@stencil/store';
import { GlobalState } from './types/GlobalState';

const { state } = createStore<GlobalState>({
  darkMode: false,
  baseHue: 160,
  baseChroma: 0.4,
});

export default state;
