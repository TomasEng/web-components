import { test, expect, Page } from '@playwright/test';
import { renderComponent } from '../../test-utils/renderComponent';


const buttonLabel = 'Velg';
const html = `<t-dropdown-menu label="${buttonLabel}"></t-dropdown-menu>`;

const logValues: { [key: string]: string } = {
  rod: 'Rød',
  bla: 'Blå',
  gronn: 'Grønn valgt',
};

const script = `
      const dropdown = document.querySelector('t-dropdown-menu');
      dropdown.items = [
        {label: 'Rød', action: () => console.log('${logValues.rod}')},
        {label: 'Blå', action: () => console.log('${logValues.bla}')},
        {label: 'Grønn', action: () => console.log('${logValues.gronn}')},
      ];
    `.replace(/\n/g, '');

const filterLog = (log: string[]) => log.filter((msg) => Object.values(logValues).includes(msg));

const renderDropdown = (page: Page) => renderComponent(page, html, script);

test.describe('t-dropdown-menu', () => {
  test('Laster nedtrekksmeny', async ({ page }) => {
    const consoleLog: string[] = [];
    page.on('console', msg => consoleLog.push(msg.text()));

    await renderDropdown(page);
    await expect(page.getByRole('list')).not.toBeVisible();
    const dropdown = page.getByRole('button', { name: buttonLabel });
    await dropdown.click();
    const menu = page.getByRole('list');
    await expect(menu).toBeVisible();
    expect(filterLog(consoleLog)).toEqual([]);
    const redButton = page.getByRole('button', { name: 'Rød' });
    await redButton.click();
    expect(filterLog(consoleLog)).toEqual([logValues.rod]);
    await expect(page.getByRole('list')).not.toBeVisible();
  });

  test('Er navigerbar med piltaster', async ({ page }) => {
    const consoleLog: string[] = [];
    page.on('console', msg => consoleLog.push(msg.text()));
    await renderDropdown(page);
    const dropdown = page.getByRole('button', { name: buttonLabel });
    await dropdown.press('Enter');
    const menu = page.getByRole('list');
    await expect(menu).toBeVisible();
    expect(filterLog(consoleLog)).toEqual([]);
    await menu.press('ArrowDown');
    await menu.press('ArrowDown');
    await menu.press('Enter');
    expect(filterLog(consoleLog)).toEqual([logValues.bla]);
    await expect(page.getByRole('list')).not.toBeVisible();
  });

  test('Lukker meny ved klikk på Escape-knappen', async ({ page }) => {
    await renderDropdown(page);
    const dropdown = page.getByRole('button', { name: buttonLabel });
    await dropdown.press('Enter');
    const menu = page.getByRole('list');
    await expect(menu).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(menu).not.toBeVisible();
  });

  test('Lukker meny ved klikk utenfor', async ({ page }) => {
    await renderDropdown(page);
    const dropdown = page.getByRole('button', { name: buttonLabel });
    await dropdown.press('Enter');
    const menu = page.getByRole('list');
    await expect(menu).toBeVisible();
    await page.mouse.click(0, 0);
    await expect(menu).not.toBeVisible();
  });

  test('Fokuserer på øverste element ved klikk på ned-knapp', async ({ page }) => {
    await renderDropdown(page);
    const dropdown = page.getByRole('button', { name: buttonLabel });
    await dropdown.press('ArrowDown');
    const firstItem = page.getByRole('button', { name: 'Rød' });
    await expect(firstItem).toBeFocused();
  });

  test('Fokuserer på nederste element ved klikk på opp-knapp', async ({ page }) => {
    await renderDropdown(page);
    const dropdown = page.getByRole('button', { name: buttonLabel });
    await dropdown.press('ArrowUp');
    const lastItem = page.getByRole('button', { name: 'Grønn' });
    await expect(lastItem).toBeFocused();
  });
});
