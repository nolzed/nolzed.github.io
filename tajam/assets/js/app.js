$(function() {

    let introSlider = $(".intro__slider");
    let nav = $("#nav");
    let navToggle = $("#nav-toggle");

    introSlider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 6000,
      swipe: false
    });


    let revSlider = $(".reviews__slider--item");
    let revSlidernav = $(".reviews__slider--img");

    revSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: true,
        asNavFor: revSlidernav
    });

    revSlidernav.slick({
        slidesToShow: 5,
        infinite: true,
        slidesToScroll: 1,
        asNavFor: revSlider,
        focusOnSelect: true,
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
          responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    } ]
    });

    $("#nav-toggle").on("click", function(event) {
        event.preventDefault();

        $("#nav").toggleClass('active');
        $("#nav-toggle").toggleClass('active');
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
});
