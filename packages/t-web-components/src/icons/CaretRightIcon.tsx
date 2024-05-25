import { h } from '@stencil/core';
import { IconProps } from './IconProps';
import { SvgTemplate } from './SvgTemplate';

const dFilled = 'M9.713 18.193a.75.75 0 0 1-.463-.693v-11a.75.75 0 0 1 1.28-.53l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 0 1-.817.163Z';
const dUnfilled = 'M9.713 18.193a.75.75 0 0 1-.463-.693v-11a.75.75 0 0 1 1.28-.53l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 0 1-.817.163Zm1.037-2.504L14.44 12l-3.69-3.69v7.38Z';

export const CaretRightIcon = ({fill, ...rest}: IconProps) => (
  <SvgTemplate {...rest}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d={fill ? dFilled : dUnfilled}
      fill="currentColor"
    />
  </SvgTemplate>
);
