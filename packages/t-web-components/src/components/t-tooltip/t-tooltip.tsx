import { Component, h, Element, State, Prop } from '@stencil/core';
import { TOOLTIP_HIDE_DELAY_MILLISECONDS } from '../../constants';
import { TFloatingElementPlacement } from '../../types/TFloatingElementPlacement';

@Component({
  tag: 't-tooltip',
  styleUrl: 't-tooltip.css',
  shadow: true,
})
export class TTooltip {

  @Element() element: HTMLElement;

  @Prop() placement: TFloatingElementPlacement = 'bottom';

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

  closeOnEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeTooltip();
    }
  }

  componentDidLoad() {
    document.addEventListener('keydown', (event) => this.closeOnEscape(event));
  }

  disconnectedCallback() {
    document.removeEventListener('keydown', (event) => this.closeOnEscape(event));
  }

  render() {
    return (
      <t-floating-element
        onClickOutside={() => this.closeTooltip()}
        placement={this.placement}
        visible={this.open}
      >
        <span
          aria-describedby="tooltip"
          id="button"
          onBlur={() => this.closeTooltip()}
          onFocus={() => this.openTooltip()}
          onMouseEnter={() => this.openTooltip()}
          onMouseLeave={() => this.startCloseTimeout()}
          slot="anchor"
        >
          <slot name="trigger" />
        </span>
        <div
          id="tooltip"
          role="tooltip"
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
