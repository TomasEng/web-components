import { Page } from '@playwright/test';
import { ComponentTestCode, ComponentTestCodeConfig } from './ComponentTestCode';

export const renderComponent = (page: Page, config: ComponentTestCodeConfig) => {
  const html = new ComponentTestCode(config).generateHtml();
  const script = new ComponentTestCode(config).generateScript();
  return renderComponentCode(page, html, script);
}

const renderComponentCode = (page: Page, html: string, script?: string) => {
  const url = 'http://localhost:3333/?html=' + html + (script ? '&script=' + script : '');
  console.log(`Testing ${url}`);
  return page.goto(url);
};
