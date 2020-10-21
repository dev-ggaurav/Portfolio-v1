const body = document.body;
const toggle = document.getElementById('toggle-btn');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

toggle.addEventListener('click',function(){
    body.classList.toggle('active');
});


hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
})