(($) => {
  $(function ($) {
    function slickCarousal() {
      $('.slider-container-custom').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        mobileFirst: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ],
      });
    }
    slickCarousal();
    $('.quicktabs-loaded').click(function () {
      $('.slider-container-custom').slick('unslick');
      slickCarousal();
      $('.slider-container-custom').hide().fadeIn();
    });
  });
})(jQuery);
