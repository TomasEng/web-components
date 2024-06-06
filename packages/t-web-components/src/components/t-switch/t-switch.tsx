import { Component, Event, EventEmitter, h, Prop, Element, Fragment } from '@stencil/core';
import { setBaseColour } from '../../utils/componentUtils';

@Component({
  tag: 't-switch',
  styleUrl: 't-switch.css',
  shadow: true,
})
export class TSwitch {

  @Element() element: HTMLTSwitchElement;

  @Event() switch: EventEmitter<boolean>;

  @Prop() checked: boolean = false;
  @Prop() hueoffset: number = 0;

  connectedCallback() {
    setBaseColour(this.element, this.hueoffset);
  }

  handleChange = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;
    this.switch.emit(target.checked);
  };

  render() {
    return <>
      <label htmlFor="input" class="wrapper">
      <span class="switch">
        <input id="input" type="checkbox" onChange={this.handleChange} checked={this.checked} />
        <span class="slider" />
      </span>
        <span class="label"><slot /></span>
      </label>
    </>;
  }
}
