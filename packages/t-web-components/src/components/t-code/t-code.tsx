import { Component, Element, h, Prop, State } from '@stencil/core';
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
    const code = highlight.highlight(this.code, {language: 'html'}).value;
    const pre = (
      <pre class={state.mode}>
        <code innerHTML={code}/>
      </pre>
    );
    return this.panel ? <t-panel>{pre}</t-panel> : pre;
  }
}
