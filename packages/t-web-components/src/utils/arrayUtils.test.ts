import { describe } from 'node:test';
import { findUniqueIndex, uniqueItems } from './arrayUtils';

describe('arrayUtils', () => {
  describe('uniqueItems', () => {
    it('Returns an array with unique items', () => {
      const array = [1, 2, 3, 1, 2, 3, 4, 5];
      expect(uniqueItems(array)).toEqual([1, 2, 3, 4, 5]);
    });

    it('Returns an empty array if the input is an empty array', () => {
      expect(uniqueItems([])).toEqual([]);
    });

    it('Returns an array with one item if the input is an array with one item', () => {
      expect(uniqueItems([1])).toEqual([1]);
    });

    it('Returns an array with one item if the input is an array with one unique item', () => {
      expect(uniqueItems([1, 1, 1, 1, 1])).toEqual([1]);
    });
  });

  describe('findUniqueIndex', () => {
    it('Returns the index of the unique item', () => {
      const array = [1, 2, 3, 4, 5];
      expect(findUniqueIndex(array, 3)).toBe(2);
    });

    it('Ignores duplicates', () => {
      const array = [1, 2, 1, 3, 4, 5, 3];
      expect(findUniqueIndex(array, 3)).toBe(2);
    });

    it('Returns -1 if the item is not in the array', () => {
      const array = [1, 2, 3, 4, 5];
      expect(findUniqueIndex(array, 6)).toBe(-1);
    });

    it('Returns -1 if the array is empty', () => {
      expect(findUniqueIndex([], 1)).toBe(-1);
    });
  });
});
