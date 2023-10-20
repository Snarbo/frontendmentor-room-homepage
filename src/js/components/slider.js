const defaultCarouselOptions = {
  loop: true,
  allowTouchMove: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
};

const carouselImage = new Swiper('.home-hero .col-left .swiper', defaultCarouselOptions);

const customCarouselContentOptions = {
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
};

const carouselContentOptions = { ...defaultCarouselOptions, ...customCarouselContentOptions };
const carouselContent = new Swiper('.home-hero .col-right .swiper', carouselContentOptions);
