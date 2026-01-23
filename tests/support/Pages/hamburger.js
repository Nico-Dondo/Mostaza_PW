export class Hamburguesas {
  constructor(page) {
    this.page = page;

    
    this.hamburgerMenu = page.locator(
      'body > header > header.elementor-section.elementor-top-section.elementor-element.elementor-element-42364b2b.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default.elementor-sticky.elementor-sticky--active.elementor-section--handles-inside > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-57b466e1 > div > div > div > div > a'
    );

    this.menu = page.locator(
      '#menu-1-267f80d > li.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-201 > a'
    );

    this.trabajaConNosotros = page.locator(
      '#menu-1-267f80d > li.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-664810 > a'
    );
      'body > header > header.elementor-section.elementor-top-section.elementor-element.elementor-element-42364b2b.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default.elementor-sticky.elementor-sticky--active.elementor-section--handles-inside > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-57b466e1 > div > div > div > div > a'
    

    this.menu = page.locator(
      '#menu-1-267f80d > li.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-201 > a'
    );

    this.trabajaConNosotros = page.locator(
      '#menu-1-267f80d > li.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-664810 > a'
    );

    this.back = page.getByRole('link').nth(1)

    this.franquicias = page.getByRole('link', { name: 'Franquicias', exact: true })
  }

  async hamburgerClick() {
    await this.hamburgerMenu.click();
  }

  async menuClick() {
    await this.menu
      .filter({ hasText: 'Menú' })
      .click();
  }

  async workWithUsClick() {
    await this.trabajaConNosotros.click();
  }
  async goBack() {
    await this.back.click();
  }

  async franquiciasClick() {
    await this.franquicias.click();
  }
}