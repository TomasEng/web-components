import { ComponentDemos } from '../../types/ComponentDemos';

export const tTableOfContentsDemo: ComponentDemos = {
  default: {
    componentName: 't-table-of-contents',
    props: { label: 'Overskrift' }
  },
  inArticle: {
    componentName: 'div',
    children: [
      {
        componentName: 't-table-of-contents',
        props: { label: 'Innhold' },
      },
      {
        componentName: 't-article',
        props: {
          heading: 'Lorem ipsum',
        },
        children: [
          {
            componentName: 'p',
            children: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.']
          },
          {
            componentName: 't-heading',
            props: { level: 2 },
            children: ['Morbi turpis']
          },
          {
            componentName: 'p',
            children: ['Quisque venenatis nisl sit amet hendrerit malesuada.']
          },
          {
            componentName: 't-heading',
            props: { level: 3 },
            children: ['Class aptent']
          },
          {
            componentName: 'p',
            children: ['Nulla vulputate et lorem in viverra.']
          },
          {
            componentName: 't-heading',
            props: { level: 2 },
            children: ['Nunc viverra']
          },
          {
            componentName: 'p',
            children: ['Morbi in pellentesque libero.']
          },
          {
            componentName: 't-heading',
            props: { level: 3 },
            children: ['Nam dignissim']
          },
          {
            componentName: 'p',
            children: ['Vivamus vehicula elementum luctus.']
          },
          {
            componentName: 't-heading',
            props: { level: 3 },
            children: ['Proin eu']
          },
          {
            componentName: 'p',
            children: ['Aenean ligula magna, ultrices eu feugiat non, luctus sit amet est.']
          },
          {
            componentName: 't-heading',
            props: { level: 2 },
            children: ['Mauris faucibus']
          },
          {
            componentName: 'p',
            children: ['Sed placerat quam laoreet, accumsan augue sit amet, posuere elit.']
          },
          {
            componentName: 't-heading',
            props: { level: 3 },
            children: ['Aenean viverra']
          },
          {
            componentName: 'p',
            children: ['Fusce vel tortor a turpis tristique vehicula a eget mi.']
          },
          {
            componentName: 't-heading',
            props: { level: 4 },
            children: ['Quisque sed']
          },
          {
            componentName: 'p',
            children: ['Integer ac fermentum nibh.']
          },
          {
            componentName: 't-heading',
            props: { level: 3 },
            children: ['Nunc a']
          },
          {
            componentName: 'p',
            children: ['Nunc velit sapien, ullamcorper ac bibendum ac, pellentesque viverra enim.']
          },
          {
            componentName: 't-heading',
            props: { level: 2 },
            children: ['Praesent dapibus']
          },
          {
            componentName: 'p',
            children: ['Ut elementum finibus lacinia.']
          },
          {
            componentName: 't-heading',
            props: { level: 3 },
            children: ['Nunc ut']
          },
          {
            componentName: 'p',
            children: ['Etiam pulvinar felis auctor magna malesuada, ut luctus enim consequat.']
          },
          {
            componentName: 't-heading',
            props: { level: 3 },
            children: ['Maecenas dapibus']
          },
          {
            componentName: 'p',
            children: ['Phasellus porta elit eget nibh semper mattis. Fusce in tortor non mi ultricies lacinia vitae id nulla.']
          }
        ]
      }
    ]
  }
}
