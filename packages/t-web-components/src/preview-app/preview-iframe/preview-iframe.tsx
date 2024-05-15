import { Component, Prop, h } from '@stencil/core';
import { ComponentTestCode } from '../../test-utils/ComponentTestCode';
import { DEFAULT_CHROMA, DEFAULT_HUE } from '../../constants';

@Component({
  tag: 'preview-iframe',
  styleUrl: 'preview-iframe.css',
})
export class PreviewIframe {

  @Prop() componentTestCode: ComponentTestCode;
  @Prop() hue = DEFAULT_HUE;
  @Prop() chroma = DEFAULT_CHROMA;

  render() {
    const html = this.componentTestCode.generateMinifiedHtml();
    const script = this.componentTestCode.generateMinifiedScript();
    return <iframe src={`?html=${html}&script=${script}`}/>;
  }
}
