import { Component, Element, h, Prop } from '@stencil/core';
import { TSourceItemList } from '../../types/TSourceItemList';
import { orderObject } from '../../utils/objectUtils';
import { uniqueItems } from '../../utils/arrayUtils';

@Component({
  tag: 't-article',
  styleUrl: 't-article.css',
})
export class TArticle {

  @Prop() sources: TSourceItemList = {};

  @Element() element: HTMLElement;

  render() {
    const sourceRefElements: NodeListOf<HTMLTSourceRefElement> = this.element.querySelectorAll('t-source-ref');
    const sourceIds = Array.from(sourceRefElements).map(sourceRefElement => sourceRefElement.sourceId);
    const sourceOrder = uniqueItems(sourceIds);
    const orderedSources = orderObject(this.sources, sourceOrder);

    return (
      <article>
        <slot></slot>
        <footer>
          <t-source-list sources={orderedSources}/>
        </footer>
      </article>
    );
  }
}
