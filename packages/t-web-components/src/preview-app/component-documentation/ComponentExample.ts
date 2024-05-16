import { ComponentTestCodeConfig } from '../../test-utils/ComponentTestCode';
import { PreviewMode } from './PreviewMode';

export type ComponentExample = {
  title?: string;
  description?: string;
  previewMode: PreviewMode;
  code: ComponentTestCodeConfig;
};
