// @ts-check
import { test, expect } from '@playwright/test';
import { Hamburguesas } from './support/Pages/hamburger.js';
import { MenuPage } from './support/Pages/menu.js';
import { Franquicias } from './support/Pages/franquicias.js';

test.describe('Menu Mostaza', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('valida elementos menú', async ({ page }) => {
    const hamburguesas = new Hamburguesas(page);
    const menu = new MenuPage(page);


    await hamburguesas.hamburgerClick();
    await hamburguesas.menuClick();
    await expect(menu.homoArgentum).toBeVisible();
    await expect(menu.palta).toBeVisible();
    await menu.HambPollo();
    await menu.cafe();
    await hamburguesas.goBack();
  });

  test('Verificación de franquicias', async ({ page }) => {
    const hamburguesas = new Hamburguesas(page);
    const franquicias = new Franquicias(page);

    await hamburguesas.hamburgerClick();
    await hamburguesas.franquiciasClick();
    await expect(page).toHaveURL(/.*franquicias/);
    await franquicias.nombre();
    await franquicias.apellidoF();
    await franquicias.emailF();
    await franquicias.telefonoF();
    await franquicias.interesF();
    await franquicias.ocupacionF();
    await franquicias.mensajeF();
    await hamburguesas.goBack();
    await franquicias.irInicio();
    await expect(page).toHaveURL('https://www.mostazaweb.com.ar/');
  });
});
