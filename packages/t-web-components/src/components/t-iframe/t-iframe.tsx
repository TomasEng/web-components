import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 't-iframe',
  styleUrl: 't-iframe.css',
  shadow: true,
})
export class TIframe {

  @Prop() src: string;
  @Prop() srcdoc: string;

  render() {
    if (this.srcdoc) return <iframe srcDoc={this.srcdoc}/>;
    else return <iframe src={this.src}/>;
  }
}
