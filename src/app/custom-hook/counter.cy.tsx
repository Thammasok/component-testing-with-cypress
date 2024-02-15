import React from 'react'
import Counter from './counter'
import useCounter, { UseCounterReturnType } from './useCounter'

describe('<Counter />', () => {
  it('renders', () => {
    cy.mount(<Counter />)

    cy.get('h1').contains('Count: 0')

    cy.get('#incrementButton').click()

    cy.get('h1').contains('Count: 1')
  })

  it('renders only useCounter', () => {
    // Arrange
    let counter: UseCounterReturnType

    const MockComponent = () => {
      counter = useCounter()
      return null
    }

    // Act
    cy.mount(<MockComponent />).then(() => {
      const count = counter.count

      // Assert
      expect(count).to.equal(0)
    })
  })
})
