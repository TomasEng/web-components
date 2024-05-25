import { test, expect, Page } from '@playwright/test';
import { renderComponent } from '../../test-utils/renderComponent';
import { tTabsDemo, tTabsTestData } from './t-tabs.demo';

const renderTabs = (page: Page) => renderComponent(page, tTabsDemo.simple);

test.describe('t-tabs', () => {
  test('Laster faner', async ({ page }) => {
    await renderTabs(page);
    await expect(page.getByRole('tablist')).toBeVisible();
    const tabs = await page.getByRole('tab').all();
    expect(tabs).toHaveLength(3);
    await expect(tabs[0]).toHaveText(tTabsTestData.items[0].heading);
    await expect(tabs[1]).toHaveText(tTabsTestData.items[1].heading);
    await expect(tabs[2]).toHaveText(tTabsTestData.items[2].heading);
    const tabpanel = page.getByRole('tabpanel');
    await expect(tabpanel).toBeVisible();
  });

  test('Velger første fane som standard', async ({ page }) => {
    await renderTabs(page);
    await expect(page.getByRole('tablist')).toBeVisible();
    const tabs = await page.getByRole('tab').all();
    await expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    await expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
    await expect(tabs[2]).toHaveAttribute('aria-selected', 'false');
    const tabpanel = page.getByRole('tabpanel');
    await expect(tabpanel).toHaveText(tTabsTestData.items[0].content);
  });

  test('Velger fanen som det klikkes på', async ({ page }) => {
    await renderTabs(page);
    await expect(page.getByRole('tablist')).toBeVisible();
    const tabs = await page.getByRole('tab').all();
    await tabs[1].click();
    await expect(tabs[0]).toHaveAttribute('aria-selected', 'false');
    await expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
    await expect(tabs[2]).toHaveAttribute('aria-selected', 'false');
    const tabpanel = page.getByRole('tabpanel');
    await expect(tabpanel).toHaveText(tTabsTestData.items[1].content);
  });

  test('Er navigerbar med piltaster', async ({ page }) => {
    await renderTabs(page);
    await expect(page.getByRole('tablist')).toBeVisible();
    const tabs = await page.getByRole('tab').all();
    await tabs[0].focus();
    await page.keyboard.press('ArrowRight');
    await expect(tabs[1]).toBeFocused();
    await expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
    await page.keyboard.press('Enter');
    await expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
    await page.keyboard.press('ArrowRight');
    await expect(tabs[2]).toBeFocused();
    await page.keyboard.press('ArrowRight');
    await expect(tabs[2]).toBeFocused();
    await page.keyboard.press('ArrowLeft');
    await expect(tabs[1]).toBeFocused();
  });
});
