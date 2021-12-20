var swiper = new Swiper(".section-galery__swiper", {
  spaceBetween: 50,
  slidesPerGroup: 1,
  pagination: {
    el: ".section-galery__swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.section-galery__swiper-btn-next',
    prevEl: '.section-galery__swiper-btn-prev',
  },
  breakpoints: {
    1281: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 50,
    },
    721: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 34,
    },
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
    }
  }
});



  