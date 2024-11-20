let menuIcon = document.querySelector('#ber'); 
let navbarCollapse = document.querySelector('.navbar-nav2'); 
let closeIcon = document.querySelector('.close'); 
let shop = document.querySelector('.shop'); 
shop.addEventListener('click', function () {
  window.open("file:///D:/Front%20end/projec2/Shop.html")
});
menuIcon.addEventListener('click', function () {
    navbarCollapse.classList.toggle('active'); 
});

if (closeIcon) {
    closeIcon.addEventListener('click', function () {
        navbarCollapse.classList.remove('active'); // إزالة كلاس "active" لإغلاق القائمة
    });
}
  


let shops = document.querySelectorAll(".shop-item");
shops.forEach(function(shop) {
  shop.addEventListener("click", function () {
    window.open("file:///D:/Front%20end/projec2/suproduct.html","_blank");
  });
});


let mainImg = document.getElementById("mainImg");
let smallImgs = document.querySelectorAll(".small-img-col img");

smallImgs.forEach( function(img) {
    img.addEventListener("click", function() {
        mainImg.src = img.src;
    });
});