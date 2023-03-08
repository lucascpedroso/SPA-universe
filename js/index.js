import { Router } from './router.js'

const router = new Router()

const body = document.querySelector('body')
const homePage = document.querySelector('#home')
const theUniversePage = document.querySelector('#theUniverse')
const explorationPage = document.querySelector('#exploration')

router.add('/', "/pages/home.html")
router.add("/theuniverse", "/pages/theuniverse.html")
router.add("/exploration", "/pages/exploration.html")
router.add("/index.html", "/pages/home.html")


router.handle()

// Faz com que a pagina carregue o conteudo quando voce aperta o botao de voltar
window.onpopstate = () => router.handle()
window.route = () => router.route()

homePage.addEventListener('click', () =>{
    homePage.classList.add('selected')
    theUniversePage.classList.remove('selected')
    explorationPage.classList.remove('selected')

    body.style.backgroundImage = 'url(/images/mountains-universe-1.png)'
})

theUniversePage.addEventListener('click', () =>{
    homePage.classList.remove('selected')
    theUniversePage.classList.add('selected')
    explorationPage.classList.remove('selected')

    body.style.backgroundImage = 'url(/images/mountains-universe02.png)'
})

explorationPage.addEventListener('click', () =>{
    homePage.classList.remove('selected')
    theUniversePage.classList.remove('selected')
    explorationPage.classList.add('selected')

    body.style.backgroundImage = 'url(/images/mountains-universe-3.png)'
})