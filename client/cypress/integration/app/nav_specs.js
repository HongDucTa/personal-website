describe('Navigation', () => {
    it('Visits home page', () => {
        cy.visit('/')
        cy.contains('Mes compétences')
    })

    it('Visits page Projets', () => {
        cy.visit('/')
        cy.get('[data-cy="projets"]').click()

        cy.url()
            .should('include','/projets')
    })

    it('Visits page CV', () => {
        cy.visit('/')
        cy.get('[data-cy="cv"]').click()

        cy.url()
            .should('include','/cv')
    })

    it('Visits page Formations', () => {
        cy.visit('/')
        cy.get('[data-cy="formations"]').click()

        cy.url()
            .should('include','/formations')
    })
})