/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// script.js

const menuLinks = document.querySelectorAll('.nav__link');

window.addEventListener('scroll', () => {
    let currentSection = '';

    // Determina la sección actual en función del desplazamiento
    for (const section of document.querySelectorAll('section')) {
        const sectionTop = section.offsetTop - 50; // Ajusta el valor según tu diseño
        const sectionBottom = sectionTop + section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY <= sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    }

    // Resalta el enlace correspondiente y quita la clase 'active' de otros enlaces
    menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});



