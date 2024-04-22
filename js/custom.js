// jquery
$(document).ready(function () {


    // // Sticky Header
    // $(window).scroll(function () {
    //     stickyHeader();
    // });

    // function stickyHeader() {
    //     if ($(this).scrollTop() > 1) {
    //         $('body').addClass("sticky");
    //     } else {
    //         $('body').removeClass("sticky");
    //     }
    // }
    // // Sticky Header close



    // owlCarousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<ion-icon name="arrow-back-circle"></ion-icon>', '<ion-icon name="arrow-forward-circle"></ion-icon>'],
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // owlCarousel close









    //in-view-js
    var $animation_elements = $('.animation-element');

    var $window = $(window);



    function check_if_in_view() {

        var window_height = $window.height();

        var window_top_position = $window.scrollTop();

        var window_bottom_position = (window_top_position + window_height);



        $.each($animation_elements, function () {

            var $element = $(this);

            var element_height = $element.outerHeight();

            var element_top_position = $element.offset().top;

            var element_bottom_position = (element_top_position + element_height);



            if ((element_bottom_position >= window_top_position) &&

                (element_top_position <= window_bottom_position)) {

                $element.addClass('in-view');

            } else {

                $element.removeClass('in-view');

            }

        });

    }



    $window.on('scroll resize', check_if_in_view);

    $window.trigger('scroll');
    //in-view-js close




    // // wow js
    // new WOW().init();
    // // wow js close




    //   smooth scrolling
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            // Store hash
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

            });
        } // End if
    });
    //   smooth scrolling close




    // slicknav
    $(function () {
        $('#menu').slicknav();
    });
    // slicknav close






})
