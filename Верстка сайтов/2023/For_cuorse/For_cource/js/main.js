var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var dots =  document.getElementsByClassName("main_item");
    var slides = document.getElementsByClassName("main_block");

    if(n >slides.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length
    }
    for(i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "")
    }
    slides[slideIndex-1].style.display = "grid";
    dots[slideIndex-1].className += " active";
}


$('.btn_paper').click(function(){
    var bg = $(this).data("color");/// black
    if(bg == 'black'){
    $('.block_viscart').removeClass('bg_white').removeClass('bg_grey').addClass('bg_black');
    }
    else if(bg == 'grey'){
    $('.block_viscart').removeClass('bg_white').removeClass('bg_black').addClass('bg_grey');
    } 
    else if(bg == 'white'){
        $('.block_viscart').removeClass('bg_white').removeClass('bg_grey').addClass('bg_black');
    }
    });