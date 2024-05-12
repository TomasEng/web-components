import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 't-spinner',
  styleUrl: 't-spinner.css',
  shadow: true,
})
export class TSpinner {

  @Prop() spinnerTitle: string = 'Laster';

  render() {
    return <span class='t-spinner' title={this.spinnerTitle}/>;
  }
}
