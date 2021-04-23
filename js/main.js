(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 54,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 56,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $(".gallery-modal").on("show.bs.modal", function (e) {
    $(".navbar").addClass("d-none");
  });
  $(".gallery-modal").on("hidden.bs.modal", function (e) {
    $(".navbar").removeClass("d-none");
  });

  $(".img-modal").on('click',function () {
    //var url = "url('"+$(this).attr("src").replace("_Thumb", "");+"')";
    $("#modal-img").attr("src", $(this).attr("src").replace("_Thumb", ""));
    //$("#modal-img").css("background-image",url);
  });

  $(".ajaxForm").submit(function (e) {
    e.preventDefault();
    var href = $(this).attr("action");
    $.ajax({
      type: "POST",
      dataType: "json",
      url: href,
      data: $(this).serialize(),
      success: function (response) {
        if (response.status == "success") {
          alert("We received your submission, thank you!");
        } else {
          alert("An error occured: " + response.message);
        }
      },
    });
  });
})(jQuery); // End of use strict
