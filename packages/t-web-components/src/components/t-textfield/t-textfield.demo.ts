import { ComponentDemos } from '../../types/ComponentDemos';

export const tTextfieldTestData = {
  label: 'Skriv inn noe'
};

export const tTextfieldDemo: ComponentDemos = {
  simple: {
    componentName: 't-textfield',
    props: {
      label: tTextfieldTestData.label,
    },
  },
  valueChange: {
    componentName: 't-textfield',
    props: {
      label: tTextfieldTestData.label,
    },
    events: {
      valueChange: (e) => console.log(e.detail)
    }
  }
};
