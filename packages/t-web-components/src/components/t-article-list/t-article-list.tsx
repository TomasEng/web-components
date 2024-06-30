import { Component, h, Prop, Element } from '@stencil/core';
import { ComponentHue } from '../../types/ComponentHue';
import { TArticleListItem } from './TArticleListItem';
import { setBaseColour } from '../../utils/componentUtils';

@Component({
  tag: 't-article-list',
  styleUrls: [
    't-article-list.css',
    '../t-box/t-box.context.css',
    '../t-box-list/t-box-list.context.css'
  ],
  shadow: true,
})
export class TArticleList {

  @Element() element: HTMLTArticleListElement;

  @Prop() hueoffset: ComponentHue = 0;
  @Prop() items: TArticleListItem[] = [];

  connectedCallback() {
    setBaseColour(this.element, this.hueoffset);
  }

  render() {
    return (
      <t-box-list>
        {this.items.map(item => <Item item={item}/>)}
      </t-box-list>
    );
  }
}

const Item = ({ item }: { item: TArticleListItem }) => {
  return <li key={item.href}>
    <a href={item.href} title={item.title}>
      <t-box>
        <span class='item-title'>{item.title}</span>
        <span class='item-intro'>{item.intro}</span>
        <span class='item-date'>{item.date?.toLocaleDateString()}</span>
      </t-box>
    </a>
  </li>;
}
