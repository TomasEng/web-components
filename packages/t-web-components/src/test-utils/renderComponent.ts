import { Page } from '@playwright/test';

export const renderComponent = (page: Page, html: string, script?: string) => {
    return page.goto('http://localhost:3333/?html=' + html + '&script=' + script);
}
