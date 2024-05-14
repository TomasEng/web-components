import { describe } from 'node:test';
import { kebabToCamel, kebabToPascal } from './stringUtils';

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
});
