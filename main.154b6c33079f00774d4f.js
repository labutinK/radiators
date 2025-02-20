/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/header */ "./src/js/header.js");
/* harmony import */ var inputmask_lib_inputmask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inputmask/lib/inputmask.js */ "./node_modules/inputmask/lib/inputmask.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.mjs");
/* harmony import */ var dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dropzone/dist/dropzone.css */ "./node_modules/dropzone/dist/dropzone.css");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


__webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");




var ImageGallery = /*#__PURE__*/function () {
  function ImageGallery(selector) {
    _classCallCheck(this, ImageGallery);
    this.images = document.querySelectorAll(selector);
    this.modal = null;
    this.init();
  }
  return _createClass(ImageGallery, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.createModal();
      this.images.forEach(function (img) {
        img.addEventListener('click', function () {
          return _this.openModal(img.src);
        });
      });
    }
  }, {
    key: "createModal",
    value: function createModal() {
      var _this2 = this;
      this.modal = document.createElement('div');
      this.modal.style.cssText = "\n            display: none;\n            position: fixed;\n            z-index: 1000;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: rgba(0,0,0,0.8);\n            text-align: center;\n        ";
      var modalImage = document.createElement('img');
      modalImage.style.cssText = "\n            max-width: 90%;\n            max-height: 90%;\n            margin: auto;\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n        ";
      this.modal.appendChild(modalImage);
      this.modal.addEventListener('click', function () {
        return _this2.closeModal();
      });
      document.body.appendChild(this.modal);
    }
  }, {
    key: "openModal",
    value: function openModal(src) {
      var modalImage = this.modal.querySelector('img');
      modalImage.src = src;
      this.modal.style.display = 'block';
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.modal.style.display = 'none';
    }
  }]);
}();
var Quest = /*#__PURE__*/function () {
  function Quest() {
    _classCallCheck(this, Quest);
    this.currentScreen = 1;
    this.screens = document.querySelectorAll(".quest-screen");
    this.resultContainer = document.querySelector(".quest-result");
    this.resultList = document.getElementById("result-list");
    this.init();
  }
  return _createClass(Quest, [{
    key: "init",
    value: function init() {
      var _this3 = this;
      document.querySelectorAll(".quiz-next").forEach(function (button) {
        button.addEventListener("click", function () {
          return _this3.nextScreen();
        });
      });
      document.querySelectorAll(".quiz-prev").forEach(function (button) {
        button.addEventListener("click", function () {
          return _this3.prevScreen();
        });
      });
      document.querySelector(".finish").addEventListener("click", function () {
        return _this3.showResult();
      });
      // document.querySelector(".restart").addEventListener("click", () => this.restart());
    }
  }, {
    key: "showScreen",
    value: function showScreen(index) {
      this.screens.forEach(function (screen) {
        return screen.classList.remove("active");
      });
      document.querySelector(".quest-screen[data-screen=\"".concat(index, "\"]")).classList.add("active");
    }
  }, {
    key: "nextScreen",
    value: function nextScreen() {
      if (this.currentScreen < this.screens.length) {
        this.currentScreen++;
        this.showScreen(this.currentScreen);
      }
    }
  }, {
    key: "prevScreen",
    value: function prevScreen() {
      if (this.currentScreen > 1) {
        this.currentScreen--;
        this.showScreen(this.currentScreen);
      }
    }
  }, {
    key: "showResult",
    value: function showResult() {
      // const answers = [];
      // document.querySelectorAll("input[type='radio']:checked").forEach(input => {
      //     answers.push(`${input.name}: ${input.value}`);
      // });

      // this.resultList.innerHTML = answers.map(answer => `<li>${answer}</li>`).join("");

      this.screens.forEach(function (screen) {
        return screen.classList.remove("active");
      });
      this.resultContainer.classList.add("active");
    }

    // restart() {
    //     document.querySelectorAll("input[type='radio']").forEach(input => input.checked = false);
    //     this.resultContainer.classList.remove("active");
    //     this.currentScreen = 1;
    //     this.showScreen(this.currentScreen);
    // }
  }]);
}();
swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Thumbs, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Autoplay, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.FreeMode, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.EffectCards, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.EffectFade, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Controller, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Grid]);
document.addEventListener("DOMContentLoaded", function (event) {
  var header = document.querySelector('.header');
  new _js_header__WEBPACK_IMPORTED_MODULE_0__.CheeseHeader(header);
  new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.sertificats__slider .swiper', {
    spaceBetween: 0,
    preloadImages: false,
    lazy: true,
    slidesPerView: "auto",
    breakpoints: {
      768: {
        spaceBetween: 20,
        slidesPerView: "auto"
      },
      1080: {
        spaceBetween: 20,
        slidesPerView: 4
      },
      1340: {
        spaceBetween: 20,
        slidesPerView: 5
      }
    },
    navigation: {
      nextEl: '.sertificats__slider .slider-next',
      prevEl: '.sertificats__slider .slider-prev'
    }
  });
  function updateHeaderHeight() {
    var header = document.querySelector('header');
    var main = document.querySelector('main');
    if (header && main) {
      var headerHeight = header.offsetHeight;
      document.documentElement.style.setProperty('--header-height', "".concat(headerHeight, "px"));
      main.style.marginTop = "var(--header-height)";
    }
  }

  // Запуск при загрузке и при изменении размеров окна
  updateHeaderHeight();
  window.addEventListener('resize', updateHeaderHeight);
  new Modal('video-modal');
  document.querySelectorAll('.blog-item .video-container, .good-detail__main-slider .video-container').forEach(function (container) {
    var video = container.querySelector('video');
    var playButton = container.querySelector('.play-button');
    container.addEventListener('click', function () {
      if (video.paused) {
        video.play();
        playButton.style.display = 'none'; // Скрываем кнопку при воспроизведении
      } else {
        video.pause();
        playButton.style.display = 'flex';
      }
    });
    video.addEventListener('ended', function () {
      playButton.style.display = 'flex'; // Показываем кнопку после завершения видео
    });
  });
  new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.blog-detail__slider .swiper', {
    spaceBetween: 0,
    slidesPerView: 1,
    preloadImages: false,
    lazy: true,
    navigation: {
      nextEl: '.blog-detail__slider .slider-mini-next',
      prevEl: '.blog-detail__slider .slider-mini-prev'
    }
  });
  new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.other-news__slider .swiper', {
    spaceBetween: 16,
    slidesPerView: "auto",
    preloadImages: false,
    lazy: true,
    breakpoints: {
      1441: {
        spaceBetween: 20,
        slidesPerView: 4
      }
    }
  });
  var tabsBlock = document.querySelectorAll('[data-tabs]');
  if (tabsBlock.length) {
    tabsBlock.forEach(function (tabsBlock) {
      var btns = tabsBlock.querySelectorAll('[data-tab]');
      var blocks = tabsBlock.querySelectorAll('[data-tab-block]');
      var _iterator = _createForOfIteratorHelper(btns),
        _step;
      try {
        var _loop = function _loop() {
          var btn = _step.value;
          btn.addEventListener('click', function () {
            var id = btn.getAttribute('data-tab');
            var _iterator2 = _createForOfIteratorHelper(blocks),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var block = _step2.value;
                if (block.getAttribute('data-tab-block') === id) {
                  block.setAttribute('data-active', '');
                  scrollToElementWithHeaderOffset(block, 150);
                } else {
                  block.removeAttribute('data-active');
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            btn.setAttribute('data-active', '');
            var _iterator3 = _createForOfIteratorHelper(btns),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var otherBtn = _step3.value;
                if (otherBtn.getAttribute('data-tab') !== id) {
                  otherBtn.removeAttribute('data-active');
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          });
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }
  function scrollToElementWithHeaderOffset(element) {
    var additionalHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var headerHeight = document.querySelector('header').offsetHeight; // Высота хедера
    var elementPosition = element.getBoundingClientRect().top; // Позиция элемента относительно верхней границы окна
    var offsetPosition = elementPosition - headerHeight - additionalHeight; // Позиция с учетом высоты хедера

    // Прокручиваем страницу на нужное расстояние
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  var filterBox = document.querySelector('.catalog-sort');
  if (filterBox) {
    var filterBoxTop = filterBox.querySelector('.catalog-sort__current');
    var filterBoxList = filterBox.querySelector('.catalog-sort__body');
    var filterBoxItems = filterBox.querySelectorAll('.catalog-sort__item-to-choose');
    var clickOutBoxHandler = function clickOutBoxHandler(_ref) {
      var target = _ref.target;
      if (!target.classList.contains('catalog-sort__current') && !target.closest('.catalog-sort__current')) {
        filterBoxList.removeAttribute('data-active');
      }
    };
    filterBoxItems.forEach(function (filterBoxItem) {
      filterBoxItem.addEventListener('click', function (evt) {
        if (!filterBoxItem.hasAttribute('data-active')) {
          var activeCur = filterBoxList.querySelector('[data-active]');
          activeCur === null || activeCur === void 0 || activeCur.removeAttribute('data-active');
          filterBoxItem.setAttribute('data-active', true);
          filterBoxTop.textContent = filterBoxItem.textContent;
        }
      });
    });
    filterBoxTop.addEventListener('click', function (evt) {
      if (filterBoxList.getAttribute('data-active')) {
        filterBoxList.removeAttribute('data-active');
      } else {
        filterBoxList.setAttribute('data-active', true);
        document.addEventListener('click', clickOutBoxHandler);
      }
    });
  }
  document.querySelectorAll('.catalog-card__photo').forEach(function (photoBlock, index) {
    var swiperContainer = photoBlock.querySelector('.swiper');
    var pagination = photoBlock.querySelector('.catalog-card__pagination');
    var video = photoBlock.querySelectorAll('.video-container');
    if (swiperContainer && pagination) {
      var slider = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"](swiperContainer, {
        spaceBetween: 0,
        slidesPerView: 1,
        pagination: {
          el: pagination,
          type: 'bullets',
          clickable: true
        }
      });
    }
    if (video.length) {
      video.forEach(function (videoItem) {
        var video = videoItem.querySelector('video');
        var playButton = videoItem.querySelector('.play-button');
        videoItem.addEventListener('click', function () {
          if (video.paused) {
            slider.slideNext();
          }
        });
        var stopPlayer = function stopPlayer(evt) {
          video.pause();
          playButton.style.display = 'flex';
          videoItem.removeEventListener('click', stopPlayer);
        };
        playButton.addEventListener('click', function (e) {
          e.stopImmediatePropagation();
          if (video.paused) {
            video.play();
            playButton.style.display = 'none'; // Скрываем кнопку при воспроизведении
            videoItem.addEventListener('click', stopPlayer);
          } else {
            video.pause();
            playButton.style.display = 'flex';
          }
        });
        video.addEventListener('ended', function () {
          playButton.style.display = 'flex'; // Показываем кнопку после завершения видео
        });
      });
    }
  });
  var filterBodyMoreBtns = document.querySelectorAll('.filter-body__more');
  if (filterBodyMoreBtns.length) {
    filterBodyMoreBtns.forEach(function (filterBodyMoreBtn) {
      var box = filterBodyMoreBtn.closest('.filter-body__checks');
      var textBox = filterBodyMoreBtn.querySelector('span');
      var openedText = filterBodyMoreBtn.getAttribute('data-opened-text');
      var closedText = filterBodyMoreBtn.getAttribute('data-closed-text');
      filterBodyMoreBtn.addEventListener('click', function () {
        if (box.classList.contains('opened')) {
          box.classList.remove('opened');
          textBox.textContent = closedText;
        } else {
          box.classList.add('opened');
          textBox.textContent = openedText;
        }
      });
    });
  }
  var body = document.querySelector('body');
  var filterBody = document.getElementById('filter-body');
  var filterOpen = document.getElementById('filter-open');
  var filterClose = document.getElementById('filter-close');
  var closeFilter = function closeFilter() {
    filterBody.classList.remove('opened');
    body.classList.remove('overlayed');
    body.removeEventListener('click', clickOutFilter);
  };
  var clickOutFilter = function clickOutFilter(_ref2) {
    var target = _ref2.target;
    if (!target.classList.contains('filter-body') && !target.closest('.filter-body')) {
      closeFilter();
    }
  };
  filterClose === null || filterClose === void 0 || filterClose.addEventListener('click', closeFilter);
  filterOpen === null || filterOpen === void 0 || filterOpen.addEventListener('click', function (e) {
    e.stopImmediatePropagation();
    filterBody.classList.add('opened');
    body.classList.add('overlayed');
    body.addEventListener('click', clickOutFilter);
  });
  var doProportionIcon = function doProportionIcon(icons) {
    var _iterator4 = _createForOfIteratorHelper(icons),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var icon = _step4.value;
        var widthAttr = icon.getAttribute('width');
        var widthReal = icon.clientWidth;
        var heightAttr = icon.getAttribute('height');
        var heightReal = widthReal / widthAttr * heightAttr;
        icon.style.height = "".concat(heightReal, "px");
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  };
  var icons = document.querySelectorAll('.icon-pr svg');
  if (icons.length) {
    doProportionIcon(icons);
    window.addEventListener('resize', function () {
      doProportionIcon(icons);
    }, 300);
  }
  new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.welcome__slider .swiper', {
    slidesPerView: "auto",
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 2,
        fill: 'columns',
        grid: {
          fill: 'columns',
          rows: 2,
          cols: 2
        }
      },
      1080: {
        slidesPerView: 4
      }
    }
  });
  new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.categories-slider__content .swiper', {
    slidesPerView: "auto",
    spaceBetween: 20,
    breakpoints: {
      769: {
        slidesPerView: 3
      },
      1080: {
        slidesPerView: 3
      }
    }
  });
  new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.galery-slider__wrapper .swiper', {
    slidesPerView: .4,
    spaceBetween: 6,
    freeMode: true,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      768: {
        spaceBetween: 10,
        slidesPerView: .6
      },
      1080: {
        spaceBetween: 18,
        slidesPerView: 1
      }
    }
  });
  new ImageGallery('.galery-slider__item img');
  new ImageGallery('.good-review-item__photo img');
  new ImageGallery('.sertificats-block__item img');
  var cartBtn = document.querySelector('.header-cart-btn');
  var headerCart = document.querySelector('.header-cart');
  if (cartBtn && headerCart) {
    var clickOutBasket = function clickOutBasket(_ref3) {
      var target = _ref3.target;
      if (!target.classList.contains('header-cart') && !target.closest('.header-cart')) {
        headerCart.removeAttribute('data-open');
      }
    };
    cartBtn.addEventListener('click', function (e) {
      if (window.innerWidth >= 1080) {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (!headerCart.hasAttribute('data-open')) {
          headerCart.setAttribute('data-open', true);
          document.addEventListener('click', clickOutBasket);
        }
      }
    });
  }

  // Инициализация нижнего слайдера (миниатюры)
  var sideSlider = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.good-detail__side-slider .swiper', {
    slidesPerView: "auto",
    // Показывать по 2 слайда
    watchSlidesProgress: true,
    direction: "horizontal",
    spaceBetween: 4,
    // Отступ между слайдами
    slideToClickedSlide: true,
    // Переключение главного слайдера при клике
    breakpoints: {
      768: {
        direction: "vertical",
        spaceBetween: 12 // Отступ между слайдами
      }
    }
  });

  // Инициализация верхнего слайдера (основной)
  var mainSlider = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.good-detail__main-slider .swiper', {
    slidesPerView: 1,
    // Один слайд за раз
    spaceBetween: 0,
    // Без отступов
    thumbs: {
      swiper: sideSlider // Привязка к нижнему слайдеру
    }
  });
  var morePhotosInReviews = document.querySelectorAll('.good-review-item__more');
  if (morePhotosInReviews.length) {
    morePhotosInReviews.forEach(function (morePhotosInReview) {
      var box = morePhotosInReview.closest('.good-review-item__photos');
      var hiddenItems = box.querySelectorAll('.good-review-item__photo--hidden');
      morePhotosInReview.addEventListener('click', function () {
        morePhotosInReview.style.display = 'none';
        hiddenItems.forEach(function (hiddenItem) {
          hiddenItem.classList.remove('good-review-item__photo--hidden');
        });
      });
    });
  }
  var readMoreTextBtns = document.querySelectorAll('.good-review-item__more-text');
  readMoreTextBtns.forEach(function (readMoreTextBtn) {
    var hiddenText = readMoreTextBtn.closest('.good-review-item__text').querySelector('.good-review-item__hidden');
    readMoreTextBtn.addEventListener('click', function () {
      if (hiddenText.hasAttribute('data-open')) {
        hiddenText.removeAttribute('data-open');
        readMoreTextBtn.textContent = readMoreTextBtn.getAttribute('data-show-text');
      } else {
        hiddenText.setAttribute('data-open', true);
        readMoreTextBtn.textContent = readMoreTextBtn.getAttribute('data-hide-text');
      }
    });
  });
  document.querySelectorAll('.products-list').forEach(function (productsList, index) {
    var swiperContainer = productsList.querySelector('.swiper');
    var navLeft = productsList.querySelector('.slider-prev');
    var navRight = productsList.querySelector('.slider-next');
    new swiper__WEBPACK_IMPORTED_MODULE_2__["default"](swiperContainer, {
      spaceBetween: 0,
      preloadImages: false,
      lazy: true,
      slidesPerView: "auto",
      breakpoints: {
        768: {
          spaceBetween: 20,
          slidesPerView: "auto"
        },
        1080: {
          spaceBetween: 20,
          slidesPerView: 3
        },
        1340: {
          spaceBetween: 20,
          slidesPerView: 4
        }
      },
      navigation: {
        nextEl: navRight,
        prevEl: navLeft
      }
    });
  });
  new Modal('watch-online').setAdditionalLogicAfterSubmit(function (wrapper) {
    var form = wrapper.querySelector(".form");
    if (form) {
      var validator = new FormValidator(form);
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var fd = new FormData(form);
        var successModal = document.getElementById('success-modal').content.cloneNode(true);
        validator.submit(function () {
          var _wrapper$querySelecto;
          (_wrapper$querySelecto = wrapper.querySelector('.modal-form__wrapper')) === null || _wrapper$querySelecto === void 0 || _wrapper$querySelecto.replaceWith(successModal);
        }, function () {});
      });
    }
  });
  new Modal('found-cheaper').setAdditionalLogicAfterSubmit(function (wrapper) {
    var form = wrapper.querySelector(".form");
    if (form) {
      var validator = new FormValidator(form);
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var fd = new FormData(form);
        var successModal = document.getElementById('success-modal').content.cloneNode(true);
        validator.submit(function () {
          var _wrapper$querySelecto2;
          (_wrapper$querySelecto2 = wrapper.querySelector('.modal-form__wrapper')) === null || _wrapper$querySelecto2 === void 0 || _wrapper$querySelecto2.replaceWith(successModal);
        }, function () {});
      });
    }
  });
  new Modal('set-radiator').setAdditionalLogicAfterSubmit(function (wrapper) {
    var form = wrapper.querySelector(".form");
    if (form) {
      var validator = new FormValidator(form);
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var fd = new FormData(form);
        var successModal = document.getElementById('success-modal').content.cloneNode(true);
        validator.submit(function () {
          var _wrapper$querySelecto3;
          (_wrapper$querySelecto3 = wrapper.querySelector('.modal-form__wrapper')) === null || _wrapper$querySelecto3 === void 0 || _wrapper$querySelecto3.replaceWith(successModal);
        }, function () {});
      });
    }
  });
  new Modal('leave-review').setAdditionalLogicAfterSubmit(function (wrapper) {
    var form = wrapper.querySelector("[data-form=\"review\"]");
    if (form) {
      var dz = wrapper.querySelector('.dropzone');
      if (dz) {
        dropzone__WEBPACK_IMPORTED_MODULE_4__["default"].autoDiscover = false;
        var myDropzone = new dropzone__WEBPACK_IMPORTED_MODULE_4__["default"](dz, {
          url: "/upload",
          // Серверный обработчик
          maxFiles: 10,
          // Максимум файлов
          maxFilesize: 10,
          // Макс. размер (MB)
          acceptedFiles: "image/jpeg, image/png, image/gif",
          // Разрешенные форматы
          dictDefaultMessage: "<div class=\"dropzone__block\">\n" + "                                        <div class=\"dropzone__icon\">\n" + "                                            <svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n" + "                                                <rect width=\"32\" height=\"32\" fill=\"url(#pattern0_704_11294)\"/>\n" + "                                                <defs>\n" + "                                                    <pattern id=\"pattern0_704_11294\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\">\n" + "                                                        <use xlink:href=\"#image0_704_11294\" transform=\"scale(0.00195312)\"/>\n" + "                                                    </pattern>\n" + "                                                    <image id=\"image0_704_11294\" width=\"512\" height=\"512\" xlink:href=\"data:image/png;base64,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\"/>\n" + "                                                </defs>\n" + "                                            </svg>\n" + "                                        </div>\n" + "                                        <div class=\"dropzone__title\">Не забудьте добавить фото</div>\n" + "                                        <div class=\"dropzone__subtitle\">.jpeg, .png, .gpg менее 10 мб</div>\n" + "                                    </div>"
        });
      }
      var validator = new FormValidator(form);
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var fd = new FormData(form);
        var successModal = document.getElementById('success-modal').content.cloneNode(true);
        validator.submit(function () {
          var _wrapper$querySelecto4;
          (_wrapper$querySelecto4 = wrapper.querySelector('.modal-form__wrapper')) === null || _wrapper$querySelecto4 === void 0 || _wrapper$querySelecto4.replaceWith(successModal);
        }, function () {});
      });
    }
  });
  new Modal('quiz').setAdditionalLogicAfterSubmit(function (wrapper) {
    new Quest();
  });
});

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheeseHeader: function() { return /* binding */ CheeseHeader; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var CheeseHeader = /*#__PURE__*/function () {
  function CheeseHeader(header) {
    var _this = this;
    _classCallCheck(this, CheeseHeader);
    _defineProperty(this, "_clickOutBurger", function (_ref) {
      var target = _ref.target;
      if (!_this._header.hasAttribute('data-animating')) {
        if (!target.classList.contains('header') && !target.closest('header')) {
          _this._closeBurger();
        }
      }
    });
    this._header = header;
    this._body = document.querySelector('body');
    this._burgerIcon = this._header.querySelector('.header__burger-icon');
    this._burger = this._header.querySelector('.header__nav');
    this._addHandlers();
    this._isDesktop = window.innerWidth > 1080;
  }
  return _createClass(CheeseHeader, [{
    key: "_openBurger",
    value: function _openBurger() {
      var _this2 = this;
      this._burger.setAttribute('data-open', true);
      this._burgerIcon.setAttribute('data-open', true);
      this._header.setAttribute('data-open', true);
      this._body.classList.add('blocked');
      document.addEventListener('click', this._clickOutBurger);
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.slideDown)(this._burger, 300, function () {
        _this2._header.removeAttribute('data-animating');
      });
    }
  }, {
    key: "_resetStylesForDesktop",
    value: function _resetStylesForDesktop() {
      this._burger.style = '';
      this._burgerIcon.removeAttribute('data-open');
      this._burger.removeAttribute('data-open');
      this._header.removeAttribute('data-open');
      this._body.classList.remove('blocked');
      this._isDesktop = true;
    }
  }, {
    key: "_closeBurger",
    value: function _closeBurger() {
      var _this3 = this;
      this._burgerIcon.removeAttribute('data-open');
      document.removeEventListener('click', this._clickOutBurger);
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.slideUp)(this._burger, 300, function () {
        _this3._header.removeAttribute('data-animating');
        _this3._burger.removeAttribute('data-open');
        _this3._header.removeAttribute('data-open');
        _this3._body.classList.remove('blocked');
      });
    }
  }, {
    key: "_addHandlers",
    value: function _addHandlers() {
      var _this4 = this;
      this._burgerIcon.addEventListener('click', function () {
        if (!_this4._header.hasAttribute('data-animating')) {
          _this4._header.setAttribute('data-animating', true);
          if (_this4._burger.hasAttribute('data-open')) {
            _this4._closeBurger();
          } else {
            _this4._openBurger();
          }
        }
      });
      window.addEventListener('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function () {
        _this4._isDesktop = window.innerWidth > 1080;
        if (_this4._isDesktop) {
          _this4._resetStylesForDesktop();
        }
      }, 100));
    }
  }]);
}();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slideDown: function() { return /* binding */ slideDown; },
/* harmony export */   slideUp: function() { return /* binding */ slideUp; }
/* harmony export */ });
/* unused harmony export slideToggle */
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var slideUp = function slideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = "".concat(duration, "ms");
  target.style.boxSizing = 'border-box';
  target.style.height = "".concat(target.offsetHeight, "px");
  // eslint-disable-next-line no-unused-expressions
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(function () {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    callback();
  }, duration);
};

