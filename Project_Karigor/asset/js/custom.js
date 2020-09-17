(function () {
    "use strict";
    jQuery(document).ready(function ($) {
        $('.slider-area-start').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            margin: 0,
            nav: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    });
    $('.parallax-window').parallax({
        /*IT WORKED WITHOUT JS*/
        iosFix: true,
        androidFix: true,
    });
    // Breadcrumb Area Parallax
    $('.breadcrumb-area').parallax({
        imageSrc: 'assets/img/blog/03.img',
        iosFix: true,
        androidFix: true,
    });

    /*Testimonial Slider Carousel*/
    $('.testimonial-area').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });




    //Client Slider
    $('.client-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 5
            },
            1000: {
                items: 7
            }
        }
    });







    //    Isotope
    // init Isotope
    var $grid = $('.grid').isotope({
        // options
    });
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });


    // filter .metal items
    $grid.isotope({
        filter: '.metal'
    });

    // filter .alkali OR .alkaline-earth items
    $grid.isotope({
        filter: '.alkali, .alkaline-earth'
    });

    // filter .metal AND .transition items
    $grid.isotope({
        filter: '.metal.transition'
    });

    // show all items
    $grid.isotope({
        filter: '*'
    });









}(jQuery));



//Chart JS 
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar', // The type of chart we want to create
    data: { // The data for our dataset
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Sales in this month',
            backgroundColor: '#800020',
            borderColor: '#800020',
            data: [40, 21, 35, 12, 20, 60, 55, 30, 33, 11, 66, 34]
                }]
    },
    options: {}
});



//PROGRESS bar
