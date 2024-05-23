import { Component, Element, h, Prop } from '@stencil/core';
import highlight from 'highlight.js';
import state from '../../store';
import { TCodeDisplayMode } from './TCodeDisplayMode';
import { trimMargin } from '../../utils/stringUtils';

@Component({
  tag: 't-code',
  styleUrl: 't-code.css',
  shadow: true,
})
export class TCode {

  @Prop() language: string;
  @Prop() code: string;
  @Prop() mode: TCodeDisplayMode = 'inline';
  @Prop() trimmargin: boolean = false;

  @Element() element: HTMLElement;

  render() {
    const trimmedCode = this.trimmargin ? trimMargin(this.code) : this.code;
    this.mode === 'block' && console.log('trimmedCode',  this.trimmargin, trimmedCode)
    const code = highlight.highlight(trimmedCode, {language: 'html'}).value;
    const pre = (
      <pre class={state.mode + ' ' + this.mode}>
        <code innerHTML={code}/>
      </pre>
    );
    return this.mode === 'panel' ? <t-panel>{pre}</t-panel> : pre;
  }
}
