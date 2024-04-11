import { integerArray } from './numberUtils';

describe('numberUtils', () => {
  describe('integerArray', () => {
    it('Returns an array of integers from 0 to length - 1', () => {
      expect(integerArray(5)).toEqual([0, 1, 2, 3, 4]);
    });
  });
});
