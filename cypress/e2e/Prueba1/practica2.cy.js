require('cypress-plugin-tab');
require('cypress-xpath'); //npm install -D cypress-xpath

describe('ComboBox', () => {
    it('Visitando comboBox', () => {
        cy.visit('https://testingqarvn.com.es/combobox/')
        cy.get('#wsf-1-field-45').type('Lautaro').tab()
        .type('Rodriguez').tab()
        .type('lautarodriguez17@gmail.com').tab()
        .type(2364223348).tab()
        cy.xpath("//INPUT[@id='wsf-1-field-48' and @name='field_48']").should('be.visible').type('elpepe')
        cy.get('[name="field_49"]').type('San Juan 2879 10 B')
        cy.get('#wsf-1-label-49').contains('Dirección')
        cy.wait(2000)

        // cy.get('#wsf-1-field-49').type('')
        cy.get('#wsf-1-label-50-row-2').type('{enter}')
        cy.get('#wsf-1-label-50-row-3').contains('JS').click()
        cy.get('#wsf-1-label-51-row-1').click()
        cy.wait(1000)

        cy.get('#wsf-1-field-52').click()

    })
})