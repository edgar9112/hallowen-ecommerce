let searchForm = document.querySelectorAll('.search-form');

document.querySelector('#search-btn', onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');

});
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}


/* SECTION SCROLL SPY  */
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');

window.onscroll = () => {
    searchForm.classList.remove('active');
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.header .navbar a[href*=]' + id + ']').classList.add('active');
            });
        };
    });
};
window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}


/* SECTION CARROUCEL */
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnIteraction: false,
    },
});
var swiper = new Swiper(".products-slider", {
    spaceBetween: 20,
    loop: true,
    conteredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnIteraction: false,
    },
    grabCursor: true,
    brackpoints: {
        0: {
            slidesPreview: 1,
        },
        1: {
            slidesPreview: 2,
        },
        2: {
            slidesPreview: 3,
        },
      
    },
});