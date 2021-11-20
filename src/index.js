import CoreRouter from './lib/router'

const routes = [
  {
    path: '/',
    template: '<h1>Home</h1>'
  },
  {
    path: '/products',
    template: '<h1>Products</h1>'
  },
  {
    path: '*',
    template: '<h1>404</h1>'
  }
]

const router = new CoreRouter(routes)

window.goTo = router.goTo.bind(router)
