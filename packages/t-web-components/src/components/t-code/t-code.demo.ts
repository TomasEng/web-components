import { ComponentDemos } from '../../types/ComponentDemos';

export const tCodeTestData = {
  code: "const test: string = 'test';"
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
      panel: true
    },
  }
};
