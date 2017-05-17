'use strict';

// Load plugins
import 'normalize.css';

import svg4everybody from 'svg4everybody';
window.svg4everybody = svg4everybody;

import objectFitImages from 'object-fit-images';
window.objectFitImages = objectFitImages;


// Load styles
import 'swiper/dist/css/swiper.css';
import './styles/imports';

// load modules
import stickyFooter from './js/stickyFooter';
import svgUse from'./js/svgUse';
import sliders from'./js/sliders';
import moveElements from'./js/moveElements';
import modals from'./js/modals';
import tabs from'./js/tabs';
import collapse from'./js/collapse';
import mobileMenu from'./js/mobileMenu';
import horizontalScroll from'./js/horizontalScroll';
import filter from'./js/filter';
import counter from'./js/counter';
import inputMask from'./js/inputMask';

// Run components
document.addEventListener('DOMContentLoaded', function() {
  // Статичная загрузка модулей
  objectFitImages();
  svgUse.run();
  stickyFooter.run();
  modals.run();
  sliders.run();
  moveElements.run();
  tabs.run();
  collapse.run();
  mobileMenu.run();
  horizontalScroll.run();
  filter.run();
  counter.run();
  inputMask.run();

});

// Export components
