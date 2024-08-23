/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });



    
})(jQuery);


window.addEventListener('load', function() {
    var loadingMessage = document.getElementById('loading');
    var content = document.getElementById('content');
    var countdownElement = document.getElementById('countdown');
    var countdownValue = 10;

    var countdownInterval = setInterval(function() {
        countdownValue--;
        countdownElement.textContent = countdownValue;

        if (countdownValue <= 0) {
            clearInterval(countdownInterval);
            loadingMessage.style.opacity = '0';
            setTimeout(function() {
                loadingMessage.style.display = 'none';
                content.style.visibility = 'visible';
            }, 500);
        }
    }, 1000);
});


// End of use strict
