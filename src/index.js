import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/js/all.min";
import "jquery/dist/jquery.min.js";
import './styles/main.scss';
import './styles/trip.scss';
import './styles/register.scss';


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

document.getElementById('year').innerHTML = new Date().getFullYear();



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
    
            form.classList.add('was-validated')
            }, false)
        })
})()