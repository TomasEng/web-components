import { test, expect } from '@playwright/test';
import { renderComponent } from '../../test-utils/renderComponent';
import { tButtonDemo, tButtonTestData } from './t-button.demo';

test.describe('t-button', () => {
  test('Laster knapp med gitt tekst', async ({ page }) => {
    await renderComponent(page, tButtonDemo.simple);
    const button = page.getByRole('button', { name: tButtonTestData.text });
    await expect(button).toBeVisible();
  });
});
