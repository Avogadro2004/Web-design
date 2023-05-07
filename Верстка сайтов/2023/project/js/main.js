// Слайдер
var swiper = new Swiper(".sevices_slider",{
    grabCursor: true,
    keybourd:{
        enabled:true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewhell:{
        sensitivity: 1,
    },
    navigation:{
        nextEl: '.itc-slider__btn_next',
        prevEl:'.itc-slider__btn_prev'
    },
    slidesPerView: "auto",
    spaceBetween: 50,
    loop: true,
});

// Бургер меню
const header_el = document.querySelector('header')

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("header_burger").addEventListener("click", function(){
        header_el.classList.toggle("open")
    });
});