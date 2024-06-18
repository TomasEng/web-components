import { ComponentDemos } from '../../types/ComponentDemos';
import { TSourceItem } from '../../types/TSourceItem';

export const tArticleTestData = {
  heading: 'Lorem ipsum',
  source1: {
    authors: [{ forename: 'Robert C.', surname: 'Martin' }],
    title: 'Clean Code - A Handbook of Agile Software Craftsmanship',
    publisher: 'Prentice Hall',
    date: { year: 2008, month: 8 },
    isbn: '9780136083252, 0136083250',
  } satisfies TSourceItem,
  source1Id: 'cc',
  source2: {
    authors: [{ forename: 'John', surname: 'Doe' }],
    title: 'Test',
    date: { year: 2024, month: 5, day: 12 },
    url: 'https://example.com',
    journal: 'Test Journal',
  },
  source2Id: 'test',
};

export const tArticleDemo: ComponentDemos = {
  simple: {
    componentName: 't-article',
    props: {
      heading: tArticleTestData.heading,
    },
    children: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non dictum felis. Phasellus sit amet ' +
      'dolor magna. Etiam feugiat sodales mi molestie fringilla. Curabitur ut libero sed arcu pellentesque ornare. ' +
      'Nulla convallis metus vitae nisl semper consectetur. Aliquam viverra scelerisque lobortis. Ut eget turpis in ' +
      'tellus suscipit lobortis. Curabitur elementum blandit vestibulum. Vestibulum ante ipsum primis in faucibus ' +
      'orci luctus et ultrices posuere cubilia curae; Quisque elit nisl, congue ut lectus eu, efficitur malesuada ' +
      'felis. Integer maximus mauris vitae dolor accumsan, sollicitudin aliquet nibh consequat. Integer ullamcorper ' +
      'nibh at purus gravida lacinia.'
    ]
  },
  withSources: {
    componentName: 't-article',
    props: {
      heading: tArticleTestData.heading,
      publisheddate: '2022-02-01',
      sources: {
        [tArticleTestData.source1Id]: tArticleTestData.source1,
        [tArticleTestData.source2Id]: tArticleTestData.source2,
      },
    },
    children: [
      {
        componentName: 'p',
        children: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          {
            componentName: 't-source-ref',
            props: { sourceId: tArticleTestData.source2Id }
          },
          'Mauris ac nisl pellentesque, tempus metus non, pretium felis. Suspendisse potenti. Nullam laoreet, neque ' +
          'eu pharetra lobortis, diam ligula posuere augue, in imperdiet quam felis nec sem.',
          {
            componentName: 't-source-ref',
            props: { sourceId: tArticleTestData.source1Id }
          },
          'Suspendisse suscipit, dui nec volutpat porttitor, sapien turpis pharetra elit, et cursus ante nisi eu ' +
          'nunc. Phasellus facilisis nunc arcu, eget laoreet purus vehicula sit amet. Curabitur convallis, metus ' +
          'finibus tristique viverra, nunc sem suscipit orci, nec gravida leo risus nec orci. Aenean pretium, eros ' +
          'eget blandit tristique, quam tellus porttitor felis, non molestie neque ipsum et leo. Etiam tincidunt, ' +
          'massa vitae bibendum posuere, arcu orci aliquam dolor, a viverra ligula lectus at ante.'
        ],
      },
      {
        componentName: 'p',
        children: [
          'Cras iaculis sapien nec nisl luctus viverra. Integer eget dui ipsum.',
          {
            componentName: 't-source-ref',
            props: { sourceId: tArticleTestData.source2Id }
          },
          'Pellentesque vel efficitur risus. Phasellus libero ante, porttitor non consequat id, euismod quis sem. ' +
          'Maecenas egestas mi quis est mattis, a ultricies nulla fermentum. Sed venenatis ultricies pellentesque. ' +
          'Integer varius ipsum dolor, placerat consectetur magna blandit nec. Donec et tortor metus. Nullam libero ' +
          'lacus, vulputate nec massa non, hendrerit sodales sapien. Aenean pellentesque sapien sed diam dapibus ' +
          'dignissim. Morbi sodales massa ut suscipit mollis. Aliquam id velit non dui congue convallis eget eget ' +
          'augue. Duis dignissim lectus eros, eu molestie nibh scelerisque vel. Nullam scelerisque ultrices felis id ' +
          'euismod. Etiam enim nisi, dignissim et odio eu, tristique tempor magna.'
        ]
      }
    ],
  }
};
