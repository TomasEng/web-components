import { test, expect, Page } from '@playwright/test';
import { renderComponent } from '../../test-utils/renderComponent';
import { TOOLTIP_HIDE_DELAY_MILLISECONDS } from '../../constants';

test.describe('t-tooltip', () => {

  const tekst = 'Klikk meg';
  const innhold = 'Lorem ipsum';
  const html = `
      <t-tooltip>
        <span slot="trigger">${tekst}</span>
        <span slot="content">${innhold}</span>
      </t-tooltip>
    `;

  const renderTooltip = (page: Page) => renderComponent(page, html);

  test('Viser verktøyhjelp når musen beveges over og skjuler den etter en tid når musen beveges bort', async ({ page }) => {
    await renderTooltip(page);
    const button = page.getByRole('button', { name: tekst });
    await expect(button).toBeVisible();
    const buttonBox = await button.boundingBox();
    const buttonCenterX = buttonBox.x + buttonBox.width / 2;
    const buttonCenterY = buttonBox.y + buttonBox.height / 2;
    await expect(page.getByRole('tooltip')).not.toBeVisible();
    await page.mouse.move(buttonCenterX, buttonCenterY);
    await expect(page.getByRole('tooltip')).toBeVisible();
    await page.mouse.move(buttonBox.height * 2, buttonBox.width * 2);
    await expect(page.getByRole('tooltip')).toBeVisible();
    await page.waitForTimeout(TOOLTIP_HIDE_DELAY_MILLISECONDS);
    await expect(page.getByRole('tooltip')).not.toBeVisible();
  });

  test('Viser verktøyhjelp når knappen fokuseres og skjuler den når knappen mister fokus', async ({ page }) => {
    await renderTooltip(page);
    const button = page.getByRole('button', { name: tekst });
    await button.focus();
    await expect(page.getByRole('tooltip')).toBeVisible();
    await button.blur();
    await expect(page.getByRole('tooltip')).not.toBeVisible();
  });

  test('Skjuler verktøyhjelp når det blir klikket utenfor', async ({ page }) => {
    await renderTooltip(page);
    const button = page.getByRole('button', { name: tekst });
    await button.focus();
    const tooltip = page.getByRole('tooltip');
    await expect(tooltip).toBeVisible();
    const tooltipBox = await tooltip.boundingBox();
    await page.mouse.click(tooltipBox.width * 2, tooltipBox.height * 2);
    await expect(page.getByRole('tooltip')).not.toBeVisible();
  });

  test('Skjuler verktøyhjelp når Escape-tasten trykkes', async ({ page }) => {
    await renderTooltip(page);
    const button = page.getByRole('button', { name: tekst });
    await button.focus();
    await expect(page.getByRole('tooltip')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('tooltip')).not.toBeVisible();
  });
});
