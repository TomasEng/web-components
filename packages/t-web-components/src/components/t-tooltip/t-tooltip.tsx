import { Component, Host, h, Element, State } from '@stencil/core';
import { computePosition, flip, shift } from '@floating-ui/dom';

@Component({
  tag: 't-tooltip',
  styleUrl: 't-tooltip.css',
  shadow: true,
})
export class TTooltip {

  @Element() element: HTMLElement;

  @State() open: boolean = false;

  render() {
    return (
      <Host>
        <button
          id="button"
          aria-describedby="tooltip"
          onMouseEnter={() => this.open = true}
          onMouseLeave={() => this.open = false}
          onFocus={() => this.open = true}
          onBlur={() => this.open = false}
        >
          <slot name="trigger"></slot>
        </button>
        <div id="tooltip" role="tooltip" class={this.open ? 'open' : 'closed'}>
          <slot name="content"></slot>
        </div>
      </Host>
    );
  }

  componentDidUpdate() {
    this.updatePosition();
  }

  private updatePosition() {
    const button = this.element.shadowRoot.querySelector('#button') as HTMLButtonElement;
    const tooltip = this.element.shadowRoot.querySelector('#tooltip') as HTMLDivElement;
    computePosition(button, tooltip,{
      placement: 'top',
      middleware: [flip(), shift()],
    }).then(({x, y}) => {
      Object.assign(tooltip.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }
}
