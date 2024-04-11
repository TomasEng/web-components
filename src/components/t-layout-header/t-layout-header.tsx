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
      <t-mode-picker/>
    </header>;
  }
}
