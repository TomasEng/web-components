import { ComponentDemos } from '../../types/ComponentDemos';

export const tSwitchTestData = {
  onText: 'På',
  offText: 'Av'
};

export const tSwitchDemo: ComponentDemos = {
  on: {
    componentName: 't-switch',
    props: { checked: true },
    children: [tSwitchTestData.onText]
  },
  off: {
    componentName: 't-switch',
    props: { checked: false },
    children: [tSwitchTestData.offText]
  }
};
