import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/js/all.min";
import "jquery/dist/jquery.min.js";
import './styles/main.scss';
import './styles/trip1.scss';


$(function(){
    $(window).on('load scroll', function () {
        if($(window).scrollTop() > 30) {
            $('.navbar').addClass('header-active');
        }else {
            $('.navbar').removeClass('header-active');
        }
    });
});