import { test, expect } from '@playwright/test';
import { renderComponent } from '../../test-utils/renderComponent';

test.describe('t-textfield', () => {
  test('Laster tekstfelt med gitt merke', async ({ page }) => {
    const label = 'Skriv inn noe';
    await renderComponent(page, `<t-textfield label="${label}"></t-textfield>`);
    const textfield = page.getByRole('textbox', { name: label });
    await expect(textfield).toBeVisible();
  });

  test('Avgir en hendelse når innholdet endres', async ({ page }) => {
    const label = 'Skriv inn noe';
    const value = 'Noe';
    const html = `<t-textfield label="${label}"></t-textfield>`;
    const script = `
      const textfield = document.querySelector('t-textfield');
      textfield.addEventListener('valueChange', (e) => {
        console.log(e.detail);
      });
    `;
    const consoleLog: string[] = [];
    page.on('console', msg => consoleLog.push(msg.text()));
    await renderComponent(page, html, script);
    const textfield = page.getByRole('textbox', { name: label });
    await textfield.fill(value);
    await expect(textfield).toHaveValue(value);
    expect(consoleLog).toContain(value);
  });
});
