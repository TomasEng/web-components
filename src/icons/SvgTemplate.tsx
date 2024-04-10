import { h, FunctionalComponent } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
import SVGAttributes = JSXBase.SVGAttributes;

export const SvgTemplate: FunctionalComponent<SVGAttributes> = (props, children) => (
  <svg
    fill="none"
    focusable="false"
    height="1em"
    role="img"
    viewBox="0 0 24 24"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </svg>
);
