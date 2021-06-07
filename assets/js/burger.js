let icon = document.querySelector('.menu-icon');
let menu = document.querySelector('.burger-menu');
icon.onclick = function() {
    menu.classList.toggle('burger-OFF');
    menu.classList.toggle('burger-ON');
}