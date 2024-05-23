import { camelToPascal, collapseWhitespace, kebabToCamel, kebabToPascal } from '../utils/stringUtils';
import { stringifyObjectLines } from '../utils/objectUtils';

export type ComponentTestCodeConfig = {
  componentName: string;
  props?: {
    [propName: string]: any;
  };
  children?: (ComponentTestCodeConfig | string)[];
  events?: {
    [eventName: string]: (event: Event & { detail: any }) => void;
  };
};

const indent = '  ';
const indentLines = (lines: string[]) => lines.map(line => indent + line);

export class ComponentTestCode {
  readonly config: ComponentTestCodeConfig;

  constructor(config: ComponentTestCodeConfig) {
    this.config = config;
  }

  configString(): string {
    return JSON.stringify(this.config, null, 2);
  }

  withHue(hue: number, hueProp: string = 'hue'): ComponentTestCode {
    return new ComponentTestCode(
      {
        ...this.config,
        props: {
          ...this.config.props,
          [hueProp]: hue,
        },
      },
    );
  }

  withId(id: string): ComponentTestCode {
    return new ComponentTestCode(
      {
        ...this.config,
        props: {
          ...this.config.props,
          id,
        },
      },
    );
  }

  generateElement(): HTMLElement {
    const element = document.createElement(this.config.componentName);
    for (const propName in this.config.props) {
      element[propName] = this.config.props[propName];
    }
    for (const eventName in this.config.events) {
      element.addEventListener(eventName, this.config.events[eventName]);
    }
    this.childrenTestCodes().forEach(childTestCode => {
      if (typeof childTestCode === 'string') {
        element.appendChild(document.createTextNode(childTestCode));
      } else {
        element.appendChild(childTestCode.generateElement());
      }
    });
    return element;
  }

  generateCode(): string {
    return this.generateCodeLines().join('\n');
  }

  generateCodeLines(): string[] {
    const lines: string[] = this.generateHtmlLines();
    const scriptLines = this.generateScriptLines();
    if (scriptLines.length) {
      lines.push('');
      lines.push('<script type="text/javascript">');
      lines.push(...indentLines(scriptLines));
      lines.push('</script>');
    }
    return lines;
  }

  generateMinifiedHtml(): string {
    return collapseWhitespace(this.generateHtml());
  }

  generateHtml(): string {
    return this.generateHtmlLines().join('\n');
  }

  private generateHtmlLines(): string[] {
    const lines: string[] = [];
    const propLines = this.generateHtmlPropLines();
    const childLines = indentLines(this.childrenHtmlLines());
    if (propLines.length === 0 && childLines.length === 0) {
      lines.push(`<${this.config.componentName}></${this.config.componentName}>`);
    } else if (propLines.length === 0) {
      lines.push(`<${this.config.componentName}>`);
      lines.push(...childLines);
      lines.push(`</${this.config.componentName}>`);
    } else if (childLines.length === 0) {
      if (propLines.length === 1) {
        lines.push(`<${this.config.componentName} ${propLines[0]}></${this.config.componentName}>`);
      } else {
        lines.push(`<${this.config.componentName}`);
        lines.push(...indentLines(propLines));
        lines.push(`></${this.config.componentName}>`);
      }
    } else {
      if (propLines.length === 1) {
        lines.push(`<${this.config.componentName} ${propLines[0]}>`);
      } else {
        lines.push(`<${this.config.componentName}`);
        lines.push(...indentLines(propLines));
        lines.push(`>`);
      }
      lines.push(...childLines);
      lines.push(`</${this.config.componentName}>`);
    }
    return lines;
  }

  private childrenHtmlLines(): string[] {
    return this
      .childrenTestCodes()
      .map(childTestCode => typeof childTestCode === 'string' ? childTestCode : childTestCode.generateHtmlLines())
      .flat();
  }

  private childrenTestCodes(): (ComponentTestCode | string)[] {
    return this
        .config
        ?.children
        ?.map(childConfig => typeof childConfig === 'string' ? childConfig : new ComponentTestCode(childConfig))
      ?? [];
  }

  private generateHtmlPropLines(): string[] {
    const lines: string[] = [];
    for (const propName in this.config.props) {
      const value = this.config.props[propName];
      if (typeof value === 'string') {
        lines.push(`${propName}="${value.replace('"', '\\"')}"`);
      } else if (['number', 'boolean'].includes(typeof value)) {
        lines.push(`${propName}="${value}"`);
      }
    }
    return lines;
  }

  generateMinifiedScript(): string {
    return collapseWhitespace(this.generateScript());
  }

  generateScript(): string {
    return this.generateScriptLines().join('\n');
  }

  private generateScriptLines(): string[] {
    const lines: string[] = [];
    const objectPropLines = this.generateHtmlObjectPropLines();
    const eventLines = this.generateHtmlEventLines();
    if (objectPropLines.length + eventLines.length) {
      const varName = this.componentVarName();
      lines.push(`const ${varName} = document.querySelector("${this.selector()}");`);
      lines.push(...objectPropLines);
      lines.push(...eventLines);
    }
    return lines;
  }

  private selector(): string {
    return this.config.props?.id ? `#${this.config.props.id}` : this.config.componentName;
  }

  private componentVarName(): string {
    const componentNameKebab = kebabToCamel(this.config.componentName);
    if (this.config.props?.id) {
      return componentNameKebab + kebabToPascal(this.config.props.id);
    } else {
      return componentNameKebab;
    }
  }

  private generateHtmlObjectPropLines(): string[] {
    const lines: string[] = [];
    const varName = this.componentVarName();
    for (const propName in this.config.props) {
      const value = this.config.props[propName];
      if (typeof value === 'object') {
        const objLines = stringifyObjectLines(value);
        lines.push(`${varName}.${propName} = ${objLines[0]}`);
        lines.push(...objLines.slice(1, objLines.length - 1));
        lines.push(`${objLines[objLines.length - 1]};`);
      } else if (typeof value === 'function') {
        lines.push(`${varName}.${propName} = ${value.toString()};`);
      }
    }
    return lines;
  }

  private generateHtmlEventLines(): string[] {
    const lines: string[] = [];
    const varName = this.componentVarName();
    for (const eventName in this.config.events) {
      const handlerName = this.eventHandlerName(eventName);
      const script = this.config.events[eventName];
      lines.push(`const ${handlerName} = ${script};`);
      lines.push(`${varName}.addEventListener("${eventName}", ${handlerName});`);
    }
    return lines;
  }

  private eventHandlerName(eventName: string): string {
    const prefix = 'handle';
    const suffix = camelToPascal(eventName);
    if (this.config.props?.id) {
      return prefix + kebabToPascal(this.config.props.id) + suffix;
    } else {
      return prefix + suffix;
    }
  }

  generateReactCode(): string {
    return this.generateReactCodeLines().join('\n');
  }

  generateReactCodeLines(): string[] {
    const lines: string[] = [];
    const propLines = this.generateJsxPropLines();
    const childLines = indentLines(this.generateReactChildrenLines());
    const componentName = this.reactComponentName();
    if (propLines.length === 0 && childLines.length === 0) {
      lines.push(`<${componentName}/>`);
    } else if (propLines.length === 0) {
      lines.push(`<${componentName}>`);
      lines.push(...childLines);
      lines.push(`</${componentName}>`);
    } else if (childLines.length === 0) {
      if (propLines.length === 1) {
        lines.push(`<${componentName} ${propLines[0]}/>`);
      } else {
        lines.push(`<${componentName}`);
        lines.push(...indentLines(propLines));
        lines.push(`/>`);
      }
    } else {
      if (propLines.length === 1) {
        lines.push(`<${componentName} ${propLines[0]}>`);
      } else {
        lines.push(`<${componentName}`);
        lines.push(...indentLines(propLines));
        lines.push(`>`);
      }
      lines.push(...childLines);
      lines.push(`</${componentName}>`);
    }
    return lines;
  }

  private generateJsxPropLines(): string[] {
    const lines: string[] = [];
    for (const propName in this.config.props) {
      const value = this.config.props[propName];
      switch (typeof value) {
        case 'string':
          lines.push(`${propName}=${JSON.stringify(value)}`);
          break;
        default: {
          const objLines = stringifyObjectLines(value);
          if (objLines.length === 1) {
            lines.push(`${propName}={${objLines[0]}}`);
          } else {
            lines.push(`${propName}={${objLines[0]}`);
            lines.push(...objLines.slice(1, objLines.length - 1));
            lines.push(`${objLines[objLines.length - 1]}}`);
          }
          break;
        }
      }
    }
    for (const eventName in this.config.events) {
      const handlerName = 'on' + camelToPascal(eventName);
      const script = this.config.events[eventName].toString();
      const scriptLines = script.split('\n');
      if (scriptLines.length === 1) {
        lines.push(`${handlerName}={${script}}`);
      } else {
        lines.push(`${handlerName}={${scriptLines[0]}`);
        lines.push(...indentLines(scriptLines.slice(1, scriptLines.length - 1)));
        lines.push(`${scriptLines[scriptLines.length - 1]}}`);
      }
    }
    return lines;
  }

  private generateReactChildrenLines(): string[] {
    return this
      .childrenTestCodes()
      .map(childTestCode => typeof childTestCode === 'string' ? childTestCode : childTestCode.generateReactCodeLines())
      .flat();
  }

  private reactComponentName(): string {
    if (htmlTags.includes(this.config.componentName)) {
      return this.config.componentName;
    } else {
      return kebabToPascal(this.config.componentName);
    }
  }
}

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
