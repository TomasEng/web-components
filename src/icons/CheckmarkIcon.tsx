import { h } from '@stencil/core';
import { IconProps } from './IconProps';
import { SvgTemplate } from './SvgTemplate';

export const CheckmarkIcon = ({fill, ...rest}: IconProps) => (
  <SvgTemplate {...rest}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939Z"
      fill="currentColor"
    />
  </SvgTemplate>
);
