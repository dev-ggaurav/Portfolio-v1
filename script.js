const body = document.body;
const toggle = document.getElementById('toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');


//function for dark theme toggle
if (currentTheme) {
    body.classList.add('active');
}

toggle.addEventListener('click', function() {
    body.classList.toggle('active');
    
    if (body.classList.contains('active')) {
        localStorage.setItem('currentTheme', 'themeActive');
    }else{
        localStorage.removeItem('currentTheme');
    }
});


//function for mobile/hambger menu
function mobileMenu() {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
}

hamburger.addEventListener('click', mobileMenu);
