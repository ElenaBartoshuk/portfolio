$(function () {
  $(".navbar-collapse li a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  var mixer = mixitup(".gallery__inner", {
    load: {
      filter: ".all",
    },
  });
});
