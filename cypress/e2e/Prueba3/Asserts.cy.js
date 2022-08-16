describe('Varios asserts', () => {
    it('Practica 2', () => {
        cy.visit('http://automationpractice.com/index.php');
        cy.title().should('eq','My Store');

        cy.get('.sf-menu').contains('Women').click()
        cy.get('.product_list > :nth-child(1)').click()
        cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.wait(8000)

        cy.get('.continue > span').click()
    })
})