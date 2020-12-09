describe('Navigation', () => {
    it('Visits home page', () => {
        cy.visit('/')
        cy.contains('Compétences')
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

    it('Visits page Simulateur intérêts composés', () => {
        cy.visit('/outils/interets-composes')
        cy.get('[data-cy="outils"').click()
        cy.get('[data-cy="interets-composes"]').click

        cy.url()
            .should('include','/outils/interets-composes')
    })
})