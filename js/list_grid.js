
const mashBtn = document.querySelector('.nav-icon-1');
const stringBtn = document.querySelector('.nav-icon-8');
const productContainer = document.querySelector('.sellerItems');
const productItems = document.querySelectorAll('.selBox');


console .log(mashBtn, stringBtn, productItems);

stringBtn.addEventListener( "click", function(){
    productContainer.classList.add('active-grid');

});

mashBtn.addEventListener( "click", function(){
    productContainer.classList.remove('active-grid');
});