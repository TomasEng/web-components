import { Component, h } from '@stencil/core';

@Component({
  tag: 't-layout-main',
  styleUrl: 't-layout-main.css',
})
export class TLayoutMain {

  render() {
    return <internal-style-provider>
      <main class="main">
        <div class="leftbar">
          <slot name="leftbar" />
        </div>
        <div class="content">
          <slot />
        </div>
      </main>
    </internal-style-provider>;
  }
}
