const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1300: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
})

swiper.on('breakpoint', function (swiper, breakpointParams) {
    console.log('Breakpoint ativado:', breakpointParams)
})

const prevButton = document.querySelector('#prevButton')
const nextButton = document.querySelector('#nextButton')

if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
        swiper.slidePrev()
    })

    nextButton.addEventListener('click', () => {
        swiper.slideNext()
    })
}