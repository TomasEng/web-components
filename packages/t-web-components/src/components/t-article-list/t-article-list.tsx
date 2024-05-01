import { Component, h, Prop } from '@stencil/core';
import { ComponentHue } from '../../types/ComponentHue';
import { TArticleListItem } from './TArticleListItem';

@Component({
  tag: 't-article-list',
  styleUrl: 't-article-list.css',
  shadow: true,
})
export class TArticleList {

  @Prop() hue: ComponentHue = 0;
  @Prop() items: TArticleListItem[] = [];

  render() {
    return <internal-style-provider hueOffsetInTurns={this.hue}>
      <ul class='t-article-list'>
        {this.items.map(item => <Item item={item} />)}
      </ul>
    </internal-style-provider>;
  }
}

const Item = ({ item }: { item: TArticleListItem }) => {
  return <li>
    <a href={item.href} title={item.title}>
      <span class='item-title'>{item.title}</span>
      <span class='item-intro'>{item.intro}</span>
      <span class='item-date'>{item.date?.toLocaleDateString()}</span>
    </a>
  </li>;
}
