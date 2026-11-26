const {test,expect}=require('@playwright/test');
test('G2 filtrar chamados',async({page})=>{await page.goto('/');await expect(page.locator('#lista tr')).toHaveCount(3);await page.locator('#filtro').selectOption('RESOLVIDO');await expect(page.locator('#lista tr')).toHaveCount(1);await expect(page.locator('#lista')).toContainText('Carla');});
