import { describe } from 'node:test';
import { camelToPascal, collapseWhitespace, kebabToCamel, kebabToPascal } from './stringUtils';

describe('stringUtils', () => {
  describe('kebabToCamel', () => {
    it('Converts kebab case to camel case', () => {
      expect(kebabToCamel('kebab-case')).toBe('kebabCase');
    });

    it('Converts kebab case with multiple dashes to camel case', () => {
      expect(kebabToCamel('kebab-case-example')).toBe('kebabCaseExample');
    });
  });

  describe('kebabToPascal', () => {
    it('Converts kebab case to pascal case', () => {
      expect(kebabToPascal('kebab-case')).toBe('KebabCase');
    });

    it('Converts kebab case with multiple dashes to pascal case', () => {
      expect(kebabToPascal('kebab-case-example')).toBe('KebabCaseExample');
    });
  });

  describe('camelToPascal', () => {
    it('Converts camel case to pascal case', () => {
      expect(camelToPascal('camelCase')).toBe('CamelCase');
    });

    it('Converts camel case with multiple words to pascal case', () => {
      expect(camelToPascal('camelCaseExample')).toBe('CamelCaseExample');
    });
  });

  describe('collapseWhitespace', () => {
    it('Collapses multiple whitespaces to a single space character', () => {
      expect(collapseWhitespace('  test\n  test  ')).toBe(' test test ');
    });
  });
});
