import { Component, h, Prop } from '@stencil/core';
import { TSpinnerText } from './t-spinner.text';
import defaultText from './t-spinner.text';

@Component({
  tag: 't-spinner',
  styleUrl: 't-spinner.css',
  shadow: true,
})
export class TSpinner {

  @Prop() text: TSpinnerText = defaultText;

  render() {
    return <span class='t-spinner' title={this.text.title}/>;
  }
}
