const formValidation = () => {
    const forms = document.querySelectorAll('.form')
    forms.forEach(formItem => {
        const pristine = new Pristine(formItem);
        formItem.addEventListener('submit', function (e) {
            e.preventDefault();
            const valid = pristine.validate();
            if (valid) {
                formItem.submit();
            } else {
                setTimeout(() => {
                    pristine.reset();
                }, 5000)
            }
        });
    });
}

const imgToBackground = () => {
    document.querySelectorAll(".ibg").forEach(el => {
        if (el.querySelector('img')) {
            el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
            el.querySelector('img').style.display = 'none';
        }
    });
}

const sliders = () => {
    const sliderSertificates = new Swiper('.slider-sertificates__container', {
        spaceBetween: 10,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.slider-sertificates__arrow--next',
            prevEl: '.slider-sertificates__arrow--prev'
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 3
            }
        }
    });
}

const inputMasking = () => {
    document.querySelectorAll('.js-mask-phone').forEach(item => {
        item.addEventListener('input', e => {
            VMasker(e.target).maskPattern("(999) 999-99-99");
        });
    });
}

const smoothScroll = (duration) => {
    var linksNav = document.querySelectorAll('.js-smoothscroll-btn')
    linksNav.forEach( item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            var target = document.querySelector(e.target.getAttribute('href'));
            var targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            var startPosition = window.pageYOffset;
            var distance = targetPosition - startPosition;
            var startTime = null;

            function animation(currentTime){
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
                return - c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        }, false);
    });
    
};

const preloader = () => {
    const preloaderBody = document.querySelector('.preloader__body');
    const preloader = document.querySelector('.preloader');
    const body = document.querySelector('body'); 
    if (preloader) {
        body.classList.add('lock');
        new Promise((resolve) => {
            setTimeout(resolve, 800)
        })
        .then(() => {
            preloaderBody.style.display = 'none';
            preloader.classList.add('is-loaded');
            body.classList.remove('lock');
        });
    }
};