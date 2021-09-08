// It serves to decrease the number of times the function is called, avoiding poor performance.
const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


// Animation Scroll - JavaScript
// https://www.youtube.com/watch?v=pKTOT63X9XQ&list=LLNSJDO4FhPCoC8_341tbGmg&index=24&t=2s
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + 800;
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } 
        // else {
        //     element.classList.remove(animationClass);
        // }
    })
}

animeScroll();

if (target.length) {
    window.addEventListener('scroll', debounce(function () {
        animeScroll();
    }, 200));
}


// Animation Scroll Voluntary - jQuery
// https://www.youtube.com/watch?v=e3NhP1nt-lY&list=LLNSJDO4FhPCoC8_341tbGmg&index=23&t=0s
(function () { // LEFT
    var $targetx = $('.anime-left'),
        animationClass = 'anime-start',
        offset = $(window).height() * 4 / 5;

    function animeScroll() {
        var documentTop = $(document).scrollTop();

        $targetx.each(function () {
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            } 
            // else {
            //     $(this).removeClass(animationClass);
            // }
        });
    }

    animeScroll();

    $(document).scroll(debounce(function () {
        animeScroll();
    }, 200));
})();

(function () { // RIGHT
    var $targety = $('.anime-right'),
        animationClass = 'anime-start',
        offset = $(window).height() * 4 / 5;

    function animeScroll() {
        var documentTop = $(document).scrollTop();

        $targety.each(function () {
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            } 
            // else {
            //     $(this).removeClass(animationClass);
            // }
        });
    }

    animeScroll();

    $(document).scroll(debounce(function () {
        animeScroll();
    }, 200));
})();