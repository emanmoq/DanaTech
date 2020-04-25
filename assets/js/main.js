jQuery(function ($) {


  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();

    if (scrollTop > $('.menuBar').height()) {
      $('.menuBar').addClass('scrollNav');     
    }

    else {
      $('.menuBar').removeClass('scrollNav');

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

