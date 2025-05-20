document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        loop: true, 
        autoplay: {
            delay: 2000, 
            disableOnInteraction: false,
        },
        slidesPerView: 10, 
        spaceBetween: 10, 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1300: {
                slidesPerView: 10, 
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 7, 
                spaceBetween: 7,
            },
            960: {
                slidesPerView: 5, 
                spaceBetween: 3,
            },
            767: {
                slidesPerView: 3, 
                spaceBetween: 1,
            },
            480: {
                slidesPerView: 2, 
                spaceBetween: 1,
            },
        },
    });

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header__nav');
    const closeBtn = document.querySelector('.close-menu');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

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
