import { Component, h, Prop, Element } from '@stencil/core';
import { ComponentHue } from '../../types/ComponentHue';
import { TArticleListItem } from './TArticleListItem';
import { setBaseColour } from '../../utils/componentUtils';

@Component({
  tag: 't-article-list',
  styleUrl: 't-article-list.css',
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
      <ul class='t-article-list'>
        {this.items.map(item => <Item item={item}/>)}
      </ul>
    );
  }
}

const Item = ({ item }: { item: TArticleListItem }) => {
  return <li key={item.href}>
    <a href={item.href} title={item.title}>
      <span class='item-title'>{item.title}</span>
      <span class='item-intro'>{item.intro}</span>
      <span class='item-date'>{item.date?.toLocaleDateString()}</span>
    </a>
  </li>;
}
