import { test, expect } from '@playwright/test';
import { renderComponent } from '../../test-utils/renderComponent';
import { tArticleDemo, tArticleTestData } from './t-article.demo';
import defaultText from './t-article.text';
import { SOURCE_ID_PREFIX } from '../../constants';

test.describe('t-article', () => {
  test('Laster artikkel med gitt overskrift', async ({ page }) => {
    await renderComponent(page, tArticleDemo.simple);
    const heading = page.getByRole('heading', { level: 1, name: tArticleTestData.heading });
    await expect(heading).toBeVisible();
  });

  test('Laster artikkel med kildehenvisning når kilder er oppgitt', async ({ page }) => {
    await renderComponent(page, tArticleDemo.withSources);
    const sourcesHeading = page.getByRole('heading', { level: 2, name: defaultText.sourcesHeading });
    await expect(sourcesHeading).toBeVisible();
  });

  test('Laster artikkel uten kildehenvisning når kilder ikke er oppgitt', async ({ page }) => {
    await renderComponent(page, tArticleDemo.simple);
    const sourcesHeading = page.getByRole('heading', { level: 2, name: defaultText.sourcesHeading });
    await expect(sourcesHeading).toHaveCount(0);
  });

  test('Sorterer kilder etter når de er referert til i artikkelen', async ({ page }) => {
    await renderComponent(page, tArticleDemo.withSources);
    const sourceList = page.getByRole('list');
    await expect(sourceList).toBeVisible();
    const items = await sourceList.getByRole('listitem');
    await expect(items).toHaveCount(2);
    await expect(items.first()).toHaveId(SOURCE_ID_PREFIX + tArticleTestData.source2Id);
    await expect(items.last()).toHaveId(SOURCE_ID_PREFIX + tArticleTestData.source1Id);
  });

  test('Ruller til kildehenvisning når kildehenvisning klikkes', async ({ page }) => {
    await renderComponent(page, tArticleDemo.withSources);
    const firstSourceRef = page.getByRole('link', { name: '[1]' }).first();
    await expect(firstSourceRef).toBeVisible();
    await firstSourceRef.click();
    const expectedHash = `#${SOURCE_ID_PREFIX}${tArticleTestData.source2Id}`;
    await expect(page).toHaveURL(new RegExp(`${expectedHash}$`));
  });
});