/* SLIDE DOWN */
var slideDown = function slideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  target.style.removeProperty('display');
  var display = window.getComputedStyle(target).display;
  if (display === 'none') {
    display = 'block';
  }
  target.style.display = display;
  var height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  // eslint-disable-next-line no-unused-expressions
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = "".concat(duration, "ms");
  target.style.height = "".concat(height, "px");
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(function () {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    callback();
  }, duration);
};

/* TOOGLE */
var slideToggle = function slideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};
var accordeons = document.querySelectorAll('.faq-item');
if (accordeons.length) {
  var _iterator = _createForOfIteratorHelper(accordeons),
    _step;
  try {
    var _loop = function _loop() {
      var accordeon = _step.value;
      var button = accordeon.querySelector('.faq-item__question');
      button.addEventListener('click', function () {
        var _iterator2 = _createForOfIteratorHelper(accordeons),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var otherAccordeon = _step2.value;
            if (otherAccordeon !== accordeon) {
              otherAccordeon.classList.remove('faq-item--active');
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        accordeon.classList.add('faq-item--active');
      });
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

// faq-page
var faqs = document.querySelectorAll('.faq-block');
if (faqs.length) {
  var _iterator3 = _createForOfIteratorHelper(faqs),
    _step3;
  try {
    var _loop2 = function _loop2() {
      var accordeon = _step3.value;
      var button = accordeon.querySelector('.faq-block__question');
      var answer = accordeon.querySelector('.faq-block__answer');
      button.addEventListener('click', function () {
        if (accordeon.classList.contains('faq-block--active')) {
          slideUp(answer, 300, function () {});
          accordeon.classList.remove('faq-block--active');
        } else {
          var _iterator4 = _createForOfIteratorHelper(faqs),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var otherAccordeon = _step4.value;
              if (otherAccordeon !== accordeon) {
                otherAccordeon.classList.remove('faq-block--active');
                var otherAnswer = otherAccordeon.querySelector('.faq-block__answer');
                slideUp(otherAnswer, 300, function () {});
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          slideDown(answer, 300, function () {});
          accordeon.classList.add('faq-block--active');
        }
      });
    };
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhefo"] = self["webpackChunkhefo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.154b6c33079f00774d4f.js.map