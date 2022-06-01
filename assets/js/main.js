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
const darkmode = document.querySelector('.dark__mode__button');
const body = document.body;

darkmode.addEventListener('click', function() {
    darkmode.classList.toggle('is-dark');
    body.classList.toggle('is-dark');
});