import { ComponentDemos } from '../../types/ComponentDemos';
import { TDropdownMenuItem } from './TDropdownMenuItem';

export const tDropdownMenuTestData = {
  label: 'Velg',
  items: [
    {
      label: 'Alternativ 1',
      logValue: 'Alternativ 1 valgt'
    },
    {
      label: 'Alternativ 2',
      logValue: 'Alternativ 2 valgt'
    },
    {
      label: 'Alternativ 3',
      logValue: 'Alternativ 3 valgt'
    }
  ],
};

export const tDropdownMenuDemo: ComponentDemos = {
  simple: {
    componentName: 't-dropdown-menu',
    props: {
      label: tDropdownMenuTestData.label,
      items: tDropdownMenuTestData.items.map((item) => ({
        label: item.label,
        action: {
          type: 'console-log',
          input: item.logValue,
        },
      }))
    },
  },
};
