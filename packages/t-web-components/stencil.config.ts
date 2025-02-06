import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 't-web-components',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'assets', dest: 'assets' },
      ],
    },
    reactOutputTarget({
      componentCorePackage: 't-web-components',
      proxiesFile: '../t-web-components-react/lib/components/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
  globalStyle: 'src/style/global.css',
  extras: {
    experimentalSlotFixes: true,
    enableImportInjection: true, // Must be set to work in production mode with Vite; see https://github.com/vitejs/vite/issues/12434
  },
};
