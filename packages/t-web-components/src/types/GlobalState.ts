import { Mode, SelectedMode } from './Mode';

export type GlobalState = {
  baseChroma: number;
  baseHue: number;
  contrast: number;
  hueOffsetCode: number;
  hueOffsetVisitedLink: number;
  mode: Mode;
  selectedMode: SelectedMode;
}
