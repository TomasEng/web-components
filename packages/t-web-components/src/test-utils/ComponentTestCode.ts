import { kebabToCamel } from '../utils/stringUtils';

export type ComponentTestCodeConfig = {
  componentName: string;
  props?: {
    [propName: string]: any;
  };
  children?: (ComponentTestCodeConfig | string)[];
  events?: {
    [eventName: string]: string;
  };
};

const indent = '  ';
const indentLines = (lines: string[]) => lines.map(line => indent + line);

export class ComponentTestCode {
  private readonly config: ComponentTestCodeConfig;

  constructor(config: ComponentTestCodeConfig) {
    this.config = config;
  }

  generateHtml(): string {
    return this.generateHtmlLines().join('\n');
  }

  generateHtmlLines(): string[] {
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
    const scriptLines = this.generateScriptLines();
    if (scriptLines.length) {
      lines.push('');
      lines.push('<script type="text/javascript">');
      lines.push(...indentLines(scriptLines));
      lines.push('</script>');
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

  private generateScriptLines(): string[] {
    const lines: string[] = [];
    const objectPropLines = this.generateHtmlObjectPropLines();
    if (objectPropLines.length) {
      const { componentName } = this.config;
      const varName = this.componentVarName();
      lines.push(`const ${varName} = document.querySelector("${componentName}");`);
      lines.push(...objectPropLines);
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
        const json = JSON.stringify(value, null, 2);
        const jsonLines = json.split('\n');
        lines.push(`${varName}.${propName} = ${jsonLines[0]}`);
        lines.push(...jsonLines.slice(1, jsonLines.length - 1));
        lines.push(`${jsonLines[jsonLines.length - 1]};`);
      }
    }
    return lines;
  }
}
