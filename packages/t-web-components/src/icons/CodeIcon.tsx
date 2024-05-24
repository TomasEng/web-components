import { h } from '@stencil/core';
import { IconProps } from './IconProps';
import { SvgTemplate } from './SvgTemplate';

export const CodeIcon = ({ fill, ...rest }: IconProps) => (
  <SvgTemplate {...rest}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.03 9.03a.75.75 0 1 0-1.06-1.06l-3.5 3.5a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 1 0 1.06-1.06L7.06 12l2.97-2.97Zm5-1.06a.75.75 0 1 0-1.06 1.06L16.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06l3.5-3.5a.75.75 0 0 0 0-1.06l-3.5-3.5Z"
        fill="currentColor"
      />
  </SvgTemplate>
);
