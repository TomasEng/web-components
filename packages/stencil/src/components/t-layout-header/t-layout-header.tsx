import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 't-layout-header',
  styleUrl: 't-layout-header.css',
})
export class TLayoutHeader {

  @Prop() siteTitle: string;

  render() {
    return <header>
      <div class='title'>{this.siteTitle}</div>
      <Navbar/>
      <t-mode-switcher/>
    </header>;
  }
}

const Navbar = () => {
  return (
    <nav class='nav'>
      <ul>
        <li class='open'><a href={"#"}>Komponentoversikt</a></li>
        <li><a href={"#"}><span>Les mer</span></a></li>
      </ul>
    </nav>
  );
}
