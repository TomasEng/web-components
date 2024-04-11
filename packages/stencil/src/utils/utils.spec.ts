import { asPercents } from './utils';

describe('utils', () => {
  describe('asPercents', () => {
    it('Returns the number as a percentage string', () => {
      expect(asPercents(0.5)).toBe('50%');
    });
  });
});
