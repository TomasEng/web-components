import { Component, h, Prop, State } from '@stencil/core';
import { TNavMenuItem } from './TNavMenuItem';
import { MenuToggleIcon } from '../../icons/MenuToggleIcon';
import { CrossIcon } from '../../icons/CrossIcon';

@Component({
  tag: 't-layout-header',
  styleUrl: 't-layout-header.css',
})
export class TLayoutHeader {

  @Prop() siteTitle: string;
  @Prop() navItems: TNavMenuItem[] = [];

  @State() navOpen: boolean = false;

  render() {
    return <header class={this.navOpen ? 'nav-open' : 'nav-closed'}>
      <div class="title">{this.siteTitle}</div>
      <div class="collapsible-content">
        <Navbar items={this.navItems} />
        <div class="toolbar">
          <t-mode-switcher label={this.navOpen ? 'Fargemodus' : undefined} />
        </div>
      </div>
      <div class="nav-toggle" onClick={() => this.navOpen = !this.navOpen}>
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
