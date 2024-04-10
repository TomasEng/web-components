import { JSXBase } from '@stencil/core/internal';
import SVGAttributes = JSXBase.SVGAttributes;

export type IconProps = {
  fill?: boolean;
} & Omit<SVGAttributes, 'fill'>;
