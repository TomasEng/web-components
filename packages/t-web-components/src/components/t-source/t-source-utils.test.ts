import { Author } from '../../types/TSourceItem';
import { formatAuthor, formatAuthors, formatPages } from './t-source-utils';
import { describe } from 'node:test';

describe('t-source-utils', () => {
  describe('formatAuthor', () => {
    it('Returns the string directly if the input is a string', () => {
      expect(formatAuthor('John Doe')).toBe('John Doe');
    });

    it('Returns the author name with forename initials if the input is an object', () => {
      const author: Author = { forename: 'John', surname: 'Doe' };
      expect(formatAuthor(author)).toBe('J. Doe');
    });

    it('Keeps the author name as is if the forename is already an initial', () => {
      const author: Author = { forename: 'J.', surname: 'Doe' };
      expect(formatAuthor(author)).toBe('J. Doe');
    });

    it('Returns the name correctly when there are multiple forenames', () => {
      const author = { forename: 'Albus P. W. Brian', surname: 'Dumbledore' };
      expect(formatAuthor(author)).toBe('A. P. W. B. Dumbledore');
    });
  });

  describe('formatAuthors', () => {
    it('Returns an empty string if the input is an empty array', () => {
      expect(formatAuthors([])).toBe('');
    });

    it('Returns the author name if the input is an array with one author', () => {
      const author: Author = { forename: 'John', surname: 'Doe' };
      expect(formatAuthors([author])).toBe('J. Doe');
    });

    it('Returns the author names separated by an ampersand sign if the input is an array with two authors', () => {
      const authors: Author[] = [
        { forename: 'John', surname: 'Doe' },
        { forename: 'Jane', surname: 'Doe' },
      ];
      expect(formatAuthors(authors)).toBe('J. Doe & J. Doe');
    });

    it('Returns the author names separated by commas and an ampersand sign if the input is an array with three authors', () => {
      const authors: Author[] = [
        { forename: 'John', surname: 'Doe' },
        'Test',
        { forename: 'Jane', surname: 'Doe' },
        { forename: 'Jack', surname: 'Doe' },
      ];
      expect(formatAuthors(authors)).toBe('J. Doe, Test, J. Doe & J. Doe');
    });
  });

  describe('formatPages', () => {
    it('Returns an empty string if both pageStart and pageEnd are undefined', () => {
      expect(formatPages()).toBe('');
    });

    it('Returns the page number if pageStart and pageEnd are the same', () => {
      expect(formatPages(5, 5)).toBe('5');
    });

    it('Returns the page range if pageStart and pageEnd are different', () => {
      expect(formatPages(5, 10)).toBe('5-10');
    });

    it('Returns the pageStart if pageEnd is undefined', () => {
      expect(formatPages(5)).toBe('5');
    });

    it('Returns the pageEnd if pageStart is undefined', () => {
      expect(formatPages(undefined, 10)).toBe('10');
    });
  });
});
