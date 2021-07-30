

 //MIXITUP (PORTFOLIO-SECTION)

$(document).ready(function () {

  var mixer = mixitup(".important");
});

//STICKY MENU

$(document).ready(function () {
  $(".js--services-section").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });
});




