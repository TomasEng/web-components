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
  const {href, title, intro, date, ...rest} = item;
  return <li key={href}>
    <a href={href} title={title} {...rest}>
      <t-box>
        <span class='item-title'>{title}</span>
        <span class='item-intro'>{intro}</span>
        <span class='item-date'>{date?.toLocaleDateString()}</span>
      </t-box>
    </a>
  </li>;
}
