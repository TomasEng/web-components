import { ComponentDemos } from '../../types/ComponentDemos';
import { TSourceItem } from '../../types/TSourceItem';

export const tSourceListTestData = {
  webArticleSource: {
    authors: [{ forename: 'Oddbjørn', surname: 'Engvold' }],
    articleTitle: 'Sola',
    retrievedDate: { year: 2024, month: 5, day: 12 },
    url: 'https://snl.no/Sola',
    journal: 'Store norske leksikon',
  } satisfies TSourceItem,
  scientificArticleSource: {
    authors: [
      { forename: 'Oliver H.', surname: 'Lowry' },
      { forename: 'Nina J.', surname: 'Rosebrough' },
      { forename: 'A. Lewis', surname: 'Farr' },
      { forename: 'Rose J.', surname: 'Randall' },
    ],
    articleTitle: 'Protein measurement with the Folin phenol reagent',
    journal: 'The Journal of Biological Chemistry',
    volume: 193,
    pageStart: 265,
    pageEnd: 275,
    date: { year: 1951 },
    issue: 1,
    doi: '10.1016/S0021-9258(19)52451-6',
  } satisfies TSourceItem,
  bookSource: {
    authors: [{ forename: 'Robert C.', surname: 'Martin' }],
    bookTitle: 'Clean Code - A Handbook of Agile Software Craftsmanship',
    publisher: 'Prentice Hall',
    date: { year: 2008, month: 8 },
    isbn: '9780136083252, 0136083250',
  } satisfies TSourceItem,
};

export const tSourceListDemo: ComponentDemos = {
  simple: {
    componentName: 't-source-list',
    props: {
      sources: {
        'snl-sola': tSourceListTestData.webArticleSource,
        'pmwtfpr': tSourceListTestData.scientificArticleSource,
        'clean-code': tSourceListTestData.bookSource,
      },
    }
  }
};
