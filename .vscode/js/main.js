$(document).ready(function(){
    'usr strict'

    // color switcher
    $('.color-picker .color-btn').on('click',function(){
        $('.color-picker').toggleClass('color-class');
    })

    $('.color-picker ul li.orange').on('click', function(){
        $('body').addClass('orange').removeClass('blue').removeClass('green');
    })

    $('.color-picker ul li.blue').on('click', function(){
        $('body').addClass('blue').removeClass('orange').removeClass('green');
    })

    $('.color-picker ul li.green').on('click', function(){
        $('body').addClass('green').removeClass('orange').removeClass('blue');
    })

    $('.color-picker ul li.default').on('click', function(){
        $('body').removeClass('orange').removeClass('blue').removeClass('green');
    })

    // scroll function
    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop();
        if(scrolling >=150){
            $('#NAVBAR').fadeOut();
            $('.menu-bar').fadeIn();
        }else{
            $('#NAVBAR').fadeIn();
            $('.menu-bar').fadeOut();
        }
    })


    // banner slider
    $('.banner_slider').slick({
        // autoplay: true,
        arrows: false,
        dots: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    autoplay: false,
                }
            },
        ]
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
        slidesToScroll: 3,
        autoplay: true,
        centerMode: true,
        centerPadding: '0',
        prevArrow: '<i class="fas fa-chevron-left slick-prev left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-prev right-arrow"></i>',

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    autoplay: true,
                    centerMode: true,
                }
            },
        ],

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    arrows: false,
                    autoplay: true,
                    centerMode: false,
                }
            },
        ],

        

        // responsive: [
        //     {
        //         breakpoint: 576,
        //         settings: {
        //             slidesToShow: 1,
        //             arrows: false,
        //             autoplay: true,
        //             centerMode: false,
        //         }
        //     },
        // ],
    })
})