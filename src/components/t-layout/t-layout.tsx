import { Component, h } from '@stencil/core';

@Component({
  tag: 't-layout',
  styleUrl: 't-layout.css',
})
export class TLayout {

  render() {
    return <div class='wrapper'>
      <div class='layout'>
        <slot name='header'/>
        <slot name='main'/>
      </div>
    </div>;
  }
}
