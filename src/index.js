import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/js/all.min";
import "jquery/dist/jquery.min.js";
import './styles/main.scss';
import './styles/trip1.scss';
import './styles/trip2.scss';


$(function(){
    $(window).on('load scroll', function () {
        if($(window).scrollTop() > 30) {
            $('#main-page').addClass('header-active');
        }else {
            $('#main-page').removeClass('header-active');
        }
    });
});

$('.product-small-image img').on('click', function () {
    const bigImage = $('#big-image');
    const smallImages = $('.product-small-image img');
    smallImages.removeClass('active');
    $(this).addClass('active');
    bigImage.attr("src", (this).src);
});