import { Component, h, Prop, State } from '@stencil/core';
import { ChevronRightIcon } from '../../icons/ChevronRightIcon';
import defaultText, { TLayoutText } from './t-layout.text';
import { CrossIcon } from '../../icons/CrossIcon';
import { MenuToggleIcon } from '../../icons/MenuToggleIcon';

@Component({
  tag: 't-layout',
  styleUrls: ['t-layout.css', 't-layout-main.css', 't-layout-header.css'],
  shadow: true,
})
export class TLayout {

  @Prop() sitetitle: string;
  @Prop() stickyleftbar: boolean = false;
  @Prop() text: TLayoutText = defaultText;

  @State() leftbarOpen: boolean = false;
  @State() navOpen: boolean = false;

  expandNav() {
    this.navOpen = true;
  }

  collapseNav() {
    this.navOpen = false;
  }

  toggleLeftbar() {
    this.leftbarOpen = !this.leftbarOpen;
  }

  render() {
    const stateClass = this.leftbarOpen ? 'leftbar-open' : 'leftbar-closed';

    return <div class='wrapper'>
      <div class='layout'>
        <header class={this.navOpen ? 'nav-open' : 'nav-closed'}>
          <div class="title">
            <slot name='logo'/>
            {this.sitetitle}
          </div>
          <div class="collapsible-content">
            <div class="collapsible-content-inner">
              <slot name='nav'/>
              <div class="toolbar">
                <t-mode-switcher label="Fargemodus"/>
              </div>
            </div>
          </div>
          <div class="nav-toggle" onClick={() => this.navOpen ? this.collapseNav() : this.expandNav()}>
            <t-button buttonAttributes={{ title: this.navOpen ? 'Lukk' : 'Meny' }}>
              {this.navOpen ? <CrossIcon /> : <MenuToggleIcon />}
            </t-button>
          </div>
        </header>
        <main class={`main ${stateClass}`}>
          <div class={`leftbar${this.stickyleftbar ? ' sticky' : ''}`}>
            <div class="leftbar-content">
              <slot name="leftbar" />
            </div>
            <button
              class="leftbar-toggle"
              onClick={() => this.toggleLeftbar()}
              title={this.leftbarOpen ? this.text.collapseSidebar : this.text.expandSidebar}
            >
              <ChevronRightIcon class="chevron" />
            </button>
          </div>
          <div class="content">
            <slot name="content" />
          </div>
        </main>
      </div>
    </div>;
  }
}
