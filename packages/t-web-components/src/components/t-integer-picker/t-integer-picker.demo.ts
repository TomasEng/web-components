import { ComponentDemos } from '../../types/ComponentDemos';

export const tIntegerPickerTestData = {
  label: 'Antall'
};

export const tIntegerPickerDemo: ComponentDemos = {
  simple: {
    componentName: 't-integer-picker',
    props: {
      label: tIntegerPickerTestData.label,
      value: 5,
      min: 0,
      max: 10
    },
  }
};
