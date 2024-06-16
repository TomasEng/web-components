import { Component, h, Prop } from '@stencil/core';
import { TSourceItemList } from '../../types/TSourceItemList';
import { SOURCE_ID_PREFIX } from '../../constants';
import { TSourceListText } from './t-source-list.text';
import defaultText from './t-source-list.text';

@Component({
  tag: 't-source-list',
  styleUrl: 't-source-list.css',
})
export class TSourceList {

  @Prop() sources: TSourceItemList = {};
  @Prop() text: TSourceListText = defaultText;

  render() {
    return (
      <ol>
        {Object.keys(this.sources).map(id => (
          <li id={`${SOURCE_ID_PREFIX}${id}`}>
            <t-source
              source={this.sources[id]}
              text={this.text}
            />
          </li>
        ))}
      </ol>
    );
  }
}
