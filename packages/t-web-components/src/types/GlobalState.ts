import { Mode, SelectedMode } from './Mode';

export type GlobalState = {
  selectedMode: SelectedMode;
  mode: Mode;
  baseHue: number;
  baseChroma: number;
}
