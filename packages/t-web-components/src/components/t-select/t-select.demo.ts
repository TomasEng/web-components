import { ComponentDemos } from '../../types/ComponentDemos';

export const tSelectTestData = {
  label: "Alternativer"
};

export const tSelectDemo: ComponentDemos = {
  simple: {
    componentName: 't-select',
    props: {
      label: tSelectTestData.label,
      options: [
        { value: '1', label: 'Alternativ 1' },
        { value: '2', label: 'Alternativ 2' },
        { value: '3', label: 'Alternativ 3' }
      ],
      value: '1'
    },
  },
};
