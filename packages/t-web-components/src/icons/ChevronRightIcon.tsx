import { h } from '@stencil/core';
import { IconProps } from './IconProps';
import { SvgTemplate } from './SvgTemplate';

export const ChevronRightIcon = ({ fill, ...rest }: IconProps) => (
  <SvgTemplate {...rest}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.47 5.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06L14.44 12 9.47 7.03a.75.75 0 0 1 0-1.06Z"
      fill="currentColor"
    />
  </SvgTemplate>
);
