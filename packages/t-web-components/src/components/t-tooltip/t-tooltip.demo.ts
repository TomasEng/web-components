import { ComponentDemos } from '../../types/ComponentDemos';

export const tTooltipTestData = {
  triggerText: 'Hold over meg',
  contentText: 'Bla bla'
}

export const tTooltipDemo: ComponentDemos = {
  default: {
    componentName: 't-tooltip',
    children: [
      {
        componentName: 'span',
        props: { slot: 'trigger' },
        children: [tTooltipTestData.triggerText]
      },
      {
        componentName: 'span',
        props: { slot: 'content' },
        children: [tTooltipTestData.contentText]
      }
    ]
  },
};
