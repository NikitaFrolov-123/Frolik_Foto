document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.mySwiper', {
    direction: 'horizontal', 
    loop: true,
    slidesPerView: 3,
    spaceBetween: 5,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 5
      }
    }
  });

  // Мобильное меню
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.header__nav');
  const closeBtn = document.querySelector('.close-menu');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  // Закрытие меню при клике на пункт меню
  const menuLinks = document.querySelectorAll('.header__link');
  
  function openMenu() {
      nav.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
  }
  
  function closeMenu() {
      nav.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
  }
  
  burger.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  
  menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
  });
});
