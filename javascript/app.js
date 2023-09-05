jarallax(document.querySelectorAll('.jarallax'), {
    // options here
});
const slidingNav = document.querySelector('.sliding-navigation');
const slidingNavButton = document.querySelector('.sliding-nav-button');
const navButton = document.querySelector('.nav-button');
const nav = document.querySelector('.navigation');
const topBar = document.querySelector('.topbar');
const dropdown = document.querySelector('.dropdown')
const dropdownToggle = document.querySelector(' .dropdown-toggle')
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
  direction: 'vertical',
  loop: true,
});
var copy = document.querySelector('.slide-wrapper').cloneNode(true);
document.querySelector('.partners-slide ').appendChild(copy)