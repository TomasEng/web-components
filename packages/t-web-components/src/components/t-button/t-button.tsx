import { Component, h, Prop, Event, Element, Method, EventEmitter, Fragment } from '@stencil/core';
import { ComponentHue } from '../../types/ComponentHue';
import { ButtonAttributes } from '../../types/HTMLAttributes';
import { ButtonVariant } from './ButtonVariant';
import { setBaseColour } from '../../utils/componentUtils';

@Component({
  tag: 't-button',
  styleUrl: 't-button.css',
  shadow: true,
})
export class TButton {

  @Element() element: HTMLTButtonElement;

  @Prop() hueoffset: ComponentHue = 0;
  @Prop() buttonAttributes: ButtonAttributes;
  @Prop() variant: ButtonVariant = 'default';
  @Prop() focusable: boolean = true;

  @Event() buttonClick: EventEmitter<MouseEvent>;

  @Method() async focusOnButton() {
    await customElements.whenDefined('t-button');
    this.button.focus();
  }

  get button(): HTMLButtonElement {
    return this.element.shadowRoot.querySelector('button');
  }

  private handleClick = (e: MouseEvent) => {
    this.buttonClick.emit(e);
  }

  connectedCallback() {
    setBaseColour(this.element, this.hueoffset);
  }

  render() {
    const tabIndex = this.focusable ? 0 : -1;
    return <>
      <button
        class={`t-button ${this.variant}`}
        onClick={(e) => this.handleClick(e)}
        part='button'
        tabIndex={tabIndex}
        type='button'
        {...this.buttonAttributes}
      >
        <slot name='icon' aria-hidden={true}/>
        <slot/>
      </button>
    </>;
  }
}
