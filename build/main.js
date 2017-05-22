var App =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Load plugins

	__webpack_require__(1);

	var _svg4everybody = __webpack_require__(2);

	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

	var _objectFitImages = __webpack_require__(3);

	var _objectFitImages2 = _interopRequireDefault(_objectFitImages);

	__webpack_require__(4);

	__webpack_require__(5);

	var _svgUse = __webpack_require__(14);

	var _svgUse2 = _interopRequireDefault(_svgUse);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.svg4everybody = _svg4everybody2.default;

	window.objectFitImages = _objectFitImages2.default;

	// Load styles


	// load modules


	// Run components

	document.addEventListener('DOMContentLoaded', function () {
	    // Статичная загрузка модулей
	    (0, _objectFitImages2.default)();
	    _svgUse2.default.run();
	});

	// Export components

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(root, factory) {
	     true ? // AMD. Register as an anonymous module unless amdModuleId is set
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return root.svg4everybody = factory();
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory() : root.svg4everybody = factory();
	}(this, function() {
	    /*! svg4everybody v2.1.0 | github.com/jonathantneal/svg4everybody */
	    function embed(svg, target) {
	        // if the target exists
	        if (target) {
	            // create a document fragment to hold the contents of the target
	            var fragment = document.createDocumentFragment(), viewBox = !svg.getAttribute("viewBox") && target.getAttribute("viewBox");
	            // conditionally set the viewBox on the svg
	            viewBox && svg.setAttribute("viewBox", viewBox);
	            // copy the contents of the clone into the fragment
	            for (// clone the target
	            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
	                fragment.appendChild(clone.firstChild);
	            }
	            // append the fragment into the svg
	            svg.appendChild(fragment);
	        }
	    }
	    function loadreadystatechange(xhr) {
	        // listen to changes in the request
	        xhr.onreadystatechange = function() {
	            // if the request is ready
	            if (4 === xhr.readyState) {
	                // get the cached html document
	                var cachedDocument = xhr._cachedDocument;
	                // ensure the cached html document based on the xhr response
	                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
	                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
	                xhr._embeds.splice(0).map(function(item) {
	                    // get the cached target
	                    var target = xhr._cachedTarget[item.id];
	                    // ensure the cached target
	                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
	                    // embed the target into the svg
	                    embed(item.svg, target);
	                });
	            }
	        }, // test the ready state change immediately
	        xhr.onreadystatechange();
	    }
	    function svg4everybody(rawopts) {
	        function oninterval() {
	            // while the index exists in the live <use> collection
	            for (// get the cached <use> index
	            var index = 0; index < uses.length; ) {
	                // get the current <use>
	                var use = uses[index], svg = use.parentNode;
	                if (svg && /svg/i.test(svg.nodeName)) {
	                    var src = use.getAttribute("xlink:href") || use.getAttribute("href");
	                    if (polyfill && (!opts.validate || opts.validate(src, svg, use))) {
	                        // remove the <use> element
	                        svg.removeChild(use);
	                        // parse the src and get the url and id
	                        var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
	                        // if the link is external
	                        if (url.length) {
	                            // get the cached xhr request
	                            var xhr = requests[url];
	                            // ensure the xhr request exists
	                            xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
	                            xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
	                            xhr._embeds.push({
	                                svg: svg,
	                                id: id
	                            }), // prepare the xhr ready state change event
	                            loadreadystatechange(xhr);
	                        } else {
	                            // embed the local id into the svg
	                            embed(svg, document.getElementById(id));
	                        }
	                    }
	                } else {
	                    // increase the index when the previous value was not "valid"
	                    ++index;
	                }
	            }
	            // continue the interval
	            requestAnimationFrame(oninterval, 67);
	        }
	        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/;
	        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537;
	        // create xhr requests object
	        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use");
	        // conditionally start the interval if the polyfill is active
	        polyfill && oninterval();
	    }
	    return svg4everybody;
	});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/*! npm.im/object-fit-images 3.2.3 */
	'use strict';

	var OFI = 'bfred-it:object-fit-images';
	var propRegex = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g;
	var testImg = typeof Image === 'undefined' ? {style: {'object-position': 1}} : new Image();
	var supportsObjectFit = 'object-fit' in testImg.style;
	var supportsObjectPosition = 'object-position' in testImg.style;
	var supportsOFI = 'background-size' in testImg.style;
	var supportsCurrentSrc = typeof testImg.currentSrc === 'string';
	var nativeGetAttribute = testImg.getAttribute;
	var nativeSetAttribute = testImg.setAttribute;
	var autoModeEnabled = false;

	function createPlaceholder(w, h) {
		return ("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + w + "' height='" + h + "'%3E%3C/svg%3E");
	}

	function polyfillCurrentSrc(el) {
		if (el.srcset && !supportsCurrentSrc && window.picturefill) {
			var pf = window.picturefill._;
			// parse srcset with picturefill where currentSrc isn't available
			if (!el[pf.ns] || !el[pf.ns].evaled) {
				// force synchronous srcset parsing
				pf.fillImg(el, {reselect: true});
			}

			if (!el[pf.ns].curSrc) {
				// force picturefill to parse srcset
				el[pf.ns].supported = false;
				pf.fillImg(el, {reselect: true});
			}

			// retrieve parsed currentSrc, if any
			el.currentSrc = el[pf.ns].curSrc || el.src;
		}
	}

	function getStyle(el) {
		var style = getComputedStyle(el).fontFamily;
		var parsed;
		var props = {};
		while ((parsed = propRegex.exec(style)) !== null) {
			props[parsed[1]] = parsed[2];
		}
		return props;
	}

	function setPlaceholder(img, width, height) {
		// Default: fill width, no height
		var placeholder = createPlaceholder(width || 1, height || 0);

		// Only set placeholder if it's different
		if (nativeGetAttribute.call(img, 'src') !== placeholder) {
			nativeSetAttribute.call(img, 'src', placeholder);
		}
	}

	function onImageReady(img, callback) {
		// naturalWidth is only available when the image headers are loaded,
		// this loop will poll it every 100ms.
		if (img.naturalWidth) {
			callback(img);
		} else {
			setTimeout(onImageReady, 100, img, callback);
		}
	}

	function fixOne(el) {
		var style = getStyle(el);
		var ofi = el[OFI];
		style['object-fit'] = style['object-fit'] || 'fill'; // default value

		// Avoid running where unnecessary, unless OFI had already done its deed
		if (!ofi.img) {
			// fill is the default behavior so no action is necessary
			if (style['object-fit'] === 'fill') {
				return;
			}

			// Where object-fit is supported and object-position isn't (Safari < 10)
			if (
				!ofi.skipTest && // unless user wants to apply regardless of browser support
				supportsObjectFit && // if browser already supports object-fit
				!style['object-position'] // unless object-position is used
			) {
				return;
			}
		}

		// keep a clone in memory while resetting the original to a blank
		if (!ofi.img) {
			ofi.img = new Image(el.width, el.height);
			ofi.img.srcset = nativeGetAttribute.call(el, "data-ofi-srcset") || el.srcset;
			ofi.img.src = nativeGetAttribute.call(el, "data-ofi-src") || el.src;

			// preserve for any future cloneNode calls
			// https://github.com/bfred-it/object-fit-images/issues/53
			nativeSetAttribute.call(el, "data-ofi-src", el.src);
			if (el.srcset) {
				nativeSetAttribute.call(el, "data-ofi-srcset", el.srcset);
			}

			setPlaceholder(el, el.naturalWidth || el.width, el.naturalHeight || el.height);

			// remove srcset because it overrides src
			if (el.srcset) {
				el.srcset = '';
			}
			try {
				keepSrcUsable(el);
			} catch (err) {
				if (window.console) {
					console.warn('https://bit.ly/ofi-old-browser');
				}
			}
		}

		polyfillCurrentSrc(ofi.img);

		el.style.backgroundImage = "url(\"" + ((ofi.img.currentSrc || ofi.img.src).replace(/"/g, '\\"')) + "\")";
		el.style.backgroundPosition = style['object-position'] || 'center';
		el.style.backgroundRepeat = 'no-repeat';
		el.style.backgroundOrigin = 'content-box';

		if (/scale-down/.test(style['object-fit'])) {
			onImageReady(ofi.img, function () {
				if (ofi.img.naturalWidth > el.width || ofi.img.naturalHeight > el.height) {
					el.style.backgroundSize = 'contain';
				} else {
					el.style.backgroundSize = 'auto';
				}
			});
		} else {
			el.style.backgroundSize = style['object-fit'].replace('none', 'auto').replace('fill', '100% 100%');
		}

		onImageReady(ofi.img, function (img) {
			setPlaceholder(el, img.naturalWidth, img.naturalHeight);
		});
	}

	function keepSrcUsable(el) {
		var descriptors = {
			get: function get(prop) {
				return el[OFI].img[prop ? prop : 'src'];
			},
			set: function set(value, prop) {
				el[OFI].img[prop ? prop : 'src'] = value;
				nativeSetAttribute.call(el, ("data-ofi-" + prop), value); // preserve for any future cloneNode
				fixOne(el);
				return value;
			}
		};
		Object.defineProperty(el, 'src', descriptors);
		Object.defineProperty(el, 'currentSrc', {
			get: function () { return descriptors.get('currentSrc'); }
		});
		Object.defineProperty(el, 'srcset', {
			get: function () { return descriptors.get('srcset'); },
			set: function (ss) { return descriptors.set(ss, 'srcset'); }
		});
	}

	function hijackAttributes() {
		function getOfiImageMaybe(el, name) {
			return el[OFI] && el[OFI].img && (name === 'src' || name === 'srcset') ? el[OFI].img : el;
		}
		if (!supportsObjectPosition) {
			HTMLImageElement.prototype.getAttribute = function (name) {
				return nativeGetAttribute.call(getOfiImageMaybe(this, name), name);
			};

			HTMLImageElement.prototype.setAttribute = function (name, value) {
				return nativeSetAttribute.call(getOfiImageMaybe(this, name), name, String(value));
			};
		}
	}

	function fix(imgs, opts) {
		var startAutoMode = !autoModeEnabled && !imgs;
		opts = opts || {};
		imgs = imgs || 'img';

		if ((supportsObjectPosition && !opts.skipTest) || !supportsOFI) {
			return false;
		}

		// use imgs as a selector or just select all images
		if (imgs === 'img') {
			imgs = document.getElementsByTagName('img');
		} else if (typeof imgs === 'string') {
			imgs = document.querySelectorAll(imgs);
		} else if (!('length' in imgs)) {
			imgs = [imgs];
		}

		// apply fix to all
		for (var i = 0; i < imgs.length; i++) {
			imgs[i][OFI] = imgs[i][OFI] || {
				skipTest: opts.skipTest
			};
			fixOne(imgs[i]);
		}

		if (startAutoMode) {
			document.body.addEventListener('load', function (e) {
				if (e.target.tagName === 'IMG') {
					fix(e.target, {
						skipTest: opts.skipTest
					});
				}
			}, true);
			autoModeEnabled = true;
			imgs = 'img'; // reset to a generic selector for watchMQ
		}

		// if requested, watch media queries for object-fit change
		if (opts.watchMQ) {
			window.addEventListener('resize', fix.bind(null, imgs, {
				skipTest: opts.skipTest
			}));
		}
	}

	fix.supportsObjectFit = supportsObjectFit;
	fix.supportsObjectPosition = supportsObjectPosition;

	hijackAttributes();

	module.exports = fix;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Main styles

	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);

	// All components

	// require.context("./plugins", true, /\.css$/);
	__webpack_require__(11);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./breadcrumbs.css": 12,
		"./header/header.css": 13
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 11;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	var svgUse = {
	  run: function run() {
	    (function (window, document) {
	      'use strict';

	      var file = '/local/client/build/svgSprite/sprite.svg',
	          revision = INLINE_SVG_REVISION;

	      if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;

	      var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
	          request,
	          data,
	          insertIT = function insertIT() {
	        var g = document.createElement('div');
	        g.id = 'svg-sprite';
	        g.className = 'hidden';
	        document.body.appendChild(g);
	        document.getElementById('svg-sprite').insertAdjacentHTML('afterbegin', data);
	        svg4everybody({
	          polyfill: true // polyfill <use> elements for External Content
	        });
	      },
	          insert = function insert() {
	        if (document.body) insertIT();else document.addEventListener('DOMContentLoaded', insertIT);
	      };

	      if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
	        data = localStorage.getItem('inlineSVGdata');
	        if (data) {
	          insert();
	          return true;
	        }
	      }

	      try {
	        request = new XMLHttpRequest();
	        request.open('GET', file, true);
	        request.onload = function () {
	          if (request.status >= 200 && request.status < 400) {
	            data = request.responseText;
	            insert();
	            if (isLocalStorage) {
	              localStorage.setItem('inlineSVGdata', data);
	              localStorage.setItem('inlineSVGrev', revision);
	            }
	          }
	        };
	        request.send();
	      } catch (e) {}
	    })(window, document);
	  }
	};

	module.exports = svgUse;

/***/ })
/******/ ]);