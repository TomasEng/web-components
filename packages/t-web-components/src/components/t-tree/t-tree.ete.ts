import { test, expect, Page } from '@playwright/test';
import { renderComponent } from '../../test-utils/renderComponent';
import { tTreeDemo, tTreeTestData } from './t-tree.demo';

const renderTree = (page: Page) => renderComponent(page, tTreeDemo.withLinks);

test.describe('t-tree', () => {
  test('Laster rotelement', async ({ page }) => {
    await renderTree(page);
    await expect(page.getByRole('tree')).toBeVisible();
  });

  test('Laster treet', async ({ page }) => {
    await renderTree(page);
    await expect(page.getByRole('tree')).toBeVisible();
    const firstItem = page.getByRole('treeitem', { name: tTreeTestData.item1Label, exact: true });
    await expect(firstItem).toBeVisible();
    const secondItem = page.getByRole('treeitem', { name: tTreeTestData.item2Label, exact: true });
    await expect(secondItem).toBeVisible();
    const thirdItem = page.getByRole('treeitem', { name: tTreeTestData.item3Label, exact: true });
    await expect(thirdItem).toBeVisible();
  });

  test('Har alt lukket som standard', async ({ page }) => {
    await renderTree(page);
    await expect(page.getByRole('tree')).toBeVisible();
    const parentItem = page.getByRole('treeitem', { name: tTreeTestData.item2Label, exact: true });
    await expect(parentItem).toBeVisible();
    await expect(parentItem).toHaveAttribute('aria-expanded', 'false');
    const childItem = page.getByRole('treeitem', { name: tTreeTestData.subitem21Label, exact: true });
    await expect(childItem).toBeHidden();
  });

  test('Åpner elementet når brukeren klikker på pilen', async ({ page }) => {
    await renderTree(page);
    await expect(page.getByRole('tree')).toBeVisible();
    const parentItem = page.getByRole('treeitem', { name: tTreeTestData.item2Label, exact: true });
    await expect(parentItem).toBeVisible();
    const arrow = parentItem.getByRole('img');
    await arrow.click();
    await expect(parentItem).toHaveAttribute('aria-expanded', 'true');
    const childItem = page.getByRole('treeitem', { name: tTreeTestData.subitem21Label, exact: true });
    await expect(childItem).toBeVisible();
  });

  test('Åpner lenken når brukeren klikker på elementet', async ({ page }) => {
    await renderTree(page);
    const item = page.getByRole('treeitem', { name: tTreeTestData.item2Label, exact: true });
    await expect(item).toBeVisible();
    const link = item.getByRole('link');
    await link.click();
    await expect(page).toHaveURL(new RegExp(tTreeTestData.item2Href + '$'));
  });

  test('Fungerer med tastaturnavigasjon', async ({ page }) => {
    await renderTree(page);
    const firstItem = page.getByRole('treeitem', { name: tTreeTestData.item1Label, exact: true });
    await firstItem.getByRole('link').focus();
    await expect(firstItem.getByRole('link')).toBeFocused();
    await page.keyboard.press('ArrowUp');
    await expect(firstItem.getByRole('link')).toBeFocused();
    await page.keyboard.press('ArrowDown');
    const secondItem = page.getByRole('treeitem', { name: tTreeTestData.item2Label, exact: true });
    await expect(secondItem.getByRole('link')).toBeFocused();
    await page.keyboard.press('ArrowDown');
    const thirdItem = page.getByRole('treeitem', { name: tTreeTestData.item3Label, exact: true });
    await expect(thirdItem.getByRole('link')).toBeFocused();
    await page.keyboard.press('ArrowDown');
    await expect(thirdItem.getByRole('link')).toBeFocused();
    await page.keyboard.press('ArrowUp');
    await expect(secondItem.getByRole('link')).toBeFocused();
    await page.keyboard.press('ArrowRight');
    await expect(secondItem).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('ArrowDown');
    const childItem = page.getByRole('treeitem', { name: tTreeTestData.subitem21Label, exact: true });
    await expect(childItem.getByRole('link')).toBeFocused();
    await expect(childItem).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('ArrowRight');
    await expect(childItem).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('ArrowLeft');
    await expect(childItem).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('ArrowDown');
    const secondChildItem = page.getByRole('treeitem', { name: tTreeTestData.subitem22Label, exact: true });
    await expect(secondChildItem.getByRole('link')).toBeFocused();
    await page.keyboard.press('ArrowLeft');
    await expect(secondItem.getByRole('link')).toBeFocused();
    await expect(secondItem).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Home');
    await expect(firstItem.getByRole('link')).toBeFocused();
    await page.keyboard.press('End');
    await expect(thirdItem.getByRole('link')).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(new RegExp(tTreeTestData.item3Href + '$'));
  });

  test('Laster treet med gitt overskrift', async ({ page }) => {
    await renderComponent(page, tTreeDemo.withLabel);
    const tree = page.getByRole('tree', { name: tTreeTestData.mainLabel });
    await expect(tree).toBeVisible();
  });
});
