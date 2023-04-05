const swiper = new Swiper(".swiper1", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    // 640: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    // },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

const swiper2 = new Swiper(".swiper2", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // 576: {
    //   slidesPerView: 2,
    //   spaceBetween: 10,
    // },
    // 640: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    // },
    // when window width is >= 480px
    876: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // 976: {
    //   slidesPerView: 3,
    //   spaceBetween: 30,
    // },
    // when window width is >= 640px
    1124: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
