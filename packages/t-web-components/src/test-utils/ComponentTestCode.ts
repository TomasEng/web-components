import { camelToPascal, collapseWhitespace, kebabToCamel } from '../utils/stringUtils';
import { stringifyObjectLines } from '../utils/objectUtils';

export type ComponentTestCodeConfig = {
  componentName: string;
  props?: {
    [propName: string]: any;
  };
  children?: (ComponentTestCodeConfig | string)[];
  events?: {
    [eventName: string]: Function;
  };
};

const indent = '  ';
const indentLines = (lines: string[]) => lines.map(line => indent + line);

export class ComponentTestCode {
  private readonly config: ComponentTestCodeConfig;

  constructor(config: ComponentTestCodeConfig) {
    this.config = config;
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
      if ([ 'string', 'number', 'boolean' ].includes(typeof value)) {
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
      const { componentName } = this.config;
      const varName = this.componentVarName();
      lines.push(`const ${varName} = document.querySelector("${componentName}");`);
      lines.push(...objectPropLines);
      lines.push(...eventLines);
    }
    return lines;
  }

  private componentVarName(): string {
    return kebabToCamel(this.config.componentName);
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
      const handlerName = 'handle' + camelToPascal(eventName);
      const script = this.config.events[eventName];
      lines.push(`const ${handlerName} = ${script};`);
      lines.push(`${varName}.addEventListener("${eventName}", ${handlerName});`);
    }
    return lines;
  }
}
