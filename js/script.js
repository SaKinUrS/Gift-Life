const swiper = new Swiper('.slider-intro', {
    // Optional parameters
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 1,


    // Navigation arrows
    navigation: {
        nextEl: '.buttons-slider__right',
        prevEl: '.buttons-slider__left',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 2,

        },
    }
});

/* Burger */
const burger = document.querySelector('.burger-icon')
const menu = document.querySelector('.menu')
const body = document.body

burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
})

/* Accordeon */
const accordeon = document.querySelectorAll('.accordeon__label')

accordeon.forEach(el => {
    el.addEventListener('click', () => {
        let content = el.nextElementSibling
        let icon = el.lastElementChild
        if (content.style.maxHeight) {
            document.querySelectorAll('.accordeon__icon').forEach(el => el.classList.remove('_active'))
            document.querySelectorAll('.accordeon__content').forEach((el => el.style.maxHeight = null))
        } else {
            document.querySelectorAll('.accordeon__content').forEach(el => el.style.maxHeight = null)
            document.querySelectorAll('.accordeon__icon').forEach(el => el.classList.remove('_active'))
            icon.classList.toggle('_active')
            content.style.maxHeight = content.scrollHeight + 'px'

        }
    })
})

/* Video */
const videoBtn = document.querySelector('#video-btn')
const videoPic = document.querySelector('.promo__preview')
const videoOverlay = document.querySelector('.promo__video')
const video = document.querySelector('.video-object')


videoOverlay.addEventListener('click', () => {
    if (video.paused) {
        video.play()
        videoBtn.classList.add('none')
        videoPic.classList.add('none')
        videoOverlay.classList.remove('video-overlay')

    }
    else {
        video.pause()
        videoBtn.classList.remove('none')
        videoOverlay.classList.add('video-overlay')

    }
})