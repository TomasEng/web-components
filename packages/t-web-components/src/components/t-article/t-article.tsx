import { Component, Element, h, Prop } from '@stencil/core';
import { TSourceItemList } from '../../types/TSourceItemList';

@Component({
  tag: 't-article',
  styleUrl: 't-article.css',
})
export class TArticle {

  @Prop() sources: TSourceItemList = {};

  @Element() element: HTMLElement;

  render() {
    const sourceRefElements: NodeListOf<HTMLTSourceRefElement> = this.element.querySelectorAll('t-source-ref');
    const sourceOrder: string[] = [];
    for (let i = 0; i < sourceRefElements.length; i++) {
      const sourceId = sourceRefElements[i].sourceId;
      if (!sourceOrder.includes(sourceId)) {
        sourceOrder.push(sourceId);
      }
    }

    const orderedSources: TSourceItemList = {};
    sourceOrder.forEach((sourceId) => {
      orderedSources[sourceId] = this.sources[sourceId];
    });

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
