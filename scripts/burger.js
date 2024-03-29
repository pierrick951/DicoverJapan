// burger.js
import './followmouse.js';
import './module-nav.js';
import './moveimg.js'

const burgerButton = document.querySelector('.toggle-button');
const burgerMenu = document.querySelector('.container__burger');
const closeBtn = document.querySelector(".closeBTN");

burgerButton.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
    console.log("teste")
});

//close
closeBtn.addEventListener('click', function() {
    burgerMenu.classList.remove('active');
});
