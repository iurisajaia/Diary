// $(document).ready(function () {

//     $('.tab-link').click(function () {
//         var tab_id = $(this).attr('data-tab');

//         $('.tab-link').removeClass('current');
//         $('.tab-content').removeClass('current');

//         $(this).addClass('current');
//         $("#" + tab_id).addClass('current');
//     })

// })

/* 
 Created on : Jul 4, 2017, 12:43:10 AM
 Author     : Atta-Ur-Rehman Shah (http://attacomsian.com)
 */
$(function () {
    //init wow effects
    new WOW().init();

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});