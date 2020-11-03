$(function() {

    let homeH = $("#home").innerHeight()-80;
    let scrollOfset = $(window).scrollTop();
    let tnav = $(".top__nav");

    let nav = $("#nav");
    let navToggle = $("#nav__toggle");
    let teamSlider = $(".team__slider");

    teamSlider.slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: false,
      dots: true,
      responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 535,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
    });

    $("#nav__toggle").on("click", function(event) {
        event.preventDefault();

        $("#nav").toggleClass('active');
        $("#nav__toggle").toggleClass('active');
   });

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top-80;

        navToggle.removeClass('active');
        nav.removeClass('active');


        $("html, body").animate({
            scrollTop: elementOffset
        });

    });

    $(window).on("scroll", function() {

        scrollOfset = $(this).scrollTop();

        checkScroll(scrollOfset);

    });

    function checkScroll(scrollOfset) {

        if(scrollOfset >= homeH) {
            tnav.addClass('show');
        } else {
            tnav.removeClass('show');
        }
    }

});


