import { ComponentDemos } from '../../types/ComponentDemos';
import { TArticleListItem } from './TArticleListItem';

export const tArticleListTestData = {
  item1: {
    href: '#',
    title: 'Lorem ipsum',
    intro: 'Lorem ipsum dolor sit amet',
    date: {
      type: 'date',
      input: '2020-01-01T12:00:00Z',
    }
  },
  item2: {
    href: '#',
    title: 'Lorem ipsum dolor sit amet',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra mauris sit amet varius sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet quam in mauris mattis sollicitudin. Maecenas interdum, tortor non congue varius, erat nibh ornare ligula, non ultricies risus mi quis ipsum. Integer efficitur quis nisl sit amet fringilla. Duis consequat congue mi, vel vehicula mauris facilisis eu. Aliquam accumsan bibendum ante quis fermentum. Aenean ac tincidunt leo. Proin id ipsum et libero posuere volutpat semper ut dolor.',
    date: { type: 'date' },
  },
  item3: {
    href: '#',
    title: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse faucibus erat ut velit aliquet mattis. Nunc vitae lectus ac urna fermentum consectetur vitae quis enim. Vivamus scelerisque, neque id fermentum ultrices, diam est fermentum quam, eu ornare diam sem vel nisl. Nullam porta tortor nisi, ut aliquam est cursus id. Aliquam turpis nisl, feugiat a massa vitae, efficitur viverra sapien. Cras sed suscipit tellus. Nunc pretium massa vitae ante euismod iaculis. Praesent pellentesque at libero eu lacinia.',
    intro: 'In hac habitasse platea dictumst. Maecenas eget justo ut velit imperdiet viverra eget vitae lectus. Curabitur at fringilla augue, ac tristique libero. Vivamus consectetur nisl a facilisis auctor. Integer sed purus nisi. Fusce in ligula convallis, auctor sapien non, mattis turpis. Morbi vitae elementum lectus, egestas suscipit nisl. Morbi imperdiet eleifend magna ac varius.',
    date: { type: 'date' },
  },
  item4: {
    href: '#',
    title: 'Morbi auctor, ligula nec malesuada ultricies, purus metus ultricies metus, nec tincidunt nunc turpis ut ligula.',
    intro: 'Sed sit amet nunc et nunc lacinia tincidunt. Integer auctor, lorem nec ultricies ultricies, orci dui convallis purus, eget fermentum velit neque nec dui.',
  } satisfies TArticleListItem,
};

export const tArticleListDemo: ComponentDemos = {
  simple: {
    componentName: 't-article-list',
    props: {
      items: [
        tArticleListTestData.item1,
        tArticleListTestData.item2,
        tArticleListTestData.item3,
        tArticleListTestData.item4,
      ],
    },
  }
};
