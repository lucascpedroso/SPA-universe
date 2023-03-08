export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }
    
    route(event) {
        // verifica se tem um evento, se nao, pegue o evento da window
        event = event || window.event 
    
        // Faz com que o padrao do evento nao acontece, no caso do onclick a page nao recarrega
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle() // usa a palavra chave THIS para se referir a function a baixo
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
    
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    
    }
}