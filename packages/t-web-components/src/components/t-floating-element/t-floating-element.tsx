import { Component, Host, h, Prop, Element, Event, EventEmitter } from '@stencil/core';
import { computePosition, flip, shift } from '@floating-ui/dom';
import { TFloatingElementPlacement } from '../../types/TFloatingElementPlacement';

@Component({
  tag: 't-floating-element',
  styleUrl: 't-floating-element.css',
  shadow: true,
})
export class TFloatingElement {

  @Prop() placement: TFloatingElementPlacement = 'top';
  @Prop() visible: boolean = false;
  @Element() element: HTMLElement;
  @Event() clickOutside: EventEmitter<MouseEvent>;

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
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleClickEverywhere);
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

  componentDidUpdate() {
    this.updatePosition();
  }

  private updatePosition() {
    computePosition(this.getAnchor(), this.getContent(), {
      placement: this.placement,
      middleware: [flip(), shift()],
    }).then(({ x, y }) => {
      Object.assign(this.getContent().style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }
}
