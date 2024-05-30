import { Component, h, Prop, State, VNode, Element } from '@stencil/core';
import { ComponentHue } from '../../types/ComponentHue';
import 'bootstrap/js/dist/dropdown';
import { ButtonAttributes } from '../../types/HTMLAttributes';
import { TDropdownMenuItem } from './TDropdownMenuItem';
import { CheckmarkIcon } from '../../icons/CheckmarkIcon';
import { setBaseColour } from '../../utils/componentUtils';

@Component({
  tag: 't-dropdown-menu',
  styleUrl: 't-dropdown-menu.css',
  shadow: true,
})
export class TDropdownMenu {

  @Prop() hue: ComponentHue = 0;
  @Prop() label: VNode | string;
  @Prop() value: string;
  @Prop() buttonAttributes: ButtonAttributes;
  @Prop() items: TDropdownMenuItem[] = [];

  @State() expanded = false;
  @State() focusedIndex = -1;

  @Element() host: HTMLElement;

  connectedCallback() {
    setBaseColour(this.host, this.hue * 360);
  }

  get menu(): HTMLUListElement {
    return this.host.shadowRoot.querySelector('#menu');
  }

  get menuItems(): NodeListOf<HTMLButtonElement> {
    return this.menu.querySelectorAll('button');
  }

  collapse() {
    this.expanded = false;
    this.focusedIndex = -1;
  }

  expand() {
    this.expanded = true;
  }

  focusOnIndex(index: number) {
    this.focusedIndex = index;
  }

  handleKeyDown(event: KeyboardEvent) {
    const { key } = event;
    switch (key) {
      case 'ArrowDown':
        event.preventDefault();
        this.expand();
        this.focusOnIndex(0);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.expand();
        this.focusOnIndex(this.items.length - 1);
        break;
      case 'Escape':
        this.collapse();
        break;
    }
  }

  componentDidRender() {
    if (this.focusedIndex > -1) {
      setTimeout(() => this.menuItems[this.focusedIndex].focus()); // setTimeout is a workaround for the following Stencil bug: https://github.com/ionic-team/stencil/issues/3772
    }
  }

  render() {
    return (
      <t-floating-element
        class="t-dropdown-menu"
        onClickOutside={() => this.collapse()}
        placement="bottom"
        visible={this.expanded}
      >
        <t-button
          buttonAttributes={{
            'aria-expanded': this.expanded ? 'true' : 'false',
            onClick: () => this.expanded = !this.expanded,
            onKeyDown: (event: KeyboardEvent) => this.handleKeyDown(event),
            ...this.buttonAttributes,
          }}
          hue={this.hue}
          slot="anchor"
        >
          <slot slot='icon' name='icon'/>
          {this.label}
        </t-button>
        <ul class="dropdown-menu" slot="content" id="menu">
          {this.items.map((item, index) => this.renderOption(item, index))}
        </ul>
      </t-floating-element>
    );
  }

  private renderOption({label, action, selected, icon, buttonAttributes}: TDropdownMenuItem, index: number) {
    const handleClick = (event: MouseEvent) => {
      this.collapse();
      action(event);
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          this.focusOnIndex(Math.min(index + 1, this.items.length - 1));
          break;
        case 'ArrowUp':
          event.preventDefault();
          this.focusOnIndex(Math.max(0, index - 1));
          break;
        case 'Escape':
          this.collapse();
          break;
      }
    }

    return <li>
      <button
        class={{'dropdown-item': true, selected}}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={this.focusedIndex === index ? 0 : -1}
        {...buttonAttributes}
      >
        {icon}
        {label}
        {selected && <CheckmarkIcon/>}
      </button>
    </li>;
  }
}
