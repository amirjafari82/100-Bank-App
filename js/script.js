const swiper = new Swiper('.swiper', {
    direction : 'horizontal',
    loop: 'true',
    slidesPerView: 4,
    spaceBetween: 25,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
})