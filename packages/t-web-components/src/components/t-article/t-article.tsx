import { Component, Element, h, Method, Prop } from '@stencil/core';
import { TSourceItemList } from '../../types/TSourceItemList';
import { orderObject } from '../../utils/objectUtils';
import { uniqueItems } from '../../utils/arrayUtils';

@Component({
  tag: 't-article',
  styleUrl: 't-article.css',
})
export class TArticle {

  @Prop() sources: TSourceItemList = {};
  @Prop() sourcesHeading: string = 'Kilder';
  @Prop() heading: string;

  @Element() element: HTMLElement;

  @Method() async getSourceOrder() {
    await customElements.whenDefined('t-source-ref');
    const sourceRefElements: NodeListOf<HTMLTSourceRefElement> = this.element.querySelectorAll('t-source-ref');
    const sourceIds = await Promise.all(Array.from(sourceRefElements).map(sourceRefElement => {
      return sourceRefElement.getSourceId();
    }));
    return uniqueItems(sourceIds);
  }

  render() {
    return (
      <article>
        <t-heading level={1}>{this.heading}</t-heading>
        <slot></slot>
        {this.sources && (
          <footer>
            <t-heading level={2}>{this.sourcesHeading}</t-heading>
            <t-source-list sources={{}} />
          </footer>
        )}
      </article>
    );
  }

  componentDidRender() {
    this.getSourceOrder().then(sourceOrder => {
      const orderedSources = orderObject(this.sources, sourceOrder);
      const sourceList = this.element.querySelector('t-source-list');
      if (sourceList) {
        sourceList.sources = orderedSources;
      }
    });
  }
}
