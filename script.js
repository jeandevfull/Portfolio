const btn = document.getElementById('btn-mobile')

function toglemenu () {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}


btn.addEventListener('click',toglemenu)