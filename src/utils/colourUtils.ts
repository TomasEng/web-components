import { Chromator } from 'chromator';

export const getIncreasedLuminanceByContrastFromColour = (colour: Chromator, contrast: number): number | undefined => {
  const luminance = colour.getRelativeLuminance();
  return getIncreasedLuminanceByContrast(luminance, contrast);
};

export const getIncreasedLuminanceByContrast = (baseLuminance: number, contrast: number): number | undefined => {
  const targetLuminance = contrast * (baseLuminance + 0.05) - 0.05;
  return targetLuminance > 1 ? undefined : targetLuminance;
};

export const getDecreasedLuminanceByContrastFromColour = (colour: Chromator, contrast: number): number | undefined => {
  const luminance = colour.getRelativeLuminance();
  return getDecreasedLuminanceByContrast(luminance, contrast);
};

export const getDecreasedLuminanceByContrast = (baseLuminance: number, contrast: number): number | undefined => {
  const targetLuminance = (baseLuminance + 0.05) / contrast - 0.05;
  return targetLuminance < 0 ? undefined : targetLuminance;
};

export const calculateContrast = (colour1: Chromator, colour2: Chromator): number => {
  const luminance1 = colour1.getRelativeLuminance();
  const luminance2 = colour2.getRelativeLuminance();
  const lighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);
  return (lighter + 0.05) / (darker + 0.05);
};
