const body = document.body;
const toggle = document.getElementById('toggle-btn');

toggle.addEventListener('click',function(){
    body.classList.toggle('active');
});
