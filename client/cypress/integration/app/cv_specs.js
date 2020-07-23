describe("CV", () => {
    it('Displays CV file', () => {
        cy.visit('/cv')

        cy.get('[data-cy="file"]')
    })
})