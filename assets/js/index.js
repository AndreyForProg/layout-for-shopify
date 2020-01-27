$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#go_top').fadeIn();
        } else {
            $('#go_top').fadeOut();
        }
    });
    $('#go_top').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
});

$('.slider_banners').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});


$('.slider_products.desctop').slick({
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4
});

$('.slider_products.mobile').slick({
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2
});
