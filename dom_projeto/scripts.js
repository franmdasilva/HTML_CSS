const darkModeClass = 'dark-mode'

function changeMode () {
    changeClassses() 
    changeText()
}

function changeClassses() {
    body.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)
    button.classList.toggle(darkModeClass)
    h1.classList.toggle(darkModeClass)
}

function changeText() {
    if (body.classList.contains(darkModeClass)) {
        button.innerHTML = 'Light Mode'
        h1.innerHTML = 'Dark Mode ON'
        return
    }
    button.innerHTML = 'Dark Mode'
    h1.innerHTML = 'Light Mode ON'
}

const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]
const button = document.getElementById('mode-selector')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
const h1 = document.getElementById('page-title')


button.addEventListener('click', changeMode)