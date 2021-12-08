import CoreRouter from './lib/router'

const routes = [
  {
    path: '/',
    templateParams: (params) => '<h1>Home</h1>'
  },
  {
    path: '/products',
    templateParams: (params) => '<h1>Products</h1>'
  },
  {
    path: '/satis',
    templateParams: (params) => '<h1>Satis</h1>'

  },
  {
    path: '/:variable',
    templateParams: (params) => `<h1>${params.variable}</h1>`
  },
  {
    path: '/:variable/:deneme',
    templateParams: (params) => `<h1>${params.variable + '-' + params.deneme}</h1>`
  },
  {
    path: '*',
    templateParams: (params) => '<h1>Products</h1>'
  }
]

const router = new CoreRouter(routes)

window.goTo = router.goTo.bind(router)
