import { ComponentDemos } from '../../types/ComponentDemos';

export const tButtonTestData = {
  text: 'Klikk meg'
};

export const tButtonDemo: ComponentDemos = {
  simple: {
    componentName: 't-button',
    children: [tButtonTestData.text]
  },
  withIcon: {
    componentName: 't-button',
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
      tButtonTestData.text
    ]
  },
  iconOnly: {
    componentName: 't-button',
    props: {
      buttonAttributes: {
        'title': tButtonTestData.text
      }
    },
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
      }
    ]
  },
  transparent: {
    componentName: 't-button',
    props: {
      variant: 'transparent'
    },
    children: [tButtonTestData.text]
  }
};
