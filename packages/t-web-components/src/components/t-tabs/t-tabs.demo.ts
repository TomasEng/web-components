import { ComponentDemos } from '../../types/ComponentDemos';

export const tTabsTestData = {
  items: [
    {
      heading: 'Fane 1',
      content: 'Innhold 1',
    },
    {
      heading: 'Fane 2',
      content: 'Innhold 2',
    },
    {
      heading: 'Fane 3',
      content: 'Innhold 3',
    }
  ],
};

export const tTabsDemo: ComponentDemos = {
  simple: {
    componentName: 't-tabs',
    children: tTabsTestData.items.map(item => ({
      componentName: 't-tab',
      props: {
        heading: item.heading,
      },
      children: [item.content],
    })),
  },
};
