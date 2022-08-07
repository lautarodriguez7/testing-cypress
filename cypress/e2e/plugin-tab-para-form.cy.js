require('cypress-plugin-tab');

describe('Utilizamos el plugin de tab para poder recorrer todo un form mas efectivo y facil', () => {
    it('This is my first hello world, bro', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/')

        cy.wait(1000)
        cy.get('#wsf-1-field-21').type('Arusinho').tab()
        .type('Rodriguinho').tab()
        .type('arusinho@gmail.com').tab()
        .type(2364223348).tab()
        .type('Direccion@gmail.com 23532523')
        cy.wait(2000)
    })
})