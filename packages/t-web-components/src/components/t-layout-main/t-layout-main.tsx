import { Component, h, Prop, State } from '@stencil/core';
import { ChevronRightIcon } from '../../icons/ChevronRightIcon';
import { TLayoutMainText } from './t-layout-main.text';
import defaultText from './t-layout-main.text';

@Component({
  tag: 't-layout-main',
  styleUrl: 't-layout-main.css',
  shadow: true,
})
export class TLayoutMain {

  @State() leftbarOpen = false;

  @Prop() stickyLeftbar: boolean = false;
  @Prop() text: TLayoutMainText = defaultText;

  toggleLeftbar() {
    this.leftbarOpen = !this.leftbarOpen;
  }

  render() {
    const stateClass = this.leftbarOpen ? 'leftbar-open' : 'leftbar-closed';

    return (
      <main class={`main ${stateClass}`}>
        <div class={`leftbar${this.stickyLeftbar ? ' sticky' : ''}`}>
          <div class="leftbar-content">
            <slot name="leftbar"/>
          </div>
          <button
            class="leftbar-toggle"
            onClick={() => this.toggleLeftbar()}
            title={this.leftbarOpen ? this.text.collapseSidebar : this.text.expandSidebar}
          >
            <ChevronRightIcon class='chevron'/>
          </button>
        </div>
        <div class="content">
          <slot name='content'/>
        </div>
      </main>
    );
  }
}
