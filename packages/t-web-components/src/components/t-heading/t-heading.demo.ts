import { ComponentDemos } from '../../types/ComponentDemos';

export const tHeadingDemo: ComponentDemos = {
  allLevels: {
    componentName: 'div',
    children: [
      {
        componentName: 't-heading',
        props: { level: 1 },
        children: ['Overskrift 1'],
      },
      {
        componentName: 't-heading',
        props: { level: 2 },
        children: ['Overskrift 2'],
      },
      {
        componentName: 't-heading',
        props: { level: 3 },
        children: ['Overskrift 3'],
      },
      {
        componentName: 't-heading',
        props: { level: 4 },
        children: ['Overskrift 4'],
      },
      {
        componentName: 't-heading',
        props: { level: 5 },
        children: ['Overskrift 5'],
      },
      {
        componentName: 't-heading',
        props: { level: 6 },
        children: ['Overskrift 6'],
      },
    ],
  },
}
