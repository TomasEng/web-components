import { FunctionalComponent, h } from '@stencil/core';
import { SvgTemplate } from './SvgTemplate';
import { IconProps } from './IconProps';

const dFilled = 'M14.824 3.115a.75.75 0 0 1 .81-.165A9.753 9.753 0 0 1 21.75 12c0 5.385-4.365 9.75-9.75 9.75a9.753 9.753 0 0 1-9.05-6.116.75.75 0 0 1 .975-.976A8.25 8.25 0 0 0 14.658 3.925a.75.75 0 0 1 .166-.81Z';
const dUnfilled = 'M14.824 3.115a.75.75 0 0 1 .81-.165A9.753 9.753 0 0 1 21.75 12c0 5.385-4.365 9.75-9.75 9.75a9.753 9.753 0 0 1-9.05-6.116.75.75 0 0 1 .975-.976A8.25 8.25 0 0 0 14.658 3.925a.75.75 0 0 1 .166-.81Zm1.747 2.016c.117.605.179 1.23.179 1.869 0 5.385-4.365 9.75-9.75 9.75a9.803 9.803 0 0 1-1.87-.18A8.25 8.25 0 1 0 16.57 5.13Z';

export const MoonIcon: FunctionalComponent<IconProps> = ({ fill, ...rest }) => (
  <SvgTemplate {...rest}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d={fill ? dFilled : dUnfilled}
      fill="currentColor"
    />
  </SvgTemplate>
);
