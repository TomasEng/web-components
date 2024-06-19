import { DEFAULT_HUE } from '../constants';

export const iconUrl = (baseHueInDegrees: number = DEFAULT_HUE) =>
  `data:image/svg+xml;charset=utf-8,<svg aria-hidden="true" class="iconify iconify--logos" height="144" role="img" viewBox="0 0 12 12" width="144" xmlns="http://www.w3.org/2000/svg" > <style> :root { --base-colour-hue: var(--t-colour-base-app, ${baseHueInDegrees}); --opposite-colour-hue: calc(var(--base-colour-hue) + 180); } </style> <path d=" M 12 0 L 0 4 L 0 8 L 12 4 Z " style=" fill: oklch(0.5 0.5 var(--base-colour-hue) / 0.67); " /> <path d=" M 0 4 L 0 8 L 12 12 L 12 8 L 6 6 Z " style=" fill: oklch(0.5 0.5 var(--opposite-colour-hue) / 0.67); " /> <path d=" M 0 4 L 0 8 L 6 6 Z " style=" fill: oklch(0.5 0.5 var(--base-colour-hue)); " /> <path d=" M 12 4 L 6 6 L 12 8 Z " style=" fill: oklch(0.5 0.5 var(--opposite-colour-hue) / 0.33); "/> </svg>`;

export const setIcon = (baseHueInDegrees: number = DEFAULT_HUE) => {
  let link: HTMLLinkElement = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.type = 'image/svg+xml';
  link.href = iconUrl(baseHueInDegrees);
}
