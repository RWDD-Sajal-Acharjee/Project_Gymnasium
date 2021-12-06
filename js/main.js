$(document).ready(function(){
    'usr strict'


    // banner slider
    $('.banner_slider').slick({
        // autoplay: true,
        arrows: false,
        dots: true,
    });

    // venobox
    $('.venobox').venobox({
        border     : '2px',
        bgcolor    : '#E23E38',
        titleattr  : 'data-title',
        titleColor : 'white',
        closeColor : 'red',
        spinner    : 'wandering-cubes',
        spinColor  : '#E23E38',
        share      : ['facebook', 'twitter', 'download']
    });

    //testimonial slider
    $('.testimonialSlider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
        ],

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
        ]
    })

    //funfact counterUp
    $('.counter').counterUp({
        delay: 15,
        time: 1000,
    });


    //brand slider
    $('.web-list').slick({
        arrows: true,
        dots: false,
        slidesToShow: 5,
        centerMode: true,
        centerPadding: '0',
        prevArrow: '<i class="fas fa-chevron-left slick-prev left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-prev right-arrow"></i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
        ],
    })
})