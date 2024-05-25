import { Page } from '@playwright/test';
import { ComponentTestCode, ComponentTestCodeConfig } from './ComponentTestCode';

export const renderComponent = (page: Page, config: ComponentTestCodeConfig) => {
  const componentTestCode = new ComponentTestCode(config);
  const html = componentTestCode.generateHtml();
  const script = componentTestCode.generateScript();
  return renderComponentCode(page, html, script);
}

const renderComponentCode = (page: Page, html: string, script?: string) => {
  const htmlEncoded = encodeURIComponent(html);
  const scriptEncoded = script ? encodeURIComponent(script) : '';
  const url = 'http://localhost:3333/?html=' + htmlEncoded + (script ? '&script=' + scriptEncoded : '');
  console.log(`Testing ${url}`);
  return page.goto(url);
};
