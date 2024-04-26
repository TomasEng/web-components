import { test, expect } from '@playwright/test';
import { renderComponent } from '../../test-utils/renderComponent';

test.describe('t-dropdown-menu', () => {
  test('Laster nedtrekksmeny', async ({ page }) => {
    const consoleLog: string[] = [];
    page.on('console', msg => consoleLog.push(msg.text()));
    const buttonLabel = 'Velg';
    const html = `<t-dropdown-menu label="${buttonLabel}"></t-dropdown-menu>`;

    const logValues: { [key: string]: string } = {
      rod: 'Rød',
      bla: 'Blå',
      gronn: 'Grønn valgt',
    };
    const filterLog = (log: string[]) => log.filter((msg) => Object.values(logValues).includes(msg));

    const script = `
      const dropdown = document.querySelector('t-dropdown-menu');
      dropdown.items = [
        {label: 'Rød', action: () => console.log('${logValues.rod}')},
        {label: 'Blå', action: () => console.log('${logValues.bla}')},
        {label: 'Grønn', action: () => console.log('${logValues.gronn}')},
      ];
    `.replace(/\n/g, '');

    await renderComponent(page, html, script);
    const dropdown = page.getByRole('button', { name: buttonLabel });
    await dropdown.click();
    const menu = page.getByRole('list');
    await expect(menu).toBeVisible();
    expect(filterLog(consoleLog)).toEqual([]);
    const redButton = page.getByRole('button', { name: 'Rød' });
    await redButton.click();
    expect(filterLog(consoleLog)).toEqual([logValues.rod]);
  });
});
