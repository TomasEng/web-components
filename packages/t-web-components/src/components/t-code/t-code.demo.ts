import { ComponentDemos } from '../../types/ComponentDemos';

export const tCodeTestData = {
  code: "const test: string = 'test';",
  marginCode: `
    |function test() {
    |    console.log('test');
    |}
  `,
};

export const tCodeDemo: ComponentDemos = {
  default: {
    componentName: 't-code',
    props: {
      code: tCodeTestData.code,
      language: 'typescript'
    },
  },
  panel: {
    componentName: 't-code',
    props: {
      code: tCodeTestData.code,
      language: 'typescript',
      mode: 'panel'
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
};
