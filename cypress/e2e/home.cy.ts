describe('Portfolio tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should page have actions buttons with correct link', () => {
    cy.getBySelector('email').should(
      'have.attr',
      'href',
      Cypress.env('URL_EMAIL'),
    )

    cy.getBySelector('github')
      .invoke('removeAttr', 'target')
      .should('have.attr', 'href', Cypress.env('URL_GITHUB'))
      .click()
    cy.origin(Cypress.env('URL_GITHUB'), () => {
      cy.url().should('eq', Cypress.env('URL_GITHUB'))
    })

    cy.visit('/')

    cy.getBySelector('download').should(
      'have.attr',
      'href',
      Cypress.env('URL_RESUME'),
    )

    cy.getBySelector('linkedin').should(
      'have.attr',
      'href',
      Cypress.env('URL_LINKEDIN'),
    )
  })

  it('should have css classes when initial render and when click in other experience', () => {
    cy.getBySelector('experience-0').should(
      'have.class',
      'bg-dark-600 max-lg:border-b-2 border-brand lg:border-l-2',
    )
    cy.getBySelector('experience-role-Frontend Developer React').should(
      'be.visible',
    )

    cy.getBySelector('experience-1')
      .click()
      .should(
        'have.class',
        'bg-dark-600 max-lg:border-b-2 border-brand lg:border-l-2',
      )

    cy.getBySelector('experience-role-Coordenador de TI').should('be.visible')
  })
})
