import { Component, Element, h, Method, Prop } from '@stencil/core';
import { TSourceItemList } from '../../types/TSourceItemList';
import { orderObject } from '../../utils/objectUtils';
import { uniqueItems } from '../../utils/arrayUtils';
import defaultText, { TArticleText } from './t-article.text';

@Component({
  tag: 't-article',
  styleUrl: 't-article.css',
  scoped: true,
})
export class TArticle {

  @Prop() sources: TSourceItemList = {};
  @Prop() heading: string;
  @Prop() text: TArticleText = defaultText;
  @Prop() publisheddate?: string;

  @Element() element: HTMLElement;

  @Method() async getSourceOrder(): Promise<string[]> {
    await customElements.whenDefined('t-source-ref');
    const sourceRefElements: NodeListOf<HTMLTSourceRefElement> = this.element.querySelectorAll('t-source-ref');
    const sourceIds = await Promise.all(Array.from(sourceRefElements).map(sourceRefElement => {
      return sourceRefElement.getSourceId();
    }));
    return uniqueItems(sourceIds);
  }

  @Method() async getSourceList(): Promise<HTMLTSourceListElement> {
    await customElements.whenDefined('t-source-list');
    return this.element.shadowRoot.querySelector('t-source-list');
  }

  render() {
    return (
      <article>
        <t-heading level={1}>
          {this.heading}
          {this.publisheddate && <p
            slot='note'
            innerHTML={this.text.published(new Date(Date.parse(this.publisheddate)))}
          />}
        </t-heading>
        <slot></slot>
        {this.sources && !!Object.keys(this.sources).length && (
          <footer>
            <t-heading level={2}>{this.text.sourcesHeading}</t-heading>
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
      if (sourceOrder.length && sourceList) {
        sourceList.sources = orderedSources;
      }
    });
  }
}
