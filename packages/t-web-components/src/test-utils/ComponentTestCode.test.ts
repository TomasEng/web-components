import { ComponentTestCode, ComponentTestCodeConfig } from './ComponentTestCode';

type TestCase = {
  config: ComponentTestCodeConfig;
  expectedHtml: string[];
  expectedReact: string[];
};

type TestCases = {
  [key: string]: TestCase;
};

const testCases: TestCases = {
  'there is no input': {
    config: { componentName: 't-test' },
    expectedHtml: ['<t-test></t-test>'],
    expectedReact: ['<TTest/>']
  },
  'there is a text child': {
    config: {
      componentName: 't-test',
      children: ['Lorem ipsum']
    },
    expectedHtml: [
      '<t-test>',
      '  Lorem ipsum',
      '</t-test>'
    ],
    expectedReact: [
      '<TTest>',
      '  Lorem ipsum',
      '</TTest>'
    ]
  },
  'there is a child component': {
    config: {
      componentName: 't-test',
      children: [
        { componentName: 't-child' }
      ]
    },
    expectedHtml: [
      '<t-test>',
      '  <t-child></t-child>',
      '</t-test>'
    ],
    expectedReact: [
      '<TTest>',
      '  <TChild/>',
      '</TTest>'
    ]
  },
  'there are multiple children': {
    config: {
      componentName: 't-test',
      children: [
        'Lorem ipsum',
        { componentName: 't-child' }
      ]
    },
    expectedHtml: [
      '<t-test>',
      '  Lorem ipsum',
      '  <t-child></t-child>',
      '</t-test>'
    ],
    expectedReact: [
      '<TTest>',
      '  Lorem ipsum',
      '  <TChild/>',
      '</TTest>'
    ]
  },
  'there is one prop': {
    config: {
      componentName: 't-test',
      props: { prop1: 'value1' }
    },
    expectedHtml: ['<t-test prop1="value1"></t-test>'],
    expectedReact: ['<TTest prop1="value1"/>']
  },
  'there are multiple props': {
    config: {
      componentName: 't-test',
      props: { prop1: 'value1', prop2: 'value2' }
    },
    expectedHtml: [
      '<t-test',
      '  prop1="value1"',
      '  prop2="value2"',
      '></t-test>'
    ],
    expectedReact: [
      '<TTest',
      '  prop1="value1"',
      '  prop2="value2"',
      '/>'
    ]
  },
  'there is one prop and children': {
    config: {
      componentName: 't-test',
      props: { prop1: 'value1' },
      children: ['Lorem ipsum']
    },
    expectedHtml: [
      '<t-test prop1="value1">',
      '  Lorem ipsum',
      '</t-test>'
    ],
    expectedReact: [
      '<TTest prop1="value1">',
      '  Lorem ipsum',
      '</TTest>'
    ]
  },
  'there are multiple props and children': {
    config: {
      componentName: 't-test',
      props: { prop1: 'value1', prop2: 'value2' },
      children: ['Lorem ipsum']
    },
    expectedHtml: [
      '<t-test',
      '  prop1="value1"',
      '  prop2="value2"',
      '>',
      '  Lorem ipsum',
      '</t-test>'
    ],
    expectedReact: [
      '<TTest',
      '  prop1="value1"',
      '  prop2="value2"',
      '>',
      '  Lorem ipsum',
      '</TTest>'
    ]
  },
  'there are object props': {
    config: {
      componentName: 't-test',
      props: { obj: { prop1: 'value1', prop2: 'value2' } }
    },
    expectedHtml: [
      '<t-test></t-test>',
      '',
      '<script type="text/javascript">',
      '  const tTest = document.querySelector("t-test");',
      '  tTest.obj = {',
      '    prop1: "value1",',
      '    prop2: "value2"',
      '  };',
      '</script>'
    ],
    expectedReact: [
      '<TTest',
      '  obj={{',
      '    prop1: "value1",',
      '    prop2: "value2"',
      '  }}',
      '/>'
    ]
  },
  'there are array props': {
    config: {
      componentName: 't-test',
      props: { arr: ['value1', 'value2'] }
    },
    expectedHtml: [
      '<t-test></t-test>',
      '',
      '<script type="text/javascript">',
      '  const tTest = document.querySelector("t-test");',
      '  tTest.arr = [',
      '    "value1",',
      '    "value2"',
      '  ];',
      '</script>'
    ],
    expectedReact: [
      '<TTest',
      '  arr={[',
      '    "value1",',
      '    "value2"',
      '  ]}',
      '/>'
    ]
  },
  'there are event listeners': {
    config: {
      componentName: 't-test',
      events: { click: () => console.log('click') }
    },
    expectedHtml: [
      '<t-test></t-test>',
      '',
      '<script type="text/javascript">',
      '  const tTest = document.querySelector("t-test");',
      '  const handleClick = () => console.log(\'click\');',
      '  tTest.addEventListener("click", handleClick);',
      '</script>'
    ],
    expectedReact: [
      '<TTest onClick={() => console.log(\'click\')}/>'
    ]
  },
  'a prop is a function': {
    config: {
      componentName: 't-test',
      props: { prop1: () => console.log('prop1') }
    },
    expectedHtml: [
      '<t-test></t-test>',
      '',
      '<script type="text/javascript">',
      '  const tTest = document.querySelector("t-test");',
      '  tTest.prop1 = () => console.log(\'prop1\');',
      '</script>'
    ],
    expectedReact: [
      '<TTest prop1={() => console.log(\'prop1\')}/>'
    ]
  },
  'there is an object prop with a function': {
    config: {
      componentName: 't-test',
      props: { obj: { prop1: () => console.log('prop1') } }
    },
    expectedHtml: [
      '<t-test></t-test>',
      '',
      '<script type="text/javascript">',
      '  const tTest = document.querySelector("t-test");',
      '  tTest.obj = {',
      '    prop1: () => console.log(\'prop1\')',
      '  };',
      '</script>'
    ],
    expectedReact: [
      '<TTest',
      '  obj={{',
      '    prop1: () => console.log(\'prop1\')',
      '  }}',
      '/>'
    ]
  }
};

describe('ComponentTestCode', () => {
  describe.each(Object.keys(testCases))('Generates code correctly when %s', (testCaseName) => {
    const testCase = testCases[testCaseName];
    const testCode = new ComponentTestCode(testCase.config);

    it('Generates the HTML code correctly', () => {
      expect(testCode.generateCodeLines()).toEqual(testCase.expectedHtml);
    });

    it('Generates the React code correctly', () => {
      expect(testCode.generateReactCodeLines()).toEqual(testCase.expectedReact);
    });
  });
  describe('generateCodeLines', () => {
    it('Generates the HTML code correctly when there is no input', () => {
      const config: ComponentTestCodeConfig = {
        componentName: 't-test'
      };
      const testCode = new ComponentTestCode(config);
      const htmlLines = testCode.generateCodeLines();
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
      const htmlLines = testCode.generateCodeLines();
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
      const htmlLines = testCode.generateCodeLines();
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
      const htmlLines = testCode.generateCodeLines();
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
      const htmlLines = testCode.generateCodeLines();
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
      const htmlLines = testCode.generateCodeLines();
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
      const htmlLines = testCode.generateCodeLines();
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
      const htmlLines = testCode.generateCodeLines();
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
      const htmlLines = testCode.generateCodeLines();
      expect(htmlLines).toEqual([
        '<t-test></t-test>',
        '',
        '<script type="text/javascript">',
        '  const tTest = document.querySelector("t-test");',
        '  tTest.obj = {',
        '    prop1: "value1",',
        '    prop2: "value2"',
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
      const htmlLines = testCode.generateCodeLines();
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

    it('Generates the HTML code correctly when there are event listeners', () => {
      const config: ComponentTestCodeConfig = {
        componentName: 't-test',
        events: {
          click: () => console.log("click")
        }
      };
      const testCode = new ComponentTestCode(config);
      const htmlLines = testCode.generateCodeLines();
      expect(htmlLines).toEqual([
        '<t-test></t-test>',
        '',
        '<script type="text/javascript">',
        '  const tTest = document.querySelector("t-test");',
        '  const handleClick = () => console.log("click");',
        '  tTest.addEventListener("click", handleClick);',
        '</script>'
      ]);
    });

    it('Generates the HTML code correctly when a prop is a function', () => {
      const config: ComponentTestCodeConfig = {
        componentName: 't-test',
        props: {
          prop1: () => console.log('prop1')
        }
      };
      const testCode = new ComponentTestCode(config);
      const htmlLines = testCode.generateCodeLines();
      expect(htmlLines).toEqual([
        '<t-test></t-test>',
        '',
        '<script type="text/javascript">',
        '  const tTest = document.querySelector("t-test");',
        '  tTest.prop1 = () => console.log(\'prop1\');',
        '</script>'
      ]);
    });

    it('Generates the HTML code correctly when there is an object prop with a function', () => {
      const config: ComponentTestCodeConfig = {
        componentName: 't-test',
        props: {
          obj: { prop1: () => console.log('prop1') }
        }
      };
      const testCode = new ComponentTestCode(config);
      const htmlLines = testCode.generateCodeLines();
      expect(htmlLines).toEqual([
        '<t-test></t-test>',
        '',
        '<script type="text/javascript">',
        '  const tTest = document.querySelector("t-test");',
        '  tTest.obj = {',
        '    prop1: () => console.log(\'prop1\')',
        '  };',
        '</script>'
      ]);
    });
  });
});
