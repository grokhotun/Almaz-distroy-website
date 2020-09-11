"use strict";

/*
    Полифилы
*/
// Полифил на forEach
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

;

var formValidation = function formValidation() {
  var forms = document.querySelectorAll('.form');
  forms.forEach(function (formItem) {
    var pristine = new Pristine(formItem);
    formItem.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = pristine.validate();

      if (valid) {
        formItem.submit();
      } else {
        setTimeout(function () {
          pristine.reset();
        }, 5000);
      }
    });
  });
};

var imgToBackground = function imgToBackground() {
  document.querySelectorAll(".ibg").forEach(function (el) {
    if (el.querySelector('img')) {
      el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
      el.querySelector('img').style.display = 'none';
    }
  });
};

var sliders = function sliders() {
  var sliderSertificates = new Swiper('.slider-sertificates__container', {
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.slider-sertificates__arrow--next',
      prevEl: '.slider-sertificates__arrow--prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1199: {
        slidesPerView: 3
      }
    }
  });
};

var inputMasking = function inputMasking() {
  document.querySelectorAll('.js-mask-phone').forEach(function (item) {
    item.addEventListener('input', function (e) {
      VMasker(e.target).maskPattern("(999) 999-99-99");
    });
  });
};

var smoothScroll = function smoothScroll(duration) {
  var linksNav = document.querySelectorAll('.js-smoothscroll-btn');
  linksNav.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(e.target.getAttribute('href'));
      var targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      var startPosition = window.pageYOffset;
      var distance = targetPosition - startPosition;
      var startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }, false);
  });
};

var preloader = function preloader() {
  var preloaderBody = document.querySelector('.preloader__body');
  var preloader = document.querySelector('.preloader');
  var body = document.querySelector('body');

  if (preloader) {
    body.classList.add('lock');
    new Promise(function (resolve) {
      setTimeout(resolve, 800);
    }).then(function () {
      preloaderBody.style.display = 'none';
      preloader.classList.add('is-loaded');
      body.classList.remove('lock');
    });
  }
};

;

var yandexMaps = function yandexMaps() {
  ymaps.ready(init);

  function init() {
    var map = new ymaps.Map('map', {
      center: [55.768329, 37.597459],
      zoom: 16
    });
  }
};

document.addEventListener("DOMContentLoaded", function (event) {
  imgToBackground();
  sliders();
  formValidation();
  inputMasking();
  smoothScroll(500);
  preloader();
  yandexMaps();
  svg4everybody();
});