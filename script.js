const body = document.body;
const toggle = document.getElementById('toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const triggers = menu.querySelectorAll('a');
const highlight = document.createElement('span');

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


//follow along nav links
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    highlight.style.width = `${linkCoords.width}px`;
    highlight.style.height = `${linkCoords.height}px`;
    highlight.style.transform = `translate(${linkCoords.left}px, ${linkCoords.top}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
