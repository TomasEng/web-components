export type TSourceItem = {
  articleTitle?: string;
  authors: Author[];
  bookTitle?: string;
  city?: string;
  date?: SourceDate;
  doi?: string;
  isbn?: string;
  issue?: number;
  journal?: string;
  pageEnd?: number;
  pageStart?: number;
  publisher?: string;
  retrievedDate?: SourceDate;
  title?: string;
  url?: string;
  volume?: number;
  websiteTitle?: string;
};

export type Author = Person | Organisation;

type Person = {
  forename: string;
  surname: string;
};

type Organisation = string;

type SourceDate = { year: number; month?: number; day?: number; };


