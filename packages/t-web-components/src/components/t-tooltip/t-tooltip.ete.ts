import { test, expect, Page } from '@playwright/test';
import { renderComponent } from '../../test-utils/renderComponent';
import { TOOLTIP_HIDE_DELAY_MILLISECONDS } from '../../constants';
import { tTooltipDemo, tTooltipTestData } from './t-tooltip.demo';

test.describe('t-tooltip', () => {

  const renderTooltip = (page: Page) => renderComponent(page, tTooltipDemo.default);

  test('Viser verktøyhjelp når musen beveges over og skjuler den etter en tid når musen beveges bort', async ({ page }) => {
    await renderTooltip(page);
    const trigger = page.getByText(tTooltipTestData.triggerText);
    await expect(trigger).toBeVisible();
    const triggerBox = await trigger.boundingBox();
    const triggerCenterX = triggerBox.x + triggerBox.width / 2;
    const triggerCenterY = triggerBox.y + triggerBox.height / 2;
    await expect(page.getByRole('tooltip')).not.toBeVisible();
    await page.mouse.move(triggerCenterX, triggerCenterY);
    await expect(page.getByRole('tooltip')).toBeVisible();
    await page.mouse.move(triggerBox.height * 2, triggerBox.width * 2);
    await expect(page.getByRole('tooltip')).toBeVisible();
    await page.waitForTimeout(TOOLTIP_HIDE_DELAY_MILLISECONDS);
    await expect(page.getByRole('tooltip')).not.toBeVisible();
  });

  test('Skjuler verktøyhjelp når det blir klikket utenfor', async ({ page }) => {
    await renderTooltip(page);
    await hoverTrigger(page);
    const tooltip = page.getByRole('tooltip');
    await expect(tooltip).toBeVisible();
    const tooltipBox = await tooltip.boundingBox();
    await page.mouse.click(tooltipBox.width * 2, tooltipBox.height * 2);
    await expect(page.getByRole('tooltip')).not.toBeVisible();
  });

  test('Skjuler verktøyhjelp når Escape-tasten trykkes', async ({ page }) => {
    await renderTooltip(page);
    await hoverTrigger(page);
    await expect(page.getByRole('tooltip')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('tooltip')).not.toBeVisible();
  });

  const hoverTrigger = async (page: Page) => {
    const trigger = page.getByText(tTooltipTestData.triggerText);
    await expect(trigger).toBeVisible();
    const triggerBox = await trigger.boundingBox();
    const triggerCenterX = triggerBox.x + triggerBox.width / 2;
    const triggerCenterY = triggerBox.y + triggerBox.height / 2;
    await page.mouse.move(triggerCenterX, triggerCenterY);
  };
});
