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
    const currentPath = window.location.pathname
    const findedRoute = this.routes.filter((route) => route.path === currentPath)[0]
    const finded404 = this.routes.filter((route) => route.path === '*')[0]

    if (findedRoute) this._renderTemplate(findedRoute.template)
    else this._renderTemplate(finded404.template)
  }

  goTo (target, data) {
    window.history.pushState(data, '', target)
    if (window.location.pathname === target) this._loadRoute()
  }
}

export default CoreRouter
