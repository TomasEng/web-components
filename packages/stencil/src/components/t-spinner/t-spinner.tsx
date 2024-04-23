import { Component, h, Prop } from '@stencil/core';
import { ComponentHue } from '../../types/ComponentHue';
import { ButtonAttributes } from '../../types/HTMLAttributes';

@Component({
  tag: 't-spinner',
  styleUrl: 't-spinner.css',
  shadow: true,
})
export class TSpinner {

  @Prop() title: string = 'Laster';

  render() {
    return <span class='t-spinner' title={this.title}/>;
  }
}
