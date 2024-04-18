import { Component, h, Prop, State } from '@stencil/core';
import { ChevronRightIcon } from '../../icons/ChevronRightIcon';

@Component({
  tag: 't-layout-main',
  styleUrl: 't-layout-main.css',
})
export class TLayoutMain {

  @State() leftbarOpen = false;

  @Prop() stickyLeftbar: boolean = false;

  toggleLeftbar() {
    this.leftbarOpen = !this.leftbarOpen;
  }

  render() {
    const stateClass = this.leftbarOpen ? 'leftbar-open' : 'leftbar-closed';

    return <internal-style-provider>
      <main class={`main ${stateClass}`}>
        <div class={`leftbar${this.stickyLeftbar ? ' sticky' : ''}`}>
          <div class="leftbar-content">
            <slot name="leftbar" />
          </div>
          <button
            class="leftbar-toggle"
            onClick={() => this.toggleLeftbar()}
            title={this.leftbarOpen ? 'Lukk sidepanel' : 'Åpne sidepanel'}
          >
            <ChevronRightIcon class='chevron'/>
          </button>
        </div>
        <div class="content">
          <slot />
        </div>
      </main>
    </internal-style-provider>;
  }
}
