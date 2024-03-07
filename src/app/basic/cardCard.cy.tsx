import React from 'react'
import Card from './card'

describe('<Card />', () => {
  it('card title and description has correct text', () => {
    const title = 'Title 2024'
    const description = 'Example description'
    cy.mount(<Card title={title} description={description} />)

    cy.get('[test-id="card-title"]').should('have.text', title)
    cy.get('[test-id="card-description"]').should('have.text', description)
  })

  it('card read more button has correct text', () => {
    const title = 'Title 2024'
    const description = 'Example description'
    const readMore = 'Read more'

    cy.mount(<Card title={title} description={description} />)

    cy.get('[test-id="card-read-more-button"]').should('have.text', readMore)
  })

  it('icon on read more button has visible', () => {
    const title = 'Title 2024'
    const description = 'Example description'

    cy.mount(<Card title={title} description={description} />)

    cy.get('svg').should('be.visible')
  })

  it('link on read more button', () => {
    const title = 'Title 2024'
    const description = 'Example description'

    cy.mount(<Card title={title} description={description} />)

    cy.get('[test-id="card-read-more-button"]').should('have.attr', 'href', '/basic')
  })
})
