import { ComponentDemos } from '../../types/ComponentDemos';
import { TDropdownMenuItem } from './TDropdownMenuItem';

export const tDropdownMenuTestData = {
  label: 'Velg',
  items: [
    {
      label: 'Alternativ 1',
      action: () => console.log('Alternativ 1 valgt')
    },
    {
      label: 'Alternativ 2',
      action: () => console.log('Alternativ 2 valgt')
    },
    {
      label: 'Alternativ 3',
      action: () => console.log('Alternativ 3 valgt')
    }
  ] satisfies TDropdownMenuItem[],
};

export const tDropdownMenuDemo: ComponentDemos = {
  simple: {
    componentName: 't-dropdown-menu',
    props: {
      label: tDropdownMenuTestData.label,
      items: tDropdownMenuTestData.items,
    },
  },
};
