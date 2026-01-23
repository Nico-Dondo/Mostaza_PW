export class MenuPage {
  constructor(page) {
    this.page = page;

    this.homoArgentum = page.locator('.elementor-flip-box__layer.elementor-flip-box__back > .elementor-flip-box__layer__overlay').first(),
      { hasText: 'Homo Argentum' };

    this.palta = page.locator('.elementor.elementor-147.elementor-location-archive.post-716320 > .elementor-section > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-flip-box > .elementor-flip-box__layer.elementor-flip-box__back > .elementor-flip-box__layer__overlay'),
      { hasText: 'Palta' };

    this.pollo = page.getByRole('link', { name: 'Pollos' });

    this.cofee = page.getByRole('link', { name: 'Cafetería' })

  }
  async HambPollo() {
    await this.pollo.click();
  }

  async cafe() {
    await this.cofee.click();
  }

}

