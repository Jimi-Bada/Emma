jarallax(document.querySelectorAll('.jarallax'), {
    // options here
});
const slidingNav = document.querySelector('.sliding-navigation');
const slidingNavButton = document.querySelector('.sliding-nav-button');
const navButton = document.querySelector('.nav-button');
const nav = document.querySelector('.navigation');
const topBar = document.querySelector('.topbar');
let buttonClicked = false;
console.log(slidingNav);
window.onscroll= function(){
    scroll();
}
function scroll(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
        nav.classList.add('sliding-navigation');
        topBar.style.display='none';
        
    }else{
        nav.classList.remove('sliding-navigation');
        topBar.style.display='block';
    }
}
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    parallax:true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
  }
}
});
