$('.your-class').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-slick'
  });
  $('.slider-slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-slick',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });