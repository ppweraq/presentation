import Swiper from "swiper";
import 'swiper/swiper-bundle.css';

export function initParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        document.querySelectorAll('.pills-img').forEach(function(elem) {
          const speed = elem.classList.contains('pills-topleft') || elem.classList.contains('pills-topright') ? -0.3 : -0.3;
          elem.style.transform = `translateY(${scrolled * speed}px)`;
        });
      });
  }

  var swiper = new Swiper('.swiper', {
    spaceBetween: 40, 
    // loop: true,
    slidesPerView: 1.3,
    breakpoints: {
      815: {
        slidesPerView: 2.6
      }
    }
  });

  function mobileNav() {
    // Mobile nav button
    const navBtn = document.querySelector('.mobile-nav-btn');
    const nav = document.querySelector('.mobile-nav');
    const menuIcon = document.querySelector('.nav-icon');
  
    navBtn.onclick = function () {
      nav.classList.toggle('mobile-nav--open');
      menuIcon.classList.toggle('nav-icon--active');
      document.body.classList.toggle('no-scroll');
    };
  }
  
  export default mobileNav;