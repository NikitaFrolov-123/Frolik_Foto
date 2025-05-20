document.addEventListener('DOMContentLoaded', function() {
    
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
