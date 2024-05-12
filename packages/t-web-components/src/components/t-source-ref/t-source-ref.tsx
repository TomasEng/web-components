import { Component, Host, h, Prop, Element } from '@stencil/core';
import { SOURCE_ID_PREFIX } from '../../constants';

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

    const sourceIds = [];
    for (let i = 0; i < sourceRefElements.length; i++) {
      const sourceId = sourceRefElements[i].sourceId;
      if (!sourceIds.includes(sourceId)) {
        sourceIds.push(sourceId);
      }
      if (sourceId === this.sourceId) {
        break;
      }
    }
    const sourceNumber = sourceIds.length;

    return (
      <Host>
        <t-tooltip>
          <t-link slot='trigger' href={`#${SOURCE_ID_PREFIX}${this.sourceId}`}>[{sourceNumber}]</t-link>
          <t-source
            slot='content'
            source={article.sources[this.sourceId]}
          />
        </t-tooltip>
        <slot></slot>
      </Host>
    );
  }
}
