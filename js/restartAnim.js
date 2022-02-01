// Рабочий метод, но мне кажется можно как-то упростить
let anim1 = document.querySelector(".svg__header")
let anim2 = document.querySelector(".svg__left__block")
let anim3 = document.querySelector(".svg__right__block")
let anim4 = document.querySelector(".svg__footer")

let anim21 = document.querySelector('.svg__header2')
let anim22 = document.querySelector('.svg__under__header')
let anim23 = document.querySelector('.project__wrapper__content__left')
let anim24 = document.querySelector('.project__wrapper__content__right')

let anim31 = document.querySelector('.project__header')
let anim32 = document.querySelector('.project__under__header')
let anim33 = document.querySelector('.project__under__footer')
let anim34 = document.querySelector('.project__footer')


let anim41 = document.querySelector('.project__header__anim4')
let anim42 = document.querySelector('.project__row__left__anim4')
let anim43 = document.querySelector('.project__collumns__left__anim4')
let anim44 = document.querySelector('.project__collumns__right__anim4')
let anim45 = document.querySelector('.project__collumns__footer__anim4')
setInterval(() => {
    resetTimer();
}, 14150);

function resetTimer(){
    anim1.style.webkitAnimation = 'none';
    anim2.style.webkitAnimation = 'none';
    anim3.style.webkitAnimation = 'none';
    anim4.style.webkitAnimation = 'none';
    
    anim21.style.webkitAnimation = 'none';
    anim22.style.webkitAnimation = 'none';
    anim23.style.webkitAnimation = 'none';
    anim24.style.webkitAnimation = 'none';
    
    anim31.style.webkitAnimation = 'none';
    anim32.style.webkitAnimation = 'none';
    anim33.style.webkitAnimation = 'none';
    anim34.style.webkitAnimation = 'none';
    
    anim41.style.webkitAnimation = 'none';
    anim42.style.webkitAnimation = 'none';
    anim43.style.webkitAnimation = 'none';
    anim44.style.webkitAnimation = 'none';
    anim45.style.webkitAnimation = 'none';

    setTimeout(() => {
        anim1.style.webkitAnimation = '';
        anim2.style.webkitAnimation = '';
        anim3.style.webkitAnimation = '';
        anim4.style.webkitAnimation = '';

        anim21.style.webkitAnimation = '';
        anim22.style.webkitAnimation = '';
        anim23.style.webkitAnimation = '';
        anim24.style.webkitAnimation = '';
        
        anim31.style.webkitAnimation = '';
        anim32.style.webkitAnimation = '';
        anim33.style.webkitAnimation = '';
        anim34.style.webkitAnimation = '';
        
        anim41.style.webkitAnimation = '';
        anim42.style.webkitAnimation = '';
        anim43.style.webkitAnimation = '';
        anim44.style.webkitAnimation = '';
        anim45.style.webkitAnimation = '';
    }, 50);
}