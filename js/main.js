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
    })

    //funfact counterUp
    $('.counter').counterUp({
        delay: 15,
        time: 1000,
    });


    //testimonial slider
    $('.web-list').slick({
        arrows: true,
        dots: false,
        slidesToShow: 5,
        centerMode: true,
        centerPadding: '0',
        prevArrow: '<i class="fas fa-chevron-left slick-prev left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-prev right-arrow"></i>',
    })
})