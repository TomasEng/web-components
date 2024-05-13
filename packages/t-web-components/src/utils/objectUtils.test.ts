import { describe } from 'node:test';
import { orderObject } from './objectUtils';

describe('objectUtils', () => {
  describe('orderObject', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const orderedObj = orderObject(obj, ['c', 'a', 'b']);

    it('Returns an object with the keys in the specified order', () => {
      expect(Object.keys(orderedObj)).toEqual(['c', 'a', 'b']);
    });

    it('Does not change the values', () => {
      expect(orderedObj).toEqual(obj);
    });
  });
});
