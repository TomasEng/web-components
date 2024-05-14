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
  @Element() element: HTMLElement;

  render() {
    return (
      <pre class={state.mode}>
        <code class={this.language}>
          {this.code}
        </code>
      </pre>
    );
  }

  componentDidLoad() {
    highlight.highlightElement(this.element.shadowRoot.querySelector('code'));
  }
}
