import { ComponentDemos } from '../../types/ComponentDemos';

export const tBreadcrumbsDemo: ComponentDemos = {
  default: {
    componentName: 't-breadcrumbs',
    children: [
      {
        componentName: 'li',
        children: [
          {
            componentName: 'a',
            props: {
              href: '#'
            },
            children: ['Nivå 1']
          }
        ]
      },
      {
        componentName: 'li',
        children: [
          {
            componentName: 'a',
            props: {
              href: '#'
            },
            children: ['Nivå 2']
          }
        ]
      },
      {
        componentName: 'li',
        children: [
          {
            componentName: 'a',
            props: {
              href: '#'
            },
            children: ['Nivå 3']
          }
        ]
      },
      {
        componentName: 'li',
        children: [
          {
            componentName: 'a',
            props: {
              href: '#'
            },
            children: ['Nivå 4']
          }
        ]
      },
    ]
  },
}
