import 'swiper';

var sliders = {
  run() {
    var self = this;

    self.sliders.forEach(function(item) {
      let nodeList = document.querySelectorAll(item.selector);
      for (let i = 0; i < nodeList.length; i++){
        new Swiper(nodeList[i], item.options);
      }
    })
  },

  sliders: [
    {
      selector: '[data-slider="main"]',
      options: {
        slidesPerView: 1,
        pagination: '[data-slider-pagination="main"]',
        paginationClickable: true,
        simulateTouch: false,
        nextButton: '[data-slider-arrow="next"]',
        prevButton: '[data-slider-arrow="prev"]',
        effect: 'fade'
      }
    },
    {
      selector: '[data-slider="detail-main"]',
      options: {
        slidesPerView: 1,
        nextButton: '[data-slider="detail-main"] ~ div [data-slider-arrow="next"]',
        prevButton: '[data-slider="detail-main"] ~ div [data-slider-arrow="prev"]',
        breakpoints: {
          760: {

          }
        }
      }
    },
    {
      selector: '[data-slider="detail-preview"]',
      options: {
        slidesPerView: 4,
        spaceBetween: 10,
        nextButton: '[data-slider="detail-preview"] ~ [data-slider-arrow="next"]',
        prevButton: '[data-slider="detail-preview"] ~ [data-slider-arrow="prev"]',
        breakpoints: {
          900: {
            slidesPerView: 3
          }
        }
      }
    },
    {
      selector: '[data-slider="products"]',
      options: {
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
          1150: {
            slidesPerView: 3
          },
          900: {
            slidesPerView: 2
          },
          760: {
            slidesPerView: 'auto',
            spaceBetween: 0
          }
        }
      }
    },
  ],



};

module.exports = sliders;
