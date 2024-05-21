import { r as registerInstance, h, e as Host, F as Fragment } from './index-d1462df2.js';

const formatAuthor = (author) => {
    if (typeof author === 'string')
        return author;
    const forenames = author.forename.split(' ');
    const initials = forenames.map(name => name.charAt(0) + '.');
    return `${initials.join(' ')} ${author.surname}`;
};
const formatAuthors = (authors) => {
    if (authors.length === 0)
        return '';
    if (authors.length === 1)
        return formatAuthor(authors[0]);
    if (authors.length === 2)
        return authors.map(formatAuthor).join(' & ');
    return authors.slice(0, -1).map(formatAuthor).join(', ') + ' & ' + formatAuthor(authors[authors.length - 1]);
};
const formatPages = (pageStart, pageEnd) => {
    if (pageStart !== undefined && pageEnd !== undefined)
        return pageStart === pageEnd ? pageStart.toString() : `${pageStart}-${pageEnd}`;
    if (pageStart)
        return pageStart.toString();
    if (pageEnd)
        return pageEnd.toString();
    return '';
};

const tSourceCss = ":host{display:block}.journal{font-style:italic}.articleTitle{font-style:normal}.bookTitle,.title{font-style:italic}";

const TSource = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.source = undefined;
        this.pagesText = pages => `s. ${pages}`;
    }
    render() {
        const { articleTitle, authors, bookTitle, city, date, doi, issue, journal, pageEnd, pageStart, publisher, retrievedDate, title, url, volume, } = this.source || {};
        return (h(Host, { key: '4e21eff5127be172c75163db7d0958f810e3d390' }, h(AuthorAndYearInfo, { key: '523e1c291fcf0e9506fb164f5d1915277ca5453f', authors: authors, date: date }), title && h("cite", { class: "title" }, title, '. '), bookTitle && h("cite", { class: "bookTitle" }, bookTitle, '. '), articleTitle && h("cite", { class: "articleTitle" }, articleTitle, '. '), h(JournalInfo, { key: '2a072071126a69506f064e4cd299d03895fb5889', doi: doi, issue: issue, journal: journal, pageEnd: pageEnd, pageStart: pageStart, pagesText: this.pagesText, volume: volume }), h(PlaceAndPublisherInfo, { key: 'cddc1e36f0eb02240b139cccb818cb57487220d9', city: city, publisher: publisher }), h(RetrievedInfo, { key: '06082d22de6f1aad127657f6ae18a218c0eff4cc', url: url, retrievedDate: retrievedDate })));
    }
};
const AuthorAndYearInfo = ({ authors, date }) => {
    if (authors || (date === null || date === void 0 ? void 0 : date.year)) {
        return (h(Fragment, null, h("span", { class: "authors-time" }, authors && h("span", { class: "authors" }, formatAuthors(authors)), authors && (date === null || date === void 0 ? void 0 : date.year) && ' ', (date === null || date === void 0 ? void 0 : date.year) && h("span", { class: "time" }, "(", date.year, ")"), '.'), ' '));
    }
    return null;
};
const JournalInfo = ({ journal, volume, issue, pageEnd, pageStart, doi, pagesText }) => {
    const pages = formatPages(pageStart, pageEnd);
    if (!journal)
        return null;
    return (h(Fragment, null, h("span", null, h("span", { class: "journal" }, journal), (volume || issue) && h(Fragment, null, ', ', h(VolumeAndIssue, { volume: volume, issue: issue })), pages && h(Fragment, null, ', ', h("span", { class: "pages" }, pagesText(pages))), doi && h(Fragment, null, ', ', h("t-link", { href: 'http://doi.org/' + doi, target: '_blank' }, "doi:", doi)), '.'), ' '));
};
const VolumeAndIssue = ({ volume, issue }) => {
    return (h("span", null, volume && h("span", { class: "volume" }, volume), issue && h("span", { class: "issue" }, "(", issue, ")")));
};
const PlaceAndPublisherInfo = ({ city, publisher }) => {
    if (city || publisher) {
        return (h(Fragment, null, h("span", null, city && h("span", null, city), city && publisher && ': ', publisher && h("span", null, publisher), '.'), ' '));
    }
    return null;
};
const RetrievedInfo = ({ retrievedDate, url }) => {
    let dateString = '';
    if (retrievedDate && retrievedDate.year) {
        const { year } = retrievedDate;
        const monthIndex = (retrievedDate === null || retrievedDate === void 0 ? void 0 : retrievedDate.month) ? retrievedDate.month - 1 : 0;
        const day = (retrievedDate === null || retrievedDate === void 0 ? void 0 : retrievedDate.day) || 1;
        const date = new Date(year, monthIndex, day);
        dateString = Intl.DateTimeFormat(navigator.language).format(date);
    }
    if (dateString && url) {
        return h("span", null, "Lokalisert ", h("time", null, dateString), " p\u00E5 ", h("t-link", { href: url, target: '_blank' }, url), ".");
    }
    if (dateString) {
        return h("span", null, "Lokalisert ", h("time", null, dateString), ".");
    }
    if (url) {
        return h("span", null, "Lokalisert p\u00E5 ", h("t-link", { href: url, target: '_blank' }, url), ".");
    }
    return null;
};
TSource.style = tSourceCss;

export { TSource as t_source };

//# sourceMappingURL=t-source.entry.js.map