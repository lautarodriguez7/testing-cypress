require('cypress-plugin-tab');

describe('Prueba 2', () => {
    it('Esta es la primer practica de la prueba 2', () => {
    cy.visit('https://computer-database.gatling.io/computers/new');
    cy.title('eq', 'Computer database');
    cy.get('#name').type('ace').tab()
    .type('1993-10-12').tab()
    .type('1999-10-12').tab()
    cy.get('#company').should('be.visible').select('Sony').should('have.value','17').wait(2000)

    cy.get('.primary').click()
    cy.get('#searchbox').type('ACE').type('{enter}')
    cy.wait(1000)
    cy.get('#add').click()

    })

    it('Practica de checkbox', () => {
        cy.visit('https://testingqarvn.com.es/prueba-de-campos-checkbox')
        cy.title().should('eq','Prueba de campos Checkbox | TestingQaRvn')

        cy.get('#wsf-1-label-36-row-1').click()


        cy.get('[type="checkbox"]').first().check()
        // cy.get('[type="checkbox"]').check()
    
        cy.wait(2000)
        cy.get('#wsf-1-label-36-row-2').click()
        cy.get('#wsf-1-label-36-row-3').click()
        // cy.get('[type="checkbox"]').uncheck().should('not.be.checked')
    })

    it('Practica de selects', () => {
        cy.visit('https://demo.seleniumeasy.com/basic-select-dropdown-demo.html')
        cy.title().should('eq', 'Selenium Easy Demo - Automate All Scenarios')

        cy.get('#select-demo').should('be.visible').select('Monday')
        cy.wait(1000)
        cy.get('#select-demo').should('be.visible').select('Friday').should('have.value','Friday')

        cy.get('#multi-select').should('be.visible').select('Ohio')
        cy.get('#printMe').click()
        cy.wait(1000)
        
        cy.get('#multi-select').should('be.visible').select('New Jersey')
        cy.get('#printAll').click()
    })

    it.only('Practicando el select con Then', () => {
        cy.visit('https://demo.seleniumeasy.com/basic-select-dropdown-demo.html')
        cy.title().should('eq', 'Selenium Easy Demo - Automate All Scenarios')
        
        cy.get('#multi-select').should('be.visible').select(['Ohio', 'New Jersey', 'California']).then(() => {
            cy.get('#printMe').should('be.visible').click();
        })
    })
})