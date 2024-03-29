// module-nav.js
let prevScrollPos = window.scrollY;
let Getnavbar = document.querySelector('.main-nav');

window.onscroll = function(){
    var currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos){
        Getnavbar.classList.remove('hidden');
    } else {
        Getnavbar.classList.add('hidden');
    }
    prevScrollPos = currentScrollPos;
}
