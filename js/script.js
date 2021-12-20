
// EDITIONS FILTER CATEGORIES

var secl = document.querySelector('.section-editions__categories-title')

var secListOpen = function () {
  secl.addEventListener('click', function () {
    secl.classList.toggle('section-editions__categories-title_icon-close')
    document.querySelectorAll('.section-editions__categories-item').forEach(function (seci) {
      if (!seci.querySelector('label').querySelector('input:checked')) {
        seci.classList.toggle('section-editions__categories__item__active')
      }
    })
  })
}


var secItemCheck = function () {
  document.querySelectorAll('.checkbox_section-editions-categories').forEach(function (secCbl) {
    secCbl.addEventListener('click', function () {
      if (secl.classList.contains('section-editions__categories-title_icon-close')) {
        document.querySelectorAll('.section-editions__categories-item').forEach(function (seci) {
          if (!seci.querySelector('label').querySelector('input:checked')) {
            seci.classList.toggle('section-editions__categories__item__active')
          }
        })
      }
    })
  })
}

if (document.documentElement.clientWidth <= 550) {
  secListOpen()
  secItemCheck()
}

window.addEventListener('resize', function () {
  if (document.documentElement.clientWidth <= 550) {
    secListOpen()
    secItemCheck()
  }
})



// EDITIONS SWIPER


var editionsSwiper = false

const editionsSwiperContainer = document.querySelector('#section-editions__swiper')
const editionsSwiperWrap = document.querySelector('.section-editions_swiper-wrap')
const editionsSwiperPagination = document.querySelector('.section-editions__swiper-pagination')
const editionsSwiperButtonNext = document.querySelector('.section-editions__swiper-button-next')
const editionsSwiperButtonPrev = document.querySelector('.section-editions__swiper-button-prev')

const editionsSwiperOn = function () {
  if (!editionsSwiperContainer.classList.contains('section-editions__swiper-container')) {
    document.querySelector('#section-editions__swiper').classList.add('swiper-container')
    document.querySelector('#section-editions__swiper').classList.add('section-editions__swiper-container')
    editionsSwiperWrap.classList.add('swiper-wrapper')
    document.querySelectorAll('.section-editions__swiper-slide').forEach(function (editionsSwiperSlide) {
      editionsSwiperSlide.classList.add('swiper-slide')
    })
    editionsSwiperPagination.classList.add('swiper-pagination')
    editionsSwiperPagination.style.display = 'flex'
    editionsSwiperButtonNext.classList.add('swiper-button-next')
    editionsSwiperButtonNext.style.display = 'flex'
    editionsSwiperButtonPrev.classList.add('swiper-button-prev')
    editionsSwiperButtonPrev.style.display = 'flex'
  }
}

const editionsSwiperOff = function () {
  if (editionsSwiperContainer.classList.contains('section-editions__swiper-container')) {
    editionsSwiperContainer.removeAttribute('class')
    editionsSwiperWrap.className = 'section-editions_swiper-wrap'
    editionsSwiperWrap.removeAttribute('id')
    editionsSwiperWrap.removeAttribute('aria-live')
    editionsSwiperWrap.removeAttribute('style')
    document.querySelectorAll('.section-editions__swiper-slide').forEach(function (editionsSwiperSlide) {
      editionsSwiperSlide.className = 'section-editions__swiper-slide'
      editionsSwiperSlide.removeAttribute('data-swiper-slide-index')
      editionsSwiperSlide.removeAttribute('role')
      editionsSwiperSlide.removeAttribute('aria-label')
      editionsSwiperSlide.removeAttribute('style')
    })
    editionsSwiperPagination.className = 'section-editions__swiper-pagination'
    editionsSwiperPagination.style.display = 'none'
    editionsSwiperButtonNext.className = 'section-editions__swiper-button-next'
    editionsSwiperButtonNext.style.display = 'none'
    editionsSwiperButtonPrev.className = 'section-editions__swiper-button-prev'
    editionsSwiperButtonPrev.style.display = 'none'
  }
}

if (document.documentElement.clientWidth > 550) {

  editionsSwiperOn()
  editionsSwiper = new Swiper('.section-editions__swiper-container', {

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 34,
      },
      769: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 49,
      },
      1025: {
        watchSlidesVisibility: true,
        grabCursor: true,
        slidesPerGroup: 3,
        slidesPerView: 3,
        slidesPerColumn: 1,
        spaceBetween: 50,
      }
    }
  });
}

window.addEventListener('resize', function () {
  if (document.documentElement.clientWidth > 550) {
    if (!editionsSwiper) {
      editionsSwiperOn()
      editionsSwiper = new Swiper('.section-editions__swiper-container', {

        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {
          0: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 34,
          },
          769: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 49,
          },
          1025: {
            watchSlidesVisibility: true,
            grabCursor: true,
            slidesPerGroup: 3,
            slidesPerView: 3,
            slidesPerColumn: 1,
            spaceBetween: 50,
          }
        }
      });
    }
  } else {
    if (editionsSwiper) {
      editionsSwiper.destroy()
      editionsSwiperOff()
      editionsSwiper = false
    }
  }
})

  
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999)999-99-99");

im.mask(selector);

new JustValidate('.section-contacts__form', {
    colorWrong: '#D11616',
    rules: {
        name: {
            required: true,
            minLenght: 2,
            maxLenght: 15
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
    },
    messages: {
        name: 'Недопустимый формат',
        tel: 'Недопустимый формат',
    },

    submitHandler: function(form) {
      let formData = new FormData(form);

      fetch('mail.php', {
        method: 'POST',
        body: formData
    }).then(() => {
        console.log('Отправлено');
        form.reset();
      })
      .catch(() => console.log('Ошибка'));
    }
});


ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.75880080725477, 37.602274036384486],
        zoom: 15,
        controls: []
    });

    var zoomControl = new ymaps.control.ZoomControl({
        options: {
            size: "small"
        }
    });
    myMap.controls.add(zoomControl);

    var myPlacemark = new ymaps.Placemark([55.75842874518144, 37.6011957883605], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [1, 1]
    });

    myMap.geoObjects.add(myPlacemark);
}





$(document).ready(function () {
    $(".header__nav, .section-hero__content").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});



