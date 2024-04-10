import { Mode } from '../types/Mode';

export const systemMode = (): Mode => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
