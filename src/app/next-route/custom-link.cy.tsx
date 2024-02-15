import CustomLink from './custom-link'
import MockRouter from '../../../cypress/mock/next/navigation'

describe('<CustomLink />', () => {
  it('renders', () => {
    cy.mount(
      <MockRouter>
        <CustomLink link='/about'>About</CustomLink>
      </MockRouter>
    )

    cy.get('button').click()

    // @push ไปดูที่ ../cypress/utils/router.js
    // const createRouter = (params) => ({
    //   ...
    //   push: cy.spy().as('push')
    // })

    cy.get('@push').should('be.calledWith', '/about')
  })
})
