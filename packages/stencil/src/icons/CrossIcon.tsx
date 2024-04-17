import { h } from '@stencil/core';
import { IconProps } from './IconProps';
import { SvgTemplate } from './SvgTemplate';

export const CrossIcon = ({ fill, ...rest }: IconProps) => (
  <SvgTemplate {...rest}>
    <path
      d="M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94 6.53 5.47Z"
      fill="currentColor"
    />
  </SvgTemplate>
);
