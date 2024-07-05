import { Component, Host, h, Prop, Fragment } from '@stencil/core';
import { TSourceItem } from '../../types/TSourceItem';
import { formatAuthors, formatPages } from './t-source-utils';
import { TSourceText } from './t-source.text';
import defaultText from './t-source.text';

@Component({
  tag: 't-source',
  styleUrl: 't-source.css',
  shadow: true,
})
export class TSource {

  @Prop() source: TSourceItem;
  @Prop() text: TSourceText = defaultText;

  render() {

    const {
      articleTitle,
      authors,
      bookTitle,
      city,
      date,
      doi,
      issue,
      journal,
      pageEnd,
      pageStart,
      publisher,
      retrievedDate,
      title,
      url,
      volume,
      websiteTitle,
    } = this.source || {}

    return (
      <Host>
        <AuthorAndYearInfo authors={authors} date={date}/>
        {title && !websiteTitle && <cite class="title">{title}{'. '}</cite>}
        {bookTitle && <cite class="bookTitle">{bookTitle}{'. '}</cite>}
        <ArticleTitle articleTitle={articleTitle} websiteTitle={websiteTitle} journal={journal}/>
        <WebsiteTitle articleTitle={articleTitle} websiteTitle={websiteTitle}/>
        <JournalInfo
          doi={doi}
          issue={issue}
          journal={journal}
          pageEnd={pageEnd}
          pageStart={pageStart}
          pagesText={this.text.pages}
          volume={volume}
        />
        <PlaceAndPublisherInfo city={city} publisher={publisher}/>
        <RetrievedInfo url={url} retrievedDate={retrievedDate}/>
      </Host>
    );
  }
}

type ArticleTitleProps = Pick<TSourceItem, 'articleTitle' | 'websiteTitle' | 'journal'>;

const ArticleTitle = ({ articleTitle, websiteTitle }: ArticleTitleProps) => {
  if (websiteTitle) {
    return <cite class="webArticleTitle">«{articleTitle}»{'. '}</cite>;
  } else if (articleTitle) {
    return <cite class="articleTitle">{articleTitle}{'. '}</cite>;
  } else {
    return null;
  }
};

type WebsiteTitleProps = Pick<TSourceItem, 'articleTitle' | 'websiteTitle'>;

const WebsiteTitle = ({ articleTitle, websiteTitle }: WebsiteTitleProps) => {
  if (articleTitle && websiteTitle) {
    return <cite class="websiteTitle">I: {websiteTitle}{'. '}</cite>;
  } else if (websiteTitle) {
    return <cite class="websiteTitle">{websiteTitle}{'. '}</cite>;
  } else {
    return null;
  }
};

type AuthorAndYearInfoProps = Pick<TSourceItem, 'authors' | 'date'>;

const AuthorAndYearInfo = ({authors, date}: AuthorAndYearInfoProps) => {
  if (authors || date?.year) {
    return (
      <>
        <span class="authors-time">
          {authors && <span class="authors">{formatAuthors(authors)}</span>}
          {authors && date?.year && ' '}
          {date?.year && <span class="time">({date.year})</span>}
          {'.'}
        </span>
        {' '}
      </>
    );
  }
  return null;
};

type JournalInfoProps = Pick<TSourceItem, 'journal' | 'volume' | 'issue' | 'pageStart' | 'pageEnd' | 'doi'> & {
  pagesText: (pages: string) => string;
};

const JournalInfo = ({ journal, volume, issue, pageEnd, pageStart, doi, pagesText }: JournalInfoProps) => {
  const pages = formatPages(pageStart, pageEnd);
  if (!journal) return null;
  return (
    <>
      <span>
        <span class="journal">{journal}</span>
        {(volume || issue) && <>{', '}<VolumeAndIssue volume={volume} issue={issue} /></>}
        {pages && <>{', '}<span class="pages">{pagesText(pages)}</span></>}
        {doi && <>{', '}
          <t-link href={'http://doi.org/' + doi} target='_blank'>doi:{doi}</t-link>
        </>}
        {'.'}
      </span>
      {' '}
    </>
  );
};

const VolumeAndIssue = ({ volume, issue }: { volume?: number; issue?: number }) => {
  return (
    <span>
      {volume && <span class="volume">{volume}</span>}
      {issue && <span class="issue">({issue})</span>}
    </span>
  );
};

type PlaceAndPublisherInfoProps = Pick<TSourceItem, 'city' | 'publisher'>;

const PlaceAndPublisherInfo = ({city, publisher}: PlaceAndPublisherInfoProps) => {
  if (city || publisher) {
    return (
      <>
        <span>
          {city && <span>{city}</span>}
          {city && publisher && ': '}
          {publisher && <span>{publisher}</span>}
          {'.'}
        </span>
        {' '}
      </>
    );
  }
  return null;
}

type RetrievedInfoProps = Pick<TSourceItem, 'url' | 'retrievedDate'>;

const RetrievedInfo = ({retrievedDate, url}: RetrievedInfoProps) => {
  let dateString = '';
  if (retrievedDate && retrievedDate.year) {
    const { year } = retrievedDate;
    const monthIndex = retrievedDate?.month ? retrievedDate.month - 1 : 0;
    const day = retrievedDate?.day || 1;
    const date = new Date(year, monthIndex, day);
    dateString = Intl.DateTimeFormat(navigator.language).format(date);
  }
  if (dateString && url) {
    return <span>Lokalisert <time>{dateString}</time> på <t-link href={url} target='_blank'>{url}</t-link>.</span>
  }
  if (dateString) {
    return <span>Lokalisert <time>{dateString}</time>.</span>
  }
  if (url) {
    return <span>Lokalisert på <t-link href={url} target='_blank'>{url}</t-link>.</span>
  }
  return null;
};
