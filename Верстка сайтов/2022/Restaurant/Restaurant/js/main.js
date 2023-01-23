var swiper = new Swiper(".slider",{
    grabCursor: true,
    keybourd:{
        enabled:true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewhell:{
        sensitivity: 1,
    },
    slidesPerView:3,
    spaceBetween: 50,
    loop: true,
});

const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () =>{
    menu.classList.toggle('disper');
});