import { ComponentDemos } from '../../types/ComponentDemos';

export const tCodeTestData = {
  code: "const test: string = 'test';",
  marginCode: `
    |function test(): void {
    |    console.log('test');
    |}
  `,
  blockCode: "function test(): void {\n  console.log('test');\n}",
};

export const tCodeDemo: ComponentDemos = {
  inline: {
    componentName: 't-code',
    props: {
      code: tCodeTestData.code,
      language: 'typescript'
    },
  },
  block: {
    componentName: 't-code',
    props: {
      code: tCodeTestData.blockCode,
      language: 'typescript',
      mode: 'block'
    },
  },
  panel: {
    componentName: 't-code',
    props: {
      code: tCodeTestData.blockCode,
      language: 'typescript',
      mode: 'panel'
    },
  },
  headingPanel: {
    componentName: 't-code',
    props: {
      code: tCodeTestData.blockCode,
      language: 'typescript',
      mode: 'heading-panel'
    },
  },
  trimMargin: {
    componentName: 't-code',
    props: {
      code: tCodeTestData.marginCode,
      language: 'typescript',
      mode: 'block',
      trimmargin: true
    },
  },
  slot: {
    componentName: 't-code',
    children: [
      tCodeTestData.code
    ]
  }
};
