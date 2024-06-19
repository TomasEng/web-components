export type TArticleText = {
  sourcesHeading: string;
  published: (date: Date) => string;
}

const tArticleText: TArticleText = {
  sourcesHeading: 'Kilder',
  published:
    (date: Date) =>
      `Publisert <time>${date.toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' })}</time>`,
};

export default tArticleText;
