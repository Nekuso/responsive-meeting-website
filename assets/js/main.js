// Hamburger Menu
const hamburger = document.querySelector('.nav__hamburger');
const navmenu = document.querySelector('.nav__menu');
const navlogo = document.querySelector('.nav__logo');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    navmenu.classList.toggle('is-active');
    navlogo.classList.toggle('is-active');

});

// Dark Mode Toggle
const darkmode = document.querySelector('.dark__mode__button'), body= document.querySelector('.page');

darkmode.onclick = ()=> {
    body.classList.toggle('is-dark');
}