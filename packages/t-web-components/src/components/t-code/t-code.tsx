import { Component, Element, Prop, h } from '@stencil/core';
import highlight from 'highlight.js';
import state from '../../store';

@Component({
  tag: 't-code',
  styleUrl: 't-code.css',
  shadow: true,
})
export class TCode {

  @Prop() language: string;
  @Prop() code: string;
  @Prop() panel: boolean = false;

  @Element() element: HTMLElement;

  render() {
    const pre = (
      <pre class={state.mode}>
        <code class={this.language}>
          {this.code}
        </code>
      </pre>
    );

    return this.panel ? <t-panel>{pre}</t-panel> : pre;
  }

  componentDidLoad() {
    highlight.highlightElement(this.element.shadowRoot.querySelector('code'));
  }
}
