'use strict';

// Load plugins
import 'jquery'
import 'normalize.css'

import svg4everybody from 'svg4everybody'
window.svg4everybody = svg4everybody;

import objectFitImages from 'object-fit-images'
window.objectFitImages = objectFitImages;


// Load styles
import 'swiper/dist/css/swiper.css'
import './styles/imports'

// load modules
import svgUse from'./js/svgUse';

// Run components

document.addEventListener('DOMContentLoaded', function() {
    // Статичная загрузка модулей
    objectFitImages();
    svgUse.run();
});

// Export components
