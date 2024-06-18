import { Component, Host, h, Prop, Element, Event, EventEmitter } from '@stencil/core';
import { autoPlacement, autoUpdate, computePosition, ComputePositionConfig, flip, shift } from '@floating-ui/dom';
import { TFloatingElementPlacement } from '../../types/TFloatingElementPlacement';

@Component({
  tag: 't-floating-element',
  styleUrl: 't-floating-element.css',
  shadow: true,
})
export class TFloatingElement {

  @Element() element: HTMLElement;

  @Prop() placement: TFloatingElementPlacement = 'auto';
  @Prop() visible: boolean = false;

  @Event() clickOutside: EventEmitter<MouseEvent>;

  private cleanup: () => void;

  render() {
    return (
      <Host>
        <span id="anchor"><slot name="anchor"/></span>
        <div id="content" class={this.visible ? 'open' : 'closed'}><slot name="content"/></div>
      </Host>
    );
  }

  componentDidLoad() {
    document.addEventListener('click', this.handleClickEverywhere);
    this.cleanup = autoUpdate(this.getAnchor(), this.getContent(), () => this.updatePosition());
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleClickEverywhere);
    this.cleanup();
  }

  handleClickEverywhere = (event: MouseEvent) => {
    if (!event.composedPath().includes(this.getContent()) && this.visible) {
      this.handleClickOutside(event);
    }
  }

  handleClickOutside = (event: MouseEvent) => {
    this.clickOutside.emit(event);
  }

  getAnchor(): HTMLElement {
    return this.element.shadowRoot.querySelector('#anchor');
  }

  getContent(): HTMLElement {
    return this.element.shadowRoot.querySelector('#content');
  }

  componentDidRender() {
    this.updatePosition();
  }

  private updatePosition() {

    const options: Partial<ComputePositionConfig> = this.placement === 'auto' ? {
      middleware: [autoPlacement()],
    } : {
      placement: this.placement,
      middleware: [flip(), shift()]
    };

    computePosition(this.getAnchor(), this.getContent(), options).then(({ x, y }) => {
      Object.assign(this.getContent().style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }
}
