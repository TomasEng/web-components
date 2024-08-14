import { JSXBase } from '@stencil/core/internal';
import HTMLAttributes = JSXBase.HTMLAttributes;

export type TArticleListItem = {
  title: string;
  intro: string;
  date?: Date;
  href: string;
} & HTMLAttributes<HTMLAnchorElement>;
