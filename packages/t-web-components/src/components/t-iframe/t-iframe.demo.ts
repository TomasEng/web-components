import { ComponentDemos } from '../../types/ComponentDemos';

export const tIframeDemo: ComponentDemos = {
  srcdoc: {
    componentName: 't-iframe',
    props: {
      srcdoc: '<p>Lorem ipsum dolor sit amet</p>',
    },
  },
  resizable: {
    componentName: 't-iframe',
    props: {
      srcdoc: '<p>Lorem ipsum dolor sit amet</p>',
      resize: 'both',
    },
  }
}
