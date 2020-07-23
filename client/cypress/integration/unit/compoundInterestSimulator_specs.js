describe("Simulateur d'intérêts composés", () => {
    it("Type valid values", () => {
        cy.visit('/outils/interets-composes')

        cy.get('[data-cy="initialSum"]').type("10000")
        cy.get('[data-cy="interestRate"]').type("10")
        cy.get('[data-cy="duration"]').type("10")
        cy.get('[data-cy="submit"]').click()

        cy.get('[data-cy="result"').contains("25937.42")
    })

    it("Type invalid values", () => {
        cy.visit('/outils/interets-composes')

        cy.get('[data-cy="initialSum"]').type("abcd").should('have.value', "0")
        cy.get('[data-cy="interestRate"]').type("abcd").should('have.value', "0")
        cy.get('[data-cy="duration"]').type("abcd").should('have.value', "0")
        cy.get('[data-cy="submit"]').click()
    })

    it("Type mixed valid/invalid values", () => {
        cy.visit('/outils/interets-composes')

        cy.get('[data-cy="initialSum"]').type("a1b2c3d").should('have.value', "0123")
        cy.get('[data-cy="interestRate"]').type("a1b2c3d").should('have.value', "0123")
        cy.get('[data-cy="duration"]').type("a1b2c3d").should('have.value', "0123")
        cy.get('[data-cy="submit"]').click()
    })
})