import { findLastIndex, findUniqueIndex, reversed, uniqueItems } from './arrayUtils';

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

  describe('reversed', () => {
    it('Returns the array in reverse order', () => {
      const array = [1, 2, 3, 4, 5];
      expect(reversed(array)).toEqual([5, 4, 3, 2, 1]);
    });

    it('Returns an empty array if the input is an empty array', () => {
      expect(reversed([])).toEqual([]);
    });

    it('Returns an array with one item if the input is an array with one item', () => {
      expect(reversed([1])).toEqual([1]);
    });

    it('Does not change the original array', () => {
      const array = [1, 2, 3, 4, 5];
      reversed(array);
      expect(array).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('findLastIndex', () => {
    it('Returns the index of the last item that matches the predicate', () => {
      const array = ['a', 'b', 'c', 'd', 'e'];
      expect(findLastIndex(array, (value) => value === 'a' || value === 'd')).toBe(3);
      expect(findLastIndex(array, (value) => value === 'b')).toBe(1);
    });

    it('Returns 0 if only the first item matches the predicate', () => {
      const array = ['a', 'b', 'c', 'd', 'e'];
      expect(findLastIndex(array, (value) => value === 'a')).toBe(0);
    });

    it('Returns -1 if no item matches the predicate', () => {
      const array = [1, 2, 3, 4, 5];
      expect(findLastIndex(array, (value) => value > 5)).toBe(-1);
    });

    it('Returns -1 if the array is empty', () => {
      expect(findLastIndex([], (value) => value > 2)).toBe(-1);
    });
  });
});
