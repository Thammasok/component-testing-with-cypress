import React from 'react'
import Counter from './counter'

describe('<Counter />', () => {
  it('Stub custom hook', () => {
    const useCounterStub = () => {
      return {
        count: 0,
        increment: cy.stub().as('increment'),
        decrement: cy.stub().as('decrement')
      }
    }

    cy.mount(<Counter useCounter={useCounterStub} />)

    cy.get('#incrementButton').click()

    cy.get('@increment').should('have.been.called')
  })
})
