import { describe } from 'node:test';
import { ComponentTestCode, ComponentTestCodeConfig } from './ComponentTestCode';

describe('ComponentTestCode', () => {
  describe('generateHtmlLines', () => {
    it('Generates the HTML code correctly when there is no input', () => {
      const config: ComponentTestCodeConfig = {
        componentName: 't-test'
      };
      const testCode = new ComponentTestCode(config);
      const htmlLines = testCode.generateHtmlLines();
      expect(htmlLines).toEqual(['<t-test></t-test>']);
    });

    it('Generates the HTML code correctly when there is a text child', () => {
      const config: ComponentTestCodeConfig = {
        componentName: 't-test',
        children: [
          'Lorem ipsum'
        ]
      };
      const testCode = new ComponentTestCode(config);
      const htmlLines = testCode.generateHtmlLines();
      expect(htmlLines).toEqual([
        '<t-test>',
        '  Lorem ipsum',
        '</t-test>'
      ]);
    });

    it('Generates the HTML code correctly when there is a child component', () => {
      const config: ComponentTestCodeConfig = {
        componentName: 't-test',
        children: [
          {
            componentName: 't-child'
          }
        ]
      };
      const testCode = new ComponentTestCode(config);
      const htmlLines = testCode.generateHtmlLines();
      expect(htmlLines).toEqual([
        '<t-test>',
        '  <t-child></t-child>',
        '</t-test>'
      ]);
    });

    it('Generates the HTML code correctly when there are multiple children', () => {
      const config: ComponentTestCodeConfig = {
        componentName: 't-test',
        children: [
          'Lorem ipsum',
          {
            componentName: 't-child'
          }
        ]
      };
      const testCode = new ComponentTestCode(config);
      const htmlLines = testCode.generateHtmlLines();
      expect(htmlLines).toEqual([
        '<t-test>',
        '  Lorem ipsum',
        '  <t-child></t-child>',
        '</t-test>'
      ]);
    });

    it('Generates the HTML code correctly when there is one prop', () => {
      const config: ComponentTestCodeConfig = {
        componentName: 't-test',
        props: {
          prop1: 'value1'
        }
      };
      const testCode = new ComponentTestCode(config);
      const htmlLines = testCode.generateHtmlLines();
      expect(htmlLines).toEqual([
        '<t-test prop1="value1"></t-test>'
      ]);
    });

    it('Generates the HTML code correctly when there are multiple props', () => {
      const config: ComponentTestCodeConfig = {
        componentName: 't-test',
        props: {
          prop1: 'value1',
          prop2: 'value2'
        }
      };
      const testCode = new ComponentTestCode(config);
      const htmlLines = testCode.generateHtmlLines();
      expect(htmlLines).toEqual([
        '<t-test',
        '  prop1="value1"',
        '  prop2="value2"',
        '></t-test>'
      ]);
    });

    it('Generates the HTML code correctly when there is one prop and children', () => {
      const config: ComponentTestCodeConfig = {
        componentName: 't-test',
        props: {
          prop1: 'value1'
        },
        children: [
          'Lorem ipsum'
        ]
      };
      const testCode = new ComponentTestCode(config);
      const htmlLines = testCode.generateHtmlLines();
      expect(htmlLines).toEqual([
        '<t-test prop1="value1">',
        '  Lorem ipsum',
        '</t-test>'
      ]);
    });

    it('Generates the HTML code correctly when there are multiple props and children', () => {
      const config: ComponentTestCodeConfig = {
        componentName: 't-test',
        props: {
          prop1: 'value1',
          prop2: 'value2'
        },
        children: [
          'Lorem ipsum'
        ]
      };
      const testCode = new ComponentTestCode(config);
      const htmlLines = testCode.generateHtmlLines();
      expect(htmlLines).toEqual([
        '<t-test',
        '  prop1="value1"',
        '  prop2="value2"',
        '>',
        '  Lorem ipsum',
        '</t-test>'
      ]);
    });

    it('Generates the HTML code correctly when there are object props', () => {
      const config: ComponentTestCodeConfig = {
        componentName: 't-test',
        props: {
          obj: { prop1: 'value1', prop2: 'value2' }
        },
      };
      const testCode = new ComponentTestCode(config);
      const htmlLines = testCode.generateHtmlLines();
      expect(htmlLines).toEqual([
        '<t-test></t-test>',
        '',
        '<script type="text/javascript">',
        '  const tTest = document.querySelector("t-test");',
        '  tTest.obj = {',
        '    "prop1": "value1",',
        '    "prop2": "value2"',
        '  };',
        '</script>'
      ]);
    });

    it('Generates the HTML code correctly when there are array props', () => {
      const config: ComponentTestCodeConfig = {
        componentName: 't-test',
        props: {
          arr: ['value1', 'value2']
        },
      };
      const testCode = new ComponentTestCode(config);
      const htmlLines = testCode.generateHtmlLines();
      expect(htmlLines).toEqual([
        '<t-test></t-test>',
        '',
        '<script type="text/javascript">',
        '  const tTest = document.querySelector("t-test");',
        '  tTest.arr = [',
        '    "value1",',
        '    "value2"',
        '  ];',
        '</script>'
      ]);
    });
  });
});
