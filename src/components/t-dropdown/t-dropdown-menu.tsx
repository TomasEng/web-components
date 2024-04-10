import { Component, h, Prop, VNode } from '@stencil/core';
import { ComponentHue } from '../../types/ComponentHue';
import 'bootstrap/js/dist/dropdown';
import { ButtonAttributes } from '../../types/HTMLAttributes';
import { TDropdownMenuItem } from './TDropdownMenuItem';

@Component({
  tag: 't-dropdown-menu',
  styleUrls: ['t-dropdown-menu.css', '../t-button/t-button.css'],
})
export class TDropdownMenu {

  @Prop() hue: ComponentHue = 0;
  @Prop() label: VNode | string;
  @Prop() value: string;
  @Prop() buttonAttributes: ButtonAttributes;
  @Prop() items: TDropdownMenuItem[] = [];

  render() {
    return <internal-style-provider hueOffsetInTurns={this.hue}>
      <div class="t-dropdown-menu dropdown">
        <button
          aria-expanded="false"
          class="t-button dropdown-toggle"
          data-bs-toggle="dropdown"
          type="button"
          {...this.buttonAttributes}
        >
          {this.label}
        </button>
        <ul class="dropdown-menu">
          {this.items.map(item => this.renderOption(item))}
        </ul>
      </div>
    </internal-style-provider>;
  }

  private renderOption({label, action}: TDropdownMenuItem) {
    return <li>
      <button
        class="dropdown-item"
        onClick={action}
      >{label}</button>
    </li>;
  }
}
