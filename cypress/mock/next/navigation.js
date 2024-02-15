import {
  AppRouterContext,
  AppRouterInstance
} from 'next/dist/shared/lib/app-router-context.shared-runtime'

const createRouter = (params) => ({
  route: '/',
  pathname: '/',
  query: {},
  asPath: '/',
  basePath: '',
  back: cy.spy().as('back'),
  beforePopState: cy.spy().as('beforePopState'),
  forward: cy.spy().as('forward'),
  prefetch: cy.stub().as('prefetch').resolves(),
  push: cy.spy().as('push'),
  reload: cy.spy().as('reload'),
  replace: cy.spy().as('replace'),
  events: {
    emit: cy.spy().as('emit'),
    off: cy.spy().as('off'),
    on: cy.spy().as('on')
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  defaultLocale: 'fr',
  domainLocales: [],
  isPreview: false,
  ...params
})

const MockRouter = ({ children, ...props }) => {
  const router = createRouter(props)
  console.log('children', children)
  return (
    <AppRouterContext.Provider value={router}>
      {children}
    </AppRouterContext.Provider>
  )
}

export default MockRouter
