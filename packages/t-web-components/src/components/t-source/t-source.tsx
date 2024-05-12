import { Component, Host, h, Prop } from '@stencil/core';
import { TSourceItem } from '../../types/TSourceItem';
import { formatAuthors } from './t-source-utils';

@Component({
  tag: 't-source',
  styleUrl: 't-source.css',
  shadow: true,
})
export class TSource {

  @Prop() source: TSourceItem;

  render() {

    const { authors, date, title, journal, volume, issue, pageStart, pageEnd } = this.source;

    return (
      <Host>
        {(authors || date?.year) && (
          <span class='authors-time'>
            {this.source.authors && <span class='authors'>{formatAuthors(this.source.authors)}</span>}
            {authors && date?.year && ' '}
            {this.source.date?.year && <span class='time'>({this.source.date.year})</span>}
            {'. '}
          </span>
        )}
        {title && <cite class='title'>{this.source.title}{'. '}</cite>}
        {journal && <span class='journal'>{this.source.journal}</span>}
        {volume && <span class='volume'>{this.source.volume}</span>}
        {issue && <span class='issue'>({this.source.issue})</span>}
        {pageStart && this.source.pageEnd && <span class='pages'>{this.source.pageStart}-{this.source.pageEnd}</span>}
      </Host>
    );
  }
}
