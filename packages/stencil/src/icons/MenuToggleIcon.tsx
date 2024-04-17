import { FunctionalComponent, h } from '@stencil/core';
import { SvgTemplate } from './SvgTemplate';
import { IconProps } from './IconProps';

export const MenuToggleIcon: FunctionalComponent<IconProps> = ({ fill, ...rest }) => (
  <SvgTemplate {...rest}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.75 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 2.75 6Zm0 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17a.75.75 0 0 1-.75-.75Zm.75 5.25a.75.75 0 0 0 0 1.5h17a.75.75 0 0 0 0-1.5h-17Z"
      fill="currentColor"
    />
  </SvgTemplate>
);
