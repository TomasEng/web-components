import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 't-iframe',
  styleUrl: 't-iframe.css',
  shadow: true,
})
export class TIframe {

  @Element() element: HTMLTIframeElement;

  @Prop() src: string;
  @Prop() srcdoc: string;

  get iframe(): HTMLIFrameElement {
    return this.element.shadowRoot.querySelector('iframe');
  }

  get iframeDocument(): Document {
    return this.iframe.contentDocument;
  }

  get iframeWindow(): Window {
    return this.iframe.contentWindow;
  }

  render() {
    if (this.srcdoc) return <iframe srcDoc={this.srcdoc}/>;
    else return <iframe src={this.src}/>;
  }

  componentDidLoad() {
    this.iframe.onload = async () => {
      await this.resizeIframe();
    };
    this.iframeWindow.addEventListener('resize', async () => {
      await this.resizeIframe();
    });
  }

  private async resizeIframe(): Promise<void> {
    const retryPeriodMilliseconds = 50;
    let currentHeight = 0;
    const scrollingElement = await this.getScrollingElement();
    const maxHeight = window.innerHeight * 0.5;
    return new Promise(resolve => {
      let resolved = false;
      const interval = setInterval(() => {
        const {height} = scrollingElement.getBoundingClientRect();
        if (height !== currentHeight) {
          currentHeight = height;
        } else {
          resolved = true;
          resolve();
        }
        const newHeight = Math.min(currentHeight, maxHeight);
        this.iframe.height = `${newHeight}px`;
        if (resolved) {
          clearInterval(interval);
        }
      }, retryPeriodMilliseconds);
    });
  }

  private async getScrollingElement(): Promise<Element> {
    const retryPeriodMilliseconds = 10;
    return new Promise(resolve => {
      let resolved = false;
      const interval = setInterval(() => {
        if (this.iframeDocument.scrollingElement) {
          resolve(this.iframeDocument.scrollingElement);
          resolved = true;
        }
        if (resolved) clearInterval(interval);
      }, retryPeriodMilliseconds);
    });
  }
}
