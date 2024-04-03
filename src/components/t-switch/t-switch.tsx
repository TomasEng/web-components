import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 't-switch',
  styleUrl: 't-switch.css',
  shadow: true,
})
export class TSwitch {

  @Event() switch: EventEmitter<boolean>;

  @Prop() checked: boolean = false;
  @Prop() hue: number = 0;

  handleChange = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;
    this.switch.emit(target.checked);
  };

  render() {
    return <internal-style-provider hueOffsetInTurns={this.hue}>
      <label htmlFor="input" class="wrapper">
      <span class="switch">
        <input id="input" type="checkbox" onChange={this.handleChange} checked={this.checked} />
        <span class="slider" />
      </span>
        <span class="label"><slot /></span>
      </label>
    </internal-style-provider>;
  }
}
