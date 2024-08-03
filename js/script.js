const swiper = new Swiper('.swiper', {
    direction : 'horizontal',
    loop: 'true',
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
})

const arrowIcon = document.querySelectorAll(".arrow-icon");

if (arrowIcon) {
  arrowIcon.forEach(arrow => arrow.addEventListener('click', (e) => {
    const display = arrow.parentElement.parentElement.children[1].style.display;
    arrow.parentElement.parentElement.children[1].style.display = 'block';
    arrow.innerHTML = `<svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29 1L15 15L1 1" stroke="#0F1FD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
    if (display == 'block') {
      arrow.parentElement.parentElement.children[1].style.display = 'none';
      arrow.innerHTML = `<svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L15 15L1 29" stroke="#0F1FD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`
      
    }
  }))
}