const body = document.body;
const toggle = document.getElementById('toggle-btn');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');


//function for dark theme toggle
function theme() {
    body.classList.toggle('active');
}

toggle.addEventListener('click', theme);


//function for mobile/hambger menu
function mobileMenu() {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
}

hamburger.addEventListener('click', mobileMenu);
