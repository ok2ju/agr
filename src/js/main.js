$(document).ready(function() {

  $(".Modern-Slider").slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase:'linear',
   // fade:true,
    draggable: false,
    arrows: false
  });

  var $slideshow = $(".events-slider");

  $('.slider-nav-list').on('click', 'a', function(e) {
    e.preventDefault();
    slideIndex = $(this).closest('li').index();
    $slideshow.slick('slickGoTo', slideIndex, false);
  });

  $slideshow.slick({
    autoplay: false,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: false,
    pauseOnDotsHover: true,
    cssEase:'linear',
    fade:true,
    draggable: false,
    arrows: false
  });

  $('.advices-slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: false,
    pauseOnDotsHover: true,
    cssEase:'linear',
    fade:true,
    draggable: false,
    arrows: false
  });

});
