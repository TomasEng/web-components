import { Component, h, Prop } from '@stencil/core';
import { TSourceItemList } from '../../types/TSourceItemList';
import { SOURCE_ID_PREFIX } from '../../constants';

@Component({
  tag: 't-source-list',
  styleUrl: 't-source-list.css',
})
export class TSourceList {

  @Prop() sources: TSourceItemList = {};

  render() {
    return (
      <ol>
        {Object.keys(this.sources).map(id => (
          <li id={`${SOURCE_ID_PREFIX}${id}`}>
            <t-source source={this.sources[id]}/>
          </li>
        ))}
      </ol>
    );
  }
}
