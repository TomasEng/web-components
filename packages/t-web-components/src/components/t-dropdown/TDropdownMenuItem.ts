import { VNode } from '@stencil/core';
import { ButtonAttributes } from '../../types/HTMLAttributes';

export type TDropdownMenuItem = {
  label: string;
  action?: (event: MouseEvent) => void;
  selected?: boolean;
  icon?: VNode;
  buttonAttributes?: ButtonAttributes;
}
