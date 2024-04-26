import { test, expect } from '@playwright/test';
import { renderComponent } from '../../test-utils/renderComponent';

test.describe('t-button', () => {
  test('Laster knapp med gitt tekst', async ({ page }) => {
    const tekst = 'Klikk meg';
    await renderComponent(page, `<t-button>${tekst}</t-button>`);
    const button = page.getByRole('button', { name: tekst });
    await expect(button).toBeVisible();
  });
});
