import { test, expect, Page } from '@playwright/test';
import { renderComponent } from '../../test-utils/renderComponent';
import { ComponentTestCodeConfig } from '../../test-utils/ComponentTestCode';


const buttonLabel = 'Velg';

const logValues: { [key: string]: string } = {
  rod: 'Rød',
  bla: 'Blå',
  gronn: 'Grønn',
};

const componentConfig: ComponentTestCodeConfig = {
  componentName: 't-dropdown-menu',
  props: {
    label: buttonLabel,
    items: [
      { label: 'Rød', action: () => console.log('Rød') },
      { label: 'Blå', action: () => console.log('Blå') },
      { label: 'Grønn', action: () => console.log('Grønn') },
    ],
  },
};

const filterLog = (log: string[]) => log.filter((msg) => Object.values(logValues).includes(msg));

const renderDropdown = (page: Page) => renderComponent(page, componentConfig);

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

  test('Fokuserer på neste element ved klikk på ned-knapp', async ({ page }) => {
    await renderDropdown(page);
    const dropdown = page.getByRole('button', { name: buttonLabel });
    await dropdown.press('ArrowDown');
    const firstItem = page.getByRole('button', { name: 'Rød' });
    await expect(firstItem).toBeFocused();
    await page.keyboard.press('ArrowDown');
    const secondItem = page.getByRole('button', { name: 'Blå' });
    await expect(secondItem).toBeFocused();
  });

  test('Fokuserer på forrige element ved klikk på opp-knapp', async ({ page }) => {
    await renderDropdown(page);
    const dropdown = page.getByRole('button', { name: buttonLabel });
    await dropdown.press('ArrowUp');
    const lastItem = page.getByRole('button', { name: 'Grønn' });
    await expect(lastItem).toBeFocused();
    await page.keyboard.press('ArrowUp');
    const secondLastItem = page.getByRole('button', { name: 'Blå' });
    await expect(secondLastItem).toBeFocused();
  });

  test('Lukker meny ved klikk på element', async ({ page }) => {
    await renderDropdown(page);
    const dropdown = page.getByRole('button', { name: buttonLabel });
    await dropdown.press('Enter');
    const menu = page.getByRole('list');
    await expect(menu).toBeVisible();
    const firstItem = page.getByRole('button', { name: 'Rød' });
    await firstItem.click();
    await expect(menu).not.toBeVisible();
  });

  test('Lukker meny ved trykk på Escape-knappen', async ({ page }) => {
    await renderDropdown(page);
    const dropdown = page.getByRole('button', { name: buttonLabel });
    await dropdown.press('Enter');
    const menu = page.getByRole('list');
    await expect(menu).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(menu).not.toBeVisible();
  });
});
