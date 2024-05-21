import { Component, Host, h, Prop, Element, Method } from '@stencil/core';
import { SOURCE_ID_PREFIX } from '../../constants';
import { findUniqueIndex, uniqueItems } from '../../utils/arrayUtils';
import { TSourceItemList } from '../../types/TSourceItemList';

@Component({
  tag: 't-source-ref',
  styleUrl: 't-source-ref.css',
  shadow: true,
})
export class TSourceRef {

  @Prop() sourceId: string;

  @Element() element: HTMLElement;

  @Method() async getSourceId() {
    await customElements.whenDefined('t-source-ref');
    return this.sourceId ?? this.element.getAttribute('sourceid');
  }

  get tLink(): HTMLTLinkElement {
    return this.element.shadowRoot.querySelector('t-link');
  }

  get tSource(): HTMLTSourceElement {
    return this.element.shadowRoot.querySelector('t-source');
  }

  render() {
    const article: HTMLTArticleElement = this.element.closest('t-article');

    return (
      <Host>
        <t-tooltip>
          <sup slot="trigger">
            <t-link href={`#${SOURCE_ID_PREFIX}${this.sourceId}`}/>
          </sup>
          <t-source
            slot="content"
            source={article.sources[this.sourceId]}
          />
        </t-tooltip>
      </Host>
    );
  }

  componentDidRender() {
    this.getArticle().then(async article => {
      const sourceOrder = await article.getSourceOrder();
      const sourceId = await this.getSourceId();
      const sourceNumber = findUniqueIndex(sourceOrder, sourceId) + 1;
      const tSource: HTMLTSourceElement = this.tSource;
      tSource.source = article.sources[sourceId];
      const sourceRefLink: HTMLTLinkElement = this.tLink;
      sourceRefLink.innerText = `[${sourceNumber}]`;
      sourceRefLink.href = `#${SOURCE_ID_PREFIX}${sourceId}`;
    });
  }

  private async getArticle(): Promise<HTMLTArticleElement> {
    await customElements.whenDefined('t-article');
    return this.element.closest('t-article');
  }
}
