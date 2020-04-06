   var typed = new Typed('#typed', {
       stringsElement: '#typed-strings',
       loop: true,
       loopCount: Infinity,
   });

   $(document).ready(function () {
       $('.venobox').venobox();
   });
//    $('.multiple-items').slick({
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay:true,
//     autoplaySpeed:1000,
//     arrows: false,
//     centerMode: true,
    
//   });
  $('.center').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay:true,
    autoplaySpeed:1000,
    arrows: false,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });