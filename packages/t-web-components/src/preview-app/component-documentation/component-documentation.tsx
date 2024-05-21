import { Component, Host, h, Prop, Fragment } from '@stencil/core';
import { ComponentExample } from './ComponentExample';
import { ComponentTestCode } from '../../test-utils/ComponentTestCode';
import { PreviewMode } from './PreviewMode';
import { ColourSettings } from '../../types/ColourSettings';
import { integerArray } from '../../utils/numberUtils';

@Component({
  tag: 'component-documentation',
})
export class ComponentDocumentation {

  @Prop() name: string;
  @Prop() examples: ComponentExample[];
  @Prop() colourSettings: ColourSettings;

  render() {
    return (
      <Host>
        <t-heading level={2} id={this.name}>{this.name}</t-heading>
        {this.examples.map(example => (
          <Example example={example} colourSettings={this.colourSettings} parentName={this.name}/>
        ))}
      </Host>
    );
  }
}

type ExampleProps = {
  example: ComponentExample;
  colourSettings: ColourSettings;
  parentName: string;
};

const Example = ({ example, colourSettings, parentName }: ExampleProps) => {
  const componentTestCode = new ComponentTestCode(example.code);
  return (
    <>
      {example.title && <t-heading level={3} id={`${parentName}-${example.title}`}>{example.title}</t-heading>}
      {example.description && <t-paragraph>{example.description}</t-paragraph>}
      <t-column>
        <Preview componentTestCode={componentTestCode} mode={example.previewMode} colourSettings={colourSettings}/>
        <Code componentTestCode={componentTestCode}/>
      </t-column>
    </>
  );
};

type CodeProps = {
  componentTestCode: ComponentTestCode;
}

const Code = ({ componentTestCode }: CodeProps) => {
  return (
    <t-details summary="Vis kode" openSummary="Skjul kode">
      <t-tabs>
        <t-tab heading="HTML">
          <t-code language="html" code={componentTestCode.generateCode()} />
        </t-tab>
        <t-tab heading="React">
          <t-code language="React" code={componentTestCode.generateReactCode()} />
        </t-tab>
      </t-tabs>
    </t-details>
  );
};

type PreviewProps = {
  componentTestCode: ComponentTestCode;
  mode: PreviewMode;
  colourSettings: ColourSettings;
};

const Preview = ({ componentTestCode, mode, colourSettings }: PreviewProps) => {
  switch (mode) {
    case 'iframe':
      return <preview-iframe componentTestCode={componentTestCode}/>;
    case 'inline':
      return <InlinePreview componentTestCode={componentTestCode}/>;
    case 'hue':
      return <HuePreview componentTestCode={componentTestCode} colourSettings={colourSettings}/>;
  }
};

const InlinePreview = ({ componentTestCode }: { componentTestCode: ComponentTestCode }) => {
  const testCode = componentTestCode.withId(componentTestCode.config.componentName);
  return (
    <component-preview componentTestCode={testCode}/>
  );
};

const HuePreview = ({ componentTestCode, colourSettings }: { componentTestCode: ComponentTestCode, colourSettings: ColourSettings }) => {
  const hueArray = integerArray(colourSettings.numberOfHues);
  return (
    <t-row>
      {hueArray.map(hue => {
        const testCode = componentTestCode
          .withHue(hue / colourSettings.numberOfHues)
          .withId(`${componentTestCode.config.componentName}-${hue}`);
        return (
          <component-preview componentTestCode={testCode}/>
        );
      })}
    </t-row>
  );
};
