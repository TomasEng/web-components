import { Page } from '@playwright/test';

export const renderComponent = (page: Page, html: string, script?: string) => {
  const url = 'http://localhost:3333/?html=' + html + (script ? '&script=' + script : '');
  console.log(`Testing ${url}`);
  return page.goto(url);
};
