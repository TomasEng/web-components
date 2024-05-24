import { Component, Element, h, Prop, State } from '@stencil/core';
import highlight from 'highlight.js';
import state from '../../store';
import { TCodeDisplayMode } from './TCodeDisplayMode';
import { capitalize, trimMargin } from '../../utils/stringUtils';
import { CodeIcon } from '../../icons/CodeIcon';
import { FilesIcon } from '../../icons/FilesIcon';
import { CheckmarkIcon } from '../../icons/CheckmarkIcon';
import { ACTION_CONFIRMATION_PERIOD_MILLISECONDS } from '../../constants';

@Component({
  tag: 't-code',
  styleUrl: 't-code.css',
  shadow: true,
})
export class TCode {

  @Prop() code: string;
  @Prop() language: string;
  @Prop() mode: TCodeDisplayMode = 'inline';
  @Prop() trimmargin: boolean = false;
  @Prop() copyButtonTitle: string = 'Kopier kode';

  @State() copied = false;

  @Element() element: HTMLElement;

  componentDidUpdate() {
    if (this.copied) {
      setTimeout(
        () => this.copied = false,
        ACTION_CONFIRMATION_PERIOD_MILLISECONDS
      );
    }
  }

  render() {
    const trimmedCode = this.trimCode();
    const code = highlight.highlight(trimmedCode, {language: 'html'}).value;
    const pre = (
      <pre class={state.mode + ' ' + this.mode}>
        <code innerHTML={code}/>
      </pre>
    );
    return this.mode === 'panel' ? (
      <t-panel>
        <CodeIcon slot="icon" />
        <span slot="heading" class='heading'>
          {this.language && findHumanReadableLanguage(this.language)}
          <t-button
            buttonAttributes={{title: this.copyButtonTitle}}
            onClick={() => this.copyToClipboard()}
            variant='transparent'
          >
            {this.renderCopyIcon()}
          </t-button>
        </span>
        {pre}
      </t-panel>
    ) : pre;
  }

  private renderCopyIcon() {
    return this.copied ? <CheckmarkIcon slot='icon'/> : <FilesIcon slot='icon'/>;
  }

  private trimCode() {
    return this.trimmargin ? trimMargin(this.code) : this.code;
  }

  private copyToClipboard() {
    return navigator
      .clipboard
      .writeText(this.trimCode())
      .then(() => {this.copied = true;});
  }
}

const findHumanReadableLanguage = (language: string) => {
  return humanReadableLanguages[language] || capitalize(language);
}

const humanReadableLanguages: {[key: string]: string} = {
  ada: 'Ada',
  angular: 'Angular',
  c: 'C',
  cpp: 'C++',
  csharp: 'C Sharp (C#)',
  css: 'CSS',
  go: 'Go',
  graphql: 'GraphQL',
  html: 'HTML',
  java: 'Java',
  javascript: 'Javascript',
  json: 'JSON',
  jsx: 'JSX',
  kotlin: 'Kotlin',
  less: 'Less',
  markdown: 'Markdown',
  mysql: 'MySQL',
  php: 'PHP',
  postgresql: 'PostgreSQL',
  python: 'Python',
  r: 'R',
  react: 'React',
  ruby: 'Ruby',
  rust: 'Rust',
  sass: 'Sass',
  scss: 'SCSS',
  shell: 'Shell',
  sql: 'SQL',
  svelte: 'Svelte',
  swift: 'Swift',
  tsx: 'Typescript JSX (TSX)',
  typescript: 'Typescript',
  vue: 'Vue',
  xhtml: 'XHTML',
  xml: 'XML',
  yaml: 'YAML',
};


