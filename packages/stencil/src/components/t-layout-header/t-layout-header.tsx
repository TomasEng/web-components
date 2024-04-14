import { Component, h, Prop } from '@stencil/core';
import { TNavMenuItem } from './TNavMenuItem';

@Component({
  tag: 't-layout-header',
  styleUrl: 't-layout-header.css',
})
export class TLayoutHeader {

  @Prop() siteTitle: string;
  @Prop() navItems: TNavMenuItem[] = [];

  render() {
    return <header>
      <div class="title">{this.siteTitle}</div>
      <Navbar items={this.navItems} />
      <t-mode-switcher />
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
