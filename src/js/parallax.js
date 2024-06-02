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

  const swiperContainer = document.querySelector('.slider');
  if (swiperContainer) {
    const swiper = new Swiper(swiperContainer, {
      slidesPerView: 'auto', // Для отображения нескольких слайдов подряд
      spaceBetween: 40,
    }
    );
  } else {
    console.error('Swiper container not found.');
  }
