import { h } from '@stencil/core';
import { IconProps } from './IconProps';
import { SvgTemplate } from './SvgTemplate';

export const ChevronLeftIcon = ({ fill, ...rest }: IconProps) => (
  <SvgTemplate {...rest}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.53 5.97a.75.75 0 0 1 0 1.06L9.56 12l4.97 4.97a.75.75 0 1 1-1.06 1.06l-5.5-5.5a.75.75 0 0 1 0-1.06l5.5-5.5a.75.75 0 0 1 1.06 0Z"
      fill="currentColor"
    />
  </SvgTemplate>
);
