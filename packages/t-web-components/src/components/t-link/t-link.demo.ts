import { ComponentDemos } from '../../types/ComponentDemos';

export const tLinkTestData = {
  internalLinkText: 'Intern lenke',
  externalLinkText: 'Ekstern lenke',
};

export const tLinkDemo: ComponentDemos = {
  internal: {
    componentName: 't-link',
    props: {
      href: '#',
    },
    children: [tLinkTestData.internalLinkText],
  },
  external: {
    componentName: 't-link',
    props: {
      href: '#',
      external: true,
    },
    children: [tLinkTestData.externalLinkText],
  },
};
