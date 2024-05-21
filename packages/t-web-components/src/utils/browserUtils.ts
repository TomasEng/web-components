import { Mode } from '../types/Mode';

export const getMode = (): Mode => {
  const mode = getModeFromLocalStorage();
  if (mode) return mode;
  else return systemMode();
}

export const systemMode = (): Mode => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const modeKey = 't-mode';
export const setModeInLocalStorage = (mode: Mode) => {
  console.log('setModeInLocalStorage', mode)
  localStorage.setItem(modeKey, mode);
};
export const resetModeInLocalStorage = () => {
  localStorage.removeItem(modeKey);
};
export const getModeFromLocalStorage = (): Mode | null => {
  return localStorage.getItem(modeKey) as Mode | null;
}
