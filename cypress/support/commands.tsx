/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// React Testing Library
// https://github.com/testing-library/cypress-testing-library
// import '@testing-library/cypress/add-commands'

import { MountOptions, MountReturn, mount } from 'cypress/react18'
import React from 'react'

import '@/app/globals.css'

// create type
type OptionType = MountOptions & {
  locale?: string
}

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Mounts a React node
       * @param component React Node to mount
       * @param options Additional options to pass into mount
       */
      // 1. create new mount command
      mount(
        component: React.ReactNode,
        options?: OptionType
      ): Cypress.Chainable<MountReturn>
    }
  }
}

Cypress.Commands.add(
  'mount',
  (component: React.ReactNode, options?: OptionType) => {
    const wrapped = (
      <div
        style={{
          marginTop: '20px',
          marginLeft: '20px'
        }}
      >
        {component}
      </div>
    )

    return mount(wrapped, options)
  }
)
