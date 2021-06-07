let RU = document.querySelectorAll('.RU');
let UA = document.querySelectorAll('.UA');
let buttonRU = document.querySelector(".lang-RU");
let buttonUA = document.querySelector(".lang-UA");

buttonRU.onclick = function() {
    for (let i = 0, length = RU.length; i < length; i++) {
        RU[i].style.cssText = 'display: block;';
        UA[i].style.cssText = 'display: none;';
      }
}
buttonUA.onclick = function() {
    for (let i = 0, length = UA.length; i < length; i++) {
        RU[i].style.cssText = 'display: none;';
        UA[i].style.cssText = 'display: block;';
      }
}
