export class Franquicias {
    constructor(page) {
        this.page = page;
        this.name = page.getByRole('textbox', { name: 'Nombre' });
        this.apellido = page.getByRole('textbox', { name: 'Apellido' });
        this.email = page.getByRole('textbox', { name: 'Email' });
        this.telefono = page.getByRole('textbox', { name: 'Teléfono' });
        this.interes = page.getByRole('textbox', { name: 'Zona de Interés' });
        this.ocupacion = page.getByRole('textbox', { name: 'Ocupación' });
        this.mmensaje = page.getByRole('textbox', { name: 'Mensaje' });
        this.inicio = page.getByRole('link', { name: 'Inicio' });
    }
    async nombre() {
        await this.name.fill('Nicolas');
    }
    async apellidoF() {
        await this.apellido.fill('Dondo');
    }
    async emailF() {
        await this.email.fill('cualquiera@gmail.com')
    }
    async telefonoF() {
        await this.telefono.fill('1123456789');
    }
    async interesF() {
        await this.interes.fill('Zona Norte');
    }
    async ocupacionF() {
        await this.ocupacion.fill('Ingeniero');
    }
    async mensajeF() {
        await this.mmensaje.fill('Esta es una Automatizacion de prueba para verificar el flujo del menu franquicias!');
    }
    async irInicio() {
        await this.inicio.click();

    }
}
