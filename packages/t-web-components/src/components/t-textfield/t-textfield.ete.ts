import { test, expect } from '@playwright/test';
import { renderComponent } from '../../test-utils/renderComponent';
import { ComponentTestCodeConfig } from '../../test-utils/ComponentTestCode';

test.describe('t-textfield', () => {
  test('Laster tekstfelt med gitt merke', async ({ page }) => {
    const label = 'Skriv inn noe';
    const config: ComponentTestCodeConfig = {
      componentName: 't-textfield',
      props: { label }
    };
    await renderComponent(page, config);
    const textfield = page.getByRole('textbox', { name: label });
    await expect(textfield).toBeVisible();
  });

  test('Avgir en hendelse når innholdet endres', async ({ page }) => {
    const label = 'Skriv inn noe';
    const value = 'Noe';
    const config: ComponentTestCodeConfig = {
      componentName: 't-textfield',
      props: { label },
      events: {
        valueChange: (e) => console.log(e.detail)
      }
    };
    const consoleLog: string[] = [];
    page.on('console', msg => consoleLog.push(msg.text()));
    await renderComponent(page, config);
    const textfield = page.getByRole('textbox', { name: label });
    await textfield.fill(value);
    await expect(textfield).toHaveValue(value);
    expect(consoleLog).toContain(value);
  });
});
