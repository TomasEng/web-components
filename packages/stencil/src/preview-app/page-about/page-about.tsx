import { Component, h, Fragment } from '@stencil/core';

@Component({
  tag: 'page-about',
})
export class PageAbout {
  render() {
    return (
      <>
        <t-heading level={1}>Om</t-heading>
        <p>Lorem ipsum dolor sit amet</p>
      </>
    );
  }
}
