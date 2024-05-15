import { describe } from 'node:test';
import { orderObject, stringifyObjectLines } from './objectUtils';
import { expect } from '@playwright/test';

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

  describe('stringifyObjectLines', () => {
    it('Stringifies a string', () => {
      expect(stringifyObjectLines('test')).toEqual(['"test"']);
    });

    it('Stringifies a number', () => {
      expect(stringifyObjectLines(42)).toEqual(['42']);
    });

    it('Stringifies a boolean', () => {
      expect(stringifyObjectLines(true)).toEqual(['true']);
    });

    it('Stringifies an undefined value', () => {
      expect(stringifyObjectLines(undefined)).toEqual(['undefined']);
    });

    it('Stringifies a function', () => {
      const func = () => console.log('test');
      expect(stringifyObjectLines(func)).toEqual(["() => console.log('test')"]);
    });

    it('Stringifies a function with multiple lines', () => {
      const func = () => {
        console.log('test');
        console.log('test');
      };
      expect(stringifyObjectLines(func)).toHaveLength(4);
    });

    it('Stringifies an object with a string property', () => {
      const obj = { prop: 'test' };
      expect(stringifyObjectLines(obj)).toEqual([
        '{',
        '  prop: "test"',
        '}'
      ]);
    });

    it('Stringifies an object with a number property', () => {
      const obj = { prop: 42 };
      expect(stringifyObjectLines(obj)).toEqual([
        '{',
        '  prop: 42',
        '}'
      ]);
    });

    it('Stringifies an object with a boolean property', () => {
      const obj = { prop: true };
      expect(stringifyObjectLines(obj)).toEqual([
        '{',
        '  prop: true',
        '}'
      ]);
    });

    it('Stringifies an object with a function property', () => {
      const obj = { prop: () => console.log('test') };
      expect(stringifyObjectLines(obj)).toEqual([
        '{',
        '  prop: () => console.log(\'test\')',
        '}'
      ]);
    });

    it('Stringifies an object with an object property', () => {
      const obj = { prop: { subProp: 'test' } };
      expect(stringifyObjectLines(obj)).toEqual([
        '{',
        '  prop: {',
        '    subProp: "test"',
        '  }',
        '}'
      ]);
    });

    it('Stringifies a null object', () => {
      expect(stringifyObjectLines(null)).toEqual(['null']);
    });

    it('Stringifies an array', () => {
      const obj = [1, 2, 3];
      expect(stringifyObjectLines(obj)).toEqual([
        '[',
        '  1,',
        '  2,',
        '  3',
        ']'
      ]);
    });

    it('Stringifies a complex object', () => {
      const obj = {
        prop1: 'test',
        prop2: 42,
        prop3: true,
        prop4: () => console.log('test'),
        prop5: {
          subProp1: 'test',
          subProp2: {
            subSubProp: 'test'
          },
          subProp3: () => console.log('test'),
          subProp4: [
            { value: null },
            true
          ]
        }
      };
      expect(stringifyObjectLines(obj)).toEqual([
        '{',
        '  prop1: "test",',
        '  prop2: 42,',
        '  prop3: true,',
        '  prop4: () => console.log(\'test\'),',
        '  prop5: {',
        '    subProp1: "test",',
        '    subProp2: {',
        '      subSubProp: "test"',
        '    },',
        '    subProp3: () => console.log(\'test\'),',
        '    subProp4: [',
        '      {',
        '        value: null',
        '      },',
        '      true',
        '    ]',
        '  }',
        '}'
      ]);
    });
  });
});
