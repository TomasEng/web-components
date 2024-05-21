import { r as registerInstance, h, e as Host, F as Fragment } from './index-d1462df2.js';
import { s as stringifyObjectLines } from './objectUtils-d84f425c.js';
import { i as integerArray } from './numberUtils-8dd27eb9.js';

const kebabToCamel = (kebab) => kebab.replace(/-([a-z0-9])/g, (g) => g[1].toUpperCase());
const kebabToPascal = (kebab) => kebabToCamel(kebab).replace(/^[a-z]/, (g) => g.toUpperCase());
const camelToPascal = (camel) => camel.replace(/^[a-z]/, (g) => g.toUpperCase());
const collapseWhitespace = (text) => text.replace(/\s+/g, ' ');

const indent = '  ';
const indentLines = (lines) => lines.map(line => indent + line);
class ComponentTestCode {
    constructor(config) {
        this.config = config;
    }
    configString() {
        return JSON.stringify(this.config, null, 2);
    }
    withHue(hue, hueProp = 'hue') {
        return new ComponentTestCode(Object.assign(Object.assign({}, this.config), { props: Object.assign(Object.assign({}, this.config.props), { [hueProp]: hue }) }));
    }
    withId(id) {
        return new ComponentTestCode(Object.assign(Object.assign({}, this.config), { props: Object.assign(Object.assign({}, this.config.props), { id }) }));
    }
    generateElement() {
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
            }
            else {
                element.appendChild(childTestCode.generateElement());
            }
        });
        return element;
    }
    generateCode() {
        return this.generateCodeLines().join('\n');
    }
    generateCodeLines() {
        const lines = this.generateHtmlLines();
        const scriptLines = this.generateScriptLines();
        if (scriptLines.length) {
            lines.push('');
            lines.push('<script type="text/javascript">');
            lines.push(...indentLines(scriptLines));
            lines.push('</script>');
        }
        return lines;
    }
    generateMinifiedHtml() {
        return collapseWhitespace(this.generateHtml());
    }
    generateHtml() {
        return this.generateHtmlLines().join('\n');
    }
    generateHtmlLines() {
        const lines = [];
        const propLines = this.generateHtmlPropLines();
        const childLines = indentLines(this.childrenHtmlLines());
        if (propLines.length === 0 && childLines.length === 0) {
            lines.push(`<${this.config.componentName}></${this.config.componentName}>`);
        }
        else if (propLines.length === 0) {
            lines.push(`<${this.config.componentName}>`);
            lines.push(...childLines);
            lines.push(`</${this.config.componentName}>`);
        }
        else if (childLines.length === 0) {
            if (propLines.length === 1) {
                lines.push(`<${this.config.componentName} ${propLines[0]}></${this.config.componentName}>`);
            }
            else {
                lines.push(`<${this.config.componentName}`);
                lines.push(...indentLines(propLines));
                lines.push(`></${this.config.componentName}>`);
            }
        }
        else {
            if (propLines.length === 1) {
                lines.push(`<${this.config.componentName} ${propLines[0]}>`);
            }
            else {
                lines.push(`<${this.config.componentName}`);
                lines.push(...indentLines(propLines));
                lines.push(`>`);
            }
            lines.push(...childLines);
            lines.push(`</${this.config.componentName}>`);
        }
        return lines;
    }
    childrenHtmlLines() {
        return this
            .childrenTestCodes()
            .map(childTestCode => typeof childTestCode === 'string' ? childTestCode : childTestCode.generateHtmlLines())
            .flat();
    }
    childrenTestCodes() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this
            .config) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.map(childConfig => typeof childConfig === 'string' ? childConfig : new ComponentTestCode(childConfig))) !== null && _c !== void 0 ? _c : [];
    }
    generateHtmlPropLines() {
        const lines = [];
        for (const propName in this.config.props) {
            const value = this.config.props[propName];
            if (typeof value === 'string') {
                lines.push(`${propName}=${JSON.stringify(value)}`);
            }
            else if (['number', 'boolean'].includes(typeof value)) {
                lines.push(`${propName}="${value}"`);
            }
        }
        return lines;
    }
    generateMinifiedScript() {
        return collapseWhitespace(this.generateScript());
    }
    generateScript() {
        return this.generateScriptLines().join('\n');
    }
    generateScriptLines() {
        const lines = [];
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
    selector() {
        var _a;
        return ((_a = this.config.props) === null || _a === void 0 ? void 0 : _a.id) ? `#${this.config.props.id}` : this.config.componentName;
    }
    componentVarName() {
        var _a;
        const componentNameKebab = kebabToCamel(this.config.componentName);
        if ((_a = this.config.props) === null || _a === void 0 ? void 0 : _a.id) {
            return componentNameKebab + kebabToPascal(this.config.props.id);
        }
        else {
            return componentNameKebab;
        }
    }
    generateHtmlObjectPropLines() {
        const lines = [];
        const varName = this.componentVarName();
        for (const propName in this.config.props) {
            const value = this.config.props[propName];
            if (typeof value === 'object') {
                const objLines = stringifyObjectLines(value);
                lines.push(`${varName}.${propName} = ${objLines[0]}`);
                lines.push(...objLines.slice(1, objLines.length - 1));
                lines.push(`${objLines[objLines.length - 1]};`);
            }
            else if (typeof value === 'function') {
                lines.push(`${varName}.${propName} = ${value.toString()};`);
            }
        }
        return lines;
    }
    generateHtmlEventLines() {
        const lines = [];
        const varName = this.componentVarName();
        for (const eventName in this.config.events) {
            const handlerName = this.eventHandlerName(eventName);
            const script = this.config.events[eventName];
            lines.push(`const ${handlerName} = ${script};`);
            lines.push(`${varName}.addEventListener("${eventName}", ${handlerName});`);
        }
        return lines;
    }
    eventHandlerName(eventName) {
        var _a;
        const prefix = 'handle';
        const suffix = camelToPascal(eventName);
        if ((_a = this.config.props) === null || _a === void 0 ? void 0 : _a.id) {
            return prefix + kebabToPascal(this.config.props.id) + suffix;
        }
        else {
            return prefix + suffix;
        }
    }
    generateReactCode() {
        return this.generateReactCodeLines().join('\n');
    }
    generateReactCodeLines() {
        const lines = [];
        const propLines = this.generateJsxPropLines();
        const childLines = indentLines(this.generateReactChildrenLines());
        const componentName = this.reactComponentName();
        if (propLines.length === 0 && childLines.length === 0) {
            lines.push(`<${componentName}/>`);
        }
        else if (propLines.length === 0) {
            lines.push(`<${componentName}>`);
            lines.push(...childLines);
            lines.push(`</${componentName}>`);
        }
        else if (childLines.length === 0) {
            if (propLines.length === 1) {
                lines.push(`<${componentName} ${propLines[0]}/>`);
            }
            else {
                lines.push(`<${componentName}`);
                lines.push(...indentLines(propLines));
                lines.push(`/>`);
            }
        }
        else {
            if (propLines.length === 1) {
                lines.push(`<${componentName} ${propLines[0]}>`);
            }
            else {
                lines.push(`<${componentName}`);
                lines.push(...indentLines(propLines));
                lines.push(`>`);
            }
            lines.push(...childLines);
            lines.push(`</${componentName}>`);
        }
        return lines;
    }
    generateJsxPropLines() {
        const lines = [];
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
                    }
                    else {
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
            }
            else {
                lines.push(`${handlerName}={${scriptLines[0]}`);
                lines.push(...indentLines(scriptLines.slice(1, scriptLines.length - 1)));
                lines.push(`${scriptLines[scriptLines.length - 1]}}`);
            }
        }
        return lines;
    }
    generateReactChildrenLines() {
        return this
            .childrenTestCodes()
            .map(childTestCode => typeof childTestCode === 'string' ? childTestCode : childTestCode.generateReactCodeLines())
            .flat();
    }
    reactComponentName() {
        if (htmlTags.includes(this.config.componentName)) {
            return this.config.componentName;
        }
        else {
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

const ComponentDocumentation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.name = undefined;
        this.examples = undefined;
        this.colourSettings = undefined;
    }
    render() {
        return (h(Host, { key: '44ccb9287ad0db54228874900abef28f180919c9' }, h("t-heading", { key: '705af7be062446f021e63ac7810bbd894d029943', level: 2, id: this.name }, this.name), this.examples.map(example => (h(Example, { example: example, colourSettings: this.colourSettings, parentName: this.name })))));
    }
};
const Example = ({ example, colourSettings, parentName }) => {
    const componentTestCode = new ComponentTestCode(example.code);
    return (h(Fragment, null, example.title && h("t-heading", { level: 3, id: `${parentName}-${example.title}` }, example.title), example.description && h("t-paragraph", null, example.description), h("t-column", null, h(Preview, { componentTestCode: componentTestCode, mode: example.previewMode, colourSettings: colourSettings }), h(Code, { componentTestCode: componentTestCode }))));
};
const Code = ({ componentTestCode }) => {
    return (h("t-details", { summary: "Vis kode", openSummary: "Skjul kode" }, h("t-tabs", null, h("t-tab", { heading: "HTML" }, h("t-code", { language: "html", code: componentTestCode.generateCode() })), h("t-tab", { heading: "React" }, h("t-code", { language: "React", code: componentTestCode.generateReactCode() })))));
};
const Preview = ({ componentTestCode, mode, colourSettings }) => {
    switch (mode) {
        case 'iframe':
            return h("preview-iframe", { componentTestCode: componentTestCode });
        case 'inline':
            return h(InlinePreview, { componentTestCode: componentTestCode });
        case 'hue':
            return h(HuePreview, { componentTestCode: componentTestCode, colourSettings: colourSettings });
    }
};
const InlinePreview = ({ componentTestCode }) => {
    const testCode = componentTestCode.withId(componentTestCode.config.componentName);
    return (h("component-preview", { componentTestCode: testCode }));
};
const HuePreview = ({ componentTestCode, colourSettings }) => {
    const hueArray = integerArray(colourSettings.numberOfHues);
    return (h("t-row", null, hueArray.map(hue => {
        const testCode = componentTestCode
            .withHue(hue / colourSettings.numberOfHues)
            .withId(`${componentTestCode.config.componentName}-${hue}`);
        return (h("component-preview", { componentTestCode: testCode }));
    })));
};

export { ComponentDocumentation as component_documentation };

//# sourceMappingURL=component-documentation.entry.js.map