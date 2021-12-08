// eslint-disable-next-line no-unused-vars
class CoreRouter {
  constructor (routes) {
    this.routes = routes
    this._loadRoute()
  }

  _renderTemplate (template) {
    const content = document.getElementById('app-route')
    content.innerHTML = template
  }

  _loadRoute () {
    const routes = this.routes
    const currentPath = window.location.pathname

    // Is there any exact same route
    const findedRoute = routes.filter((route) => route.path === currentPath)[0]
    if (findedRoute) {
      this._renderTemplate(findedRoute.templateParams())
    } else {
      // Try to find with dynamic route
      const finded404 = routes.filter((route) => route.path === '*')[0]
      const splittedPath = currentPath.split('/')
      const possibleRoutes = routes.filter((route) => route.path.split('/').length === splittedPath.length && route.path.includes(':'))

      // Setting up params
      const params = {}
      const routeParams = possibleRoutes[0].path.split('/').map((params) => params.replace(':', ''))
      splittedPath.forEach((variable, index) => {
        params[routeParams[index]] = variable
      })

      if (possibleRoutes[0]) this._renderTemplate(possibleRoutes[0].templateParams(params))
      else this._renderTemplate(finded404.templateParams())
    }
  }

  goTo (target, data) {
    window.history.pushState(data, '', target)
    if (window.location.pathname === target) this._loadRoute()
  }
}

export default CoreRouter
