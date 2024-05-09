import { Component, h, Element, State } from '@stencil/core';
import { TOOLTIP_HIDE_DELAY_MILLISECONDS } from '../../constants';

@Component({
  tag: 't-tooltip',
  styleUrl: 't-tooltip.css',
  shadow: true,
})
export class TTooltip {

  @Element() element: HTMLElement;

  @State() open: boolean = false;

  private closeTimeoutId: ReturnType<typeof setTimeout>;

  openTooltip() {
    this.open = true;
    this.clearCloseTimeout();
  }

  startCloseTimeout() {
    this.clearCloseTimeout();
    this.closeTimeoutId = setTimeout(() => {
      this.closeTooltip();
    }, TOOLTIP_HIDE_DELAY_MILLISECONDS);
  }

  clearCloseTimeout() {
    clearTimeout(this.closeTimeoutId);
  }

  closeTooltip() {
    this.open = false;
  }

  render() {
    return (
      <t-floating-element visible={this.open}>
        <button
          id="button"
          aria-describedby="tooltip"
          onMouseEnter={() => this.openTooltip()}
          onMouseLeave={() => this.startCloseTimeout()}
          onFocus={() => this.openTooltip()}
          onBlur={() => this.closeTooltip()}
          slot="anchor"
        >
          <slot name="trigger" />
        </button>
        <div
          id="tooltip"
          slot="content"
          onMouseEnter={() => this.clearCloseTimeout()}
          onMouseLeave={() => this.startCloseTimeout()}
        >
          <slot name="content"/>
        </div>
      </t-floating-element>
    );
  }
}
