const routes = {
    "/": "/pages/home.html",
    "/contact": "/pages/contact.html",
    "/about": "/pages/about.html",
    404: "/pages/404.html",
}

 function route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    handle()
 }

 function handle() {
    //neste momento, podemos deixar de dois modos!
    //const { pathname } = window.location | ou
    const pathname = window.location.pathname
    const route = routes[pathname] || routes[404]

    fetch(route)
    .then(data => data.text())
    .then(html => {
    document.querySelector('#app').innerHTML = html
    })
 }

 handle()

 window.onpopstate = () => handle()

 //tive que usar este atalho porque depois que tiramos
 //o script do html, a função route() que é a função que é
 //ativada após dar o click não estava sendo ativada, então
 //usamos este atalho abaixo!

 window.route = () => route()