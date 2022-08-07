require('cypress-plugin-tab');

describe('Esta es la practica final de lo que aprendimos primero',() => {
    it('Prueba', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/')        // cy.title().should('eq', "ToolsQA")

        cy.get('#wsf-1-field-21').type('Arusinho').tab()
        .type('Rodriguez').tab()
        .type('lautarodriguez17@gmail.com').tab()
        .type(2364223348).tab()
        .type('Probando esto')
        cy.wait(2000);

        cy.get('#wsf-1-field-21').clear()
        cy.wait(1000)
        cy.get('#wsf-1-field-21').type('Lautaro').tab()
        cy.wait(1000)

        cy.get('#wsf-1-field-27').click({force: true})

        // cy.get('#searchBox').clear();
        // cy.get('#addNewRecordButton').click()
        // cy.wait(1000);

        // cy.get('#firstName').type('Lautaro')
        // .type('Rodriguez').tab()
        // .type('lautarodriguez@gmail.com').tab()
        // .type(28).tab()
        // .type(155.000).tab()
        // .type('Desarrollo').tab()
    })

    it('Segunda practica', () => { 
        cy.visit('https://demoqa.com/webtables')
    })
})