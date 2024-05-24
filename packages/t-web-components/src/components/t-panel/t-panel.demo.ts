import { ComponentDemos } from '../../types/ComponentDemos';

export const tPanelTestData = {
  content: "Lorem ipsum dolor sit amet.",
  heading: "Info"
};

export const tPanelDemo: ComponentDemos = {
  default: {
    componentName: 't-panel',
    children: [tPanelTestData.content]
  },
  withHeading: {
    componentName: 't-panel',
    children: [
      {
        componentName: 'span',
        props: {
          slot: 'heading'
        },
        children: [tPanelTestData.heading]
      },
      tPanelTestData.content
    ]
  },
  withHeadingAndIcon: {
    componentName: 't-panel',
    children: [
      {
        componentName: 'svg',
        props: {
          height: '1em',
          slot: 'icon',
          viewBox: '0 0 24 24',
          width: '1em',
          xmlns: 'http://www.w3.org/2000/svg'
        },
        children: [
          {
            componentName: 'circle',
            props: {
              cx: '12',
              cy: '12',
              fill: 'currentColor',
              r: '12',
            }
          }
        ]
      },
      {
        componentName: 'span',
        props: {
          slot: 'heading'
        },
        children: [tPanelTestData.heading]
      },
      tPanelTestData.content
    ]
  }
}
