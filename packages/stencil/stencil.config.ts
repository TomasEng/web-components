import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'web-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: 'stencil',
      proxiesFile: '../react/lib/components/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
  globalStyle: 'src/style/global.css',
};
