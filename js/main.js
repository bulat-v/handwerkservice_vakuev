(function ($) {
    "use strict";
    // Auto-scroll
    $('#myCarousel').carousel({
        interval: 5000
    });

    // Control buttons
    $('.next').click(function () {
        $('.py-5 .carousel').carousel('next');
        return false;
    });
    $('.prev').click(function () {
        $('.py-5 .carousel').carousel('prev');
        return false;
    });

    // On carousel scroll
    $("#myCarousel").on("slide.bs.carousel", function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 3;
        var totalItems = $(".py-5 .carousel-item").length;
        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide -
                (totalItems - idx);
            for (var i = 0; i < it; i++) {
                // append slides to end 
                if (e.direction == "left") {
                    $(
                        ".py-5 .carousel-item").eq(i).appendTo(".py-5 .carousel-inner");
                } else {
                    $(".py-5 .carousel-item").eq(0).appendTo(".py-5 .carousel-inner");
                }
            }
        }
    });
})
(jQuery);