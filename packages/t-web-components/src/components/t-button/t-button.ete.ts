import { test, expect } from '@playwright/test';
import { renderComponent } from '../../test-utils/renderComponent';
import { ComponentTestCodeConfig } from '../../test-utils/ComponentTestCode';

test.describe('t-button', () => {
  test('Laster knapp med gitt tekst', async ({ page }) => {
    const tekst = 'Klikk meg';
    const componentConfig: ComponentTestCodeConfig = {
      componentName: 't-button',
      children: [tekst]
    };
    await renderComponent(page, componentConfig);
    const button = page.getByRole('button', { name: tekst });
    await expect(button).toBeVisible();
  });
});
