/**
 * This must be a separate file because Stencil does not allow importing JSXBase directly in component files for some reason.
 */

import { JSXBase } from '@stencil/core/internal';
import ButtonHTMLAttributes = JSXBase.ButtonHTMLAttributes;

type DataAttributeKey = `data-${string}`;
type DataAttributes = Record<DataAttributeKey, string>;

type AriaAttributeKey = `aria-${string}`;
type AriaAttributes = Record<AriaAttributeKey, string>;

export type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement> & DataAttributes & AriaAttributes;
