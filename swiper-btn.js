jQuery(document).ready(function ($) {
    var btn = $('.swiper-button-next')
    console.log(btn);
    $('.swiper-button-next').on('click', function () {
        console.log($('.swiper-button-next'));
        $('.swiper-button-prev').addClass('mystyle');
    });
});

console.log(555)