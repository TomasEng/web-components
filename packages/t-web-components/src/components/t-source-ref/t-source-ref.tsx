import { Component, Host, h, Prop, Element } from '@stencil/core';
import { SOURCE_ID_PREFIX } from '../../constants';
import { findUniqueIndex, uniqueItems } from '../../utils/arrayUtils';

@Component({
  tag: 't-source-ref',
  styleUrl: 't-source-ref.css',
  shadow: true,
})
export class TSourceRef {

  @Prop() sourceId: string;

  @Element() element: HTMLElement;

  render() {
    const article: HTMLTArticleElement = this.element.closest('t-article');
    const sourceRefElements: NodeListOf<HTMLTSourceRefElement> = article.querySelectorAll('t-source-ref');
    const sourceIds = Array.from(sourceRefElements).map(sourceRefElement => sourceRefElement.sourceId);
    const sourceNumber = findUniqueIndex(sourceIds, this.sourceId) + 1;

    return (
      <Host>
        <t-tooltip>
          <sup slot="trigger">
            <t-link href={`#${SOURCE_ID_PREFIX}${this.sourceId}`}>[{sourceNumber}]</t-link>
          </sup>
          <t-source
            slot="content"
            source={article.sources[this.sourceId]}
          />
        </t-tooltip>
        <slot></slot>
      </Host>
    );
  }
}
