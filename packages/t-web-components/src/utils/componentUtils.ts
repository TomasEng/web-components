import { GlobalState } from '../types/GlobalState';
import { ResizeMode } from '../types/ResizeMode';

export const setCssProperty = (element: HTMLElement, key: string, value: string) => {
    element.style.setProperty(key, value);
}

export const setBaseColour = (element: HTMLElement, hueOffsetInDegrees: number) => {
  setCssProperty(
    element,
    '--t-colour-base-component',
    `oklch(from var(--t-colour-base-app) l c calc(h + ${hueOffsetInDegrees.toFixed()}))`
  );
  setCssProperty(
    element,
    '--t-colour-base-component-high-contrast',
    `oklch(from var(--t-colour-base-app-high-contrast) l c calc(h + ${hueOffsetInDegrees.toFixed()}))`
  );
  setCssProperty(
    element,
    '--t-colour-base-component-low-contrast',
    `oklch(from var(--t-colour-base-app-low-contrast) l c calc(h + ${hueOffsetInDegrees.toFixed()}))`
  );
}

export const resizeClass = (mode: ResizeMode) => 't-resizable-' + mode;
