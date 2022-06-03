// Hamburger Menu
const hamburger = document.querySelector('.nav__hamburger');
const navmenu = document.querySelector('.nav__menu');
const navlogo = document.querySelector('.nav__logo');
const scrollbody = document.body;

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    navmenu.classList.toggle('is-active');
    navlogo.classList.toggle('is-active');
    scrollbody.classList.toggle('is-active');
    
});

// Dark Mode Toggle
const darkmode = document.querySelector('.dark__mode__button'), body = document.querySelector('.page');

darkmode.onclick = ()=> {
    body.classList.toggle('is-dark');
}


// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    // Remove Menu Mobile
    const navMenu = document.querySelector('.nav__menu')
    navMenu.classList.remove('is-active')
    hamburger.classList.remove('is-active');
    navlogo.classList.remove('is-active');
    scrollbody.classList.remove('is-active');
}

navLink.forEach(n => n.addEventListener('click', linkAction));