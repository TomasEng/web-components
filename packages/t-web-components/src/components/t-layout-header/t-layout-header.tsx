import { Component, h, Prop, State, Element } from '@stencil/core';
import { TNavMenuItem } from './TNavMenuItem';
import { MenuToggleIcon } from '../../icons/MenuToggleIcon';
import { CrossIcon } from '../../icons/CrossIcon';

@Component({
  tag: 't-layout-header',
  styleUrl: 't-layout-header.css',
})
export class TLayoutHeader {

  @Element() el: HTMLElement;

  @Prop() siteTitle: string;
  @Prop() navItems: TNavMenuItem[] = [];

  @State() navOpen: boolean = false;

  expandNav() {
    this.navOpen = true;
  }

  collapseNav() {
    this.navOpen = false;
  }

  render() {
    return <header class={this.navOpen ? 'nav-open' : 'nav-closed'}>
      <div class="title">{this.siteTitle}</div>
      <div class="collapsible-content">
        <div class="collapsible-content-inner">
          <Navbar items={this.navItems}/>
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
    </header>;
  }
}

type NavBarProps = {
  items: TNavMenuItem[];
};

const Navbar = ({ items }: NavBarProps) => {
  return (
    <nav class="nav">
      <ul>
        {items.map(item => (
          <li class={item.open ? 'open' : ''} key={item.href}>
            <a href={item.href}>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
