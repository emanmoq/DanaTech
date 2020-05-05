jQuery(function ($) {


  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();

    if (scrollTop > $('.menuBar').height()) {
      $('.menuBar').addClass('scrollNav');     
    }

    else {
      $('.menuBar').removeClass('scrollNav');

    }


  });
  $('.aboutLink .nav-link .dropdown-item').on('click', function () {
    
      $('html, body').animate({ scrollTop: $(this.hash).offset().top - 250 }, 1000);
 
    }
  );
  
  $('.retailCar').owlCarousel({
    autoplay:3000,
    loop:true,
    autoplayHoverPause:true,
    margin:20,
  nav:false,
    dots:false,
    
  responsive:{
  0:{
    items:1
  },
  600:{
    items:1
  },
  1000:{
    items:1
  }
  }
  }); 
   $('.electricSlider').owlCarousel({
    autoplay:1000,
    autoplayHoverPause:true,
    loop:true,
    margin:20,
  nav:false,
    dots:false,
    
  responsive:{
  0:{
    items:1
  },
  600:{
    items:1
  },
  1000:{
    items:1
  }
  }
  });

  $(".close").click(function () {
    $('.navbar-collapse').collapse("hide");
    $(".overlay").css("display", "none");
    $(this).parent().css("display", "none")
  }
  );
  $(".overlay").click(function () {
    $('.navbar-collapse').collapse("hide");
    $(".overlay").css("display", "none");
  });

  $(".navbar-toggler").click(function () {
    $(".overlay").css("display", "block");
  });
  $('.up a').on('click', function () {
    $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
  });


});

