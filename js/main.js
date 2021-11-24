$(document).ready(function(){
    'usr strict'


    // banner slider
    $('.banner_slider').slick({
        autoplay: true,
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
})