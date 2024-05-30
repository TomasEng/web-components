import { ComponentDemos } from '../../types/ComponentDemos';

export const tTreeTestData = {
  item1Label: 'Element 1',
  item2Label: 'Element 2',
  item3Label: 'Element 3',
  subitem21Label: 'Underelement 2.1',
  subitem22Label: 'Underelement 2.2',
  subsubitem211Label: 'Underunderelement 2.1.1',
  subsubitem212Label: 'Underunderelement 2.1.2',
  item1Href: '#1',
  item2Href: '#2',
  item3Href: '#3',
  subitem21Href: '#21',
  subitem22Href: '#22',
  subsubitem211Href: '#211',
  subsubitem212Href: '#212',
  mainLabel: 'Overskrift'
}

export const tTreeDemo: ComponentDemos = {
  withLinks: {
    componentName: 't-tree',
    children: [
      {
        componentName: 't-tree-item',
        props: { label: tTreeTestData.item1Label, href: tTreeTestData.item1Href }
      },
      {
        componentName: 't-tree-item',
        props: { label: tTreeTestData.item2Label, href: tTreeTestData.item2Href },
        children: [
          {
            componentName: 't-tree-item',
            props: { label: tTreeTestData.subitem21Label, href: tTreeTestData.subitem21Href },
            children: [
              {
                componentName: 't-tree-item',
                props: { label: tTreeTestData.subsubitem211Label, href: tTreeTestData.subsubitem211Href }
              },
              {
                componentName: 't-tree-item',
                props: { label: tTreeTestData.subsubitem212Label, href: tTreeTestData.subsubitem212Href }
              }
            ]
          },
          {
            componentName: 't-tree-item',
            props: { label: tTreeTestData.subitem22Label, href: tTreeTestData.subitem22Href }
          }
        ]
      },
      {
        componentName: 't-tree-item',
        props: { label: tTreeTestData.item3Label, href: tTreeTestData.item3Href }
      }
    ]
  },
  withLabel: {
    componentName: 't-tree',
    props: { label: tTreeTestData.mainLabel },
    children: [
      {
        componentName: 't-tree-item',
        props: { label: tTreeTestData.item1Label, href: tTreeTestData.item1Href }
      },
      {
        componentName: 't-tree-item',
        props: { label: tTreeTestData.item2Label, href: tTreeTestData.item2Href },
        children: [
          {
            componentName: 't-tree-item',
            props: { label: tTreeTestData.subitem21Label, href: tTreeTestData.subitem21Href },
            children: [
              {
                componentName: 't-tree-item',
                props: { label: tTreeTestData.subsubitem211Label, href: tTreeTestData.subsubitem211Href }
              },
              {
                componentName: 't-tree-item',
                props: { label: tTreeTestData.subsubitem212Label, href: tTreeTestData.subsubitem212Href }
              }
            ]
          },
          {
            componentName: 't-tree-item',
            props: { label: tTreeTestData.subitem22Label, href: tTreeTestData.subitem22Href }
          }
        ]
      },
      {
        componentName: 't-tree-item',
        props: { label: tTreeTestData.item3Label, href: tTreeTestData.item3Href }
      }
    ]
  }
};
