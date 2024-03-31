import { Chromator } from 'chromator';

export const getIncreasedLuminanceByContrast = (colour: Chromator, contrast: number): number | undefined => {
  const luminance = colour.getRelativeLuminance();
  const targetLuminance = contrast * (luminance + 0.05) - 0.05;
  return targetLuminance > 1 ? undefined : targetLuminance;
};

export const getDecreasedLuminanceByContrast = (colour: Chromator, contrast: number): number | undefined => {
  const luminance = colour.getRelativeLuminance();
  const targetLuminance = (luminance + 0.05) / contrast - 0.05;
  return targetLuminance < 0 ? undefined : targetLuminance;
};

export const calculateContrast = (colour1: Chromator, colour2: Chromator): number => {
  const luminance1 = colour1.getRelativeLuminance();
  const luminance2 = colour2.getRelativeLuminance();
  const lighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);
  return (lighter + 0.05) / (darker + 0.05);
};
