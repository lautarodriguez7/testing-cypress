 // <reference type="cypress" />

 //Primer practica de testing con cypress
describe('Primer teting con cypress', () => {
    it('This is my first hello world, bro', () => {
        cy.log('Hello world!')
        cy.visit('https://testingqarvn.com.es/datos-personales/')

        cy.wait(1000)
        cy.get('#wsf-1-field-21').type('Arusinho')
        cy.wait(1000)
        cy.get('#wsf-1-field-22').type('Rodriguinho').should('be.visible')

        cy.wait(1000) // Esperar 3 segundos para mostrarlo
        cy.get('#wsf-1-field-23').type('arusinho@gmail.com').should('be.enabled')
        cy.wait(1000)
        cy.get('#wsf-1-field-24').type(2364223348)
        cy.wait(1000)
        cy.get('#wsf-1-field-28').type('Direccion@gmail.com 23532523')
        cy.get('#wsf-1-field-21').type('{pageUp}')

        cy.get('#wsf-1-field-27').click()
        cy.wait(4000)

        
    })
})