// найти по классу кнопку хоме и стрелку и дропдаун контент найти бади
// добавить событие клика на стрелочку
// по клику добавлять класс ектив 


// поиск елемента в HTML
const homeBtn = document.querySelector('.home-link');
const arrow = document.querySelector('.arrow');
const dropBox = document.querySelector('.dropBox');
const body = document.querySelector('body');

// вывести переменную в консоли
console.log(homeBtn, arrow, dropBox, body);

// событие клик (по нажатию на кнопку открывать дроп-бокс)
arrow.addEventListener( "click", function(){
    body.classList.toggle('open-dropbox');
});



