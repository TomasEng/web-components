import { Chromator, Hsl } from 'chromator';
import { calculateContrast, getDecreasedLuminanceByContrastFromColour, getIncreasedLuminanceByContrastFromColour } from './colourUtils';

describe('colourUtils', () => {
  describe('calculateContrast', () => {
    it('Returns 21 for black and white', () => {
      const black = new Chromator('black');
      const white = new Chromator('white');
      expect(calculateContrast(black, white)).toBeCloseTo(21, 4);
      expect(calculateContrast(white, black)).toBeCloseTo(21, 4);
    });

    it('Returns 1 when the colours are the same', () => {
      const orchid = new Chromator('orchid');
      expect(calculateContrast(orchid, orchid)).toBeCloseTo(1, 4);
    });

    it('Returns the expected contrast for two colours', () => {
      const red = new Chromator('red');
      const blue = new Chromator('blue');
      expect(calculateContrast(red, blue)).toBeCloseTo(2.15, 2);
      expect(calculateContrast(blue, red)).toBeCloseTo(2.15, 2);
    });
  });

  describe('getIncreasedLuminanceByContrast', () => {
    it('Returns a luminance value that gives the desired contrast to the given colour', () => {
      const baseHsl: Hsl = { hue: 0, saturation: 1, lightness: 0.5 };
      const baseColour = new Chromator(baseHsl);
      const baseLuminance = 0.1;
      baseColour.setRelativeLuminance(baseLuminance);
      const targetContrast = 2;
      const result = getIncreasedLuminanceByContrastFromColour(baseColour, targetContrast);
      const resultColour = baseColour.copy().setRelativeLuminance(result);
      const resultContrast = calculateContrast(baseColour, resultColour);
      expect(resultContrast).toBeCloseTo(targetContrast, 4);
    });

    it('Returns undefined when the resulting luminance is too high', () => {
      const baseHsl: Hsl = { hue: 0, saturation: 1, lightness: 0.5 };
      const baseColour = new Chromator(baseHsl);
      const baseLuminance = 0.9;
      baseColour.setRelativeLuminance(baseLuminance);
      const targetContrast = 2;
      const result = getIncreasedLuminanceByContrastFromColour(baseColour, targetContrast);
      expect(result).toBeUndefined();
    });
  });

  describe('getDecreasedLuminanceByContrast', () => {
    it('Returns a luminance value that gives the desired contrast to the given colour', () => {
      const baseHsl: Hsl = { hue: 0, saturation: 1, lightness: 0.5 };
      const baseColour = new Chromator(baseHsl);
      const baseLuminance = 0.9;
      baseColour.setRelativeLuminance(baseLuminance);
      const targetContrast = 2;
      const result = getDecreasedLuminanceByContrastFromColour(baseColour, targetContrast);
      const resultColour = baseColour.copy().setRelativeLuminance(result);
      const resultContrast = calculateContrast(baseColour, resultColour);
      expect(resultContrast).toBeCloseTo(targetContrast, 4);
    });

    it('Returns undefined when the resulting luminance is too low', () => {
      const baseHsl: Hsl = { hue: 0, saturation: 1, lightness: 0.5 };
      const baseColour = new Chromator(baseHsl);
      const baseLuminance = 0.01;
      baseColour.setRelativeLuminance(baseLuminance);
      const targetContrast = 2;
      const result = getDecreasedLuminanceByContrastFromColour(baseColour, targetContrast);
      expect(result).toBeUndefined();
    });
  });
});
