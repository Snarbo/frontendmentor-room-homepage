$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('is-active');
    $('body, .header').toggleClass('is-active');
  });
});

const defaultCarouselOptions = {
  loop: true,
  allowTouchMove: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
};

const carouselImage = new Swiper('.home-hero .col-left .swiper', {
  ...defaultCarouselOptions,
});

const carouselContent = new Swiper('.home-hero .col-right .swiper', {
  ...defaultCarouselOptions,
  autoHeight: true,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  controller: {
    control: carouselImage,
  },
  breakpoints: {
    1024: {
      autoHeight: false,
    },
  },
});
