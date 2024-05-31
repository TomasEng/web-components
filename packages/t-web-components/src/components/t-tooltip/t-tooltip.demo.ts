import { ComponentDemos } from '../../types/ComponentDemos';

export const tTooltipTestData = {
  triggerText: 'Hold over meg',
  contentText: 'Bla bla',
  longContentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor tortor nec congue elementum. Donec eget est a libero lobortis sodales in at sem. Proin ornare imperdiet leo a hendrerit. Aliquam ut porttitor erat. Donec scelerisque ligula ut posuere fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed fringilla feugiat venenatis.'
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
  withLongContent: {
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
        children: [tTooltipTestData.longContentText]
      }
    ]
  }
};
