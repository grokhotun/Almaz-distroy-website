!!include('./partials/polyfills.js');
!!include('./partials/common.js');

const yandexMaps = () => {
    ymaps.ready(init);
    function init() {
        var map = new ymaps.Map('map', {
            center: [55.768329, 37.597459],
            zoom: 16,
        });
    }
}

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