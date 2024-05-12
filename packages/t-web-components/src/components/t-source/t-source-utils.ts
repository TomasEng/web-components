import { Author } from '../../types/TSourceItem';

export const formatAuthor = (author: Author): string => {
  if (typeof author === 'string') return author;
  const forenames = author.forename.split(' ');
  const initials = forenames.map(name => name.charAt(0) + '.');
  return `${initials.join(' ')} ${author.surname}`;
}

export const formatAuthors = (authors: Author[]): string => {
  if (authors.length === 0) return '';
  if (authors.length === 1) return formatAuthor(authors[0]);
  if (authors.length === 2) return authors.map(formatAuthor).join(' & ');
  return authors.slice(0, -1).map(formatAuthor).join(', ') + ' & ' + formatAuthor(authors[authors.length - 1]);
}
