// menu-burger
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("header_burger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open");
    });
});



//  Маска 1
// Считываем поле ввода
let phoneInput = document.querySelector(".phone");
// Считываем кнопку
let btn = document.querySelector(".btn");

// Создаем маску в инпуте
const phoneMask = new IMask(phoneInput, {
  mask: "+{7}(000)000-00-00",
});

// Обработчик события для инпута
phoneInput.addEventListener("input", phoneInputHandler);
// Обработчик события для кнопки

// Если ввели правлильно - кнопка активна
function phoneInputHandler() {
  if (phoneMask.masked.isComplete) {
    btn.classList.add("button-active");
  } else {
    btn.classList.remove("button-active");
  }
}

// Маска2
// Считываем поле ввода
let phoneInput2 = document.querySelector(".phone2");
// Считываем кнопку
let btn2 = document.querySelector(".btn2");

// Создаем маску в инпуте
const phoneMask2 = new IMask(phoneInput2, {
  mask: "+{7}(000)000-00-00",
});

// Обработчик события для инпута
phoneInput2.addEventListener("input", phoneInputHandler2);
// Обработчик события для кнопки

// Если ввели правлильно - кнопка активна
function phoneInputHandler2() {
  if (phoneMask2.masked.isComplete) {
    btn2.classList.add("button-active");
  } else {
    btn2.classList.remove("button-active");
  }
}


