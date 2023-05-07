// Перенос класса active
function activate(){  
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
}
$('.header_link').click(activate);
$('.translate').click(activate);


// Перевод
$(function() {
    $('.translate').click(function(){
        var lang = $(this).attr('id');
        $('.lang').each(function(index, item){
            $(this).text(arrLang[lang][$(this).attr('key')])
        });
    });
});

const header_el = document.querySelector('header')

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("header-burger").addEventListener("click", function(){
        header_el.classList.toggle("open")
    })
})