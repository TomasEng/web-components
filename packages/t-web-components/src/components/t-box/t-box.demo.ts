import { ComponentDemos } from '../../types/ComponentDemos';

export const tBoxDemo: ComponentDemos = {
  independent: {
    componentName: 't-box',
    children: [
      'Test'
    ]
  },
  inLink: {
    componentName: 'a',
    children: [
      {
        componentName: 't-box',
        children: [
          'Test'
        ]
      }
    ],
  },
  inLinkList: {
    componentName: 't-box-list',
    children: [
      {
        componentName: 'li',
        children: [
          {
            componentName: 'a',
            children: [
              {
                componentName: 't-box',
                children: [
                  'Test 1'
                ]
              }
            ]
          }
        ]
      },
      {
        componentName: 'li',
        children: [
          {
            componentName: 'a',
            children: [
              {
                componentName: 't-box',
                children: [
                  'Test 2'
                ]
              }
            ]
          }
        ]
      },
      {
        componentName: 'li',
        children: [
          {
            componentName: 'a',
            children: [
              {
                componentName: 't-box',
                children: [
                  'Test 3'
                ]
              }
            ]
          }
        ]
      },
      {
        componentName: 'li',
        children: [
          {
            componentName: 'a',
            children: [
              {
                componentName: 't-box',
                children: [
                  'Test 4'
                ]
              }
            ]
          }
        ]
      },
    ],
  }
}
