$(function () {
  $(".navbar-collapse li a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  var mixer = mixitup(".gallery__inner", {
    load: {
      filter: ".all",
    },
  });

  $(".gallery__items").each(function () {
    $(this).magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      titleSrc: "title",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
    });
  });

  $(".collection").slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt=""></button>',

    // responsive: [
    //   {
    //     breakpoint: 1141,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 846,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 586,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  });

  // $("#phone").intlTelInput({
  //   initialCountry: "auto",
  //   geoIpLookup: function (success, failure) {
  //     $.get("https://ipinfo.io", function () {}, "jsonp").always(function (
  //       resp
  //     ) {
  //       var countryCode = resp && resp.country ? resp.country : "";
  //       success(countryCode);
  //     });
  //   },
  //   utilsScript: "src/utils.js",
  // });

  $(".header__btn").on("click", function (params) {
    $(".overlay, .overlay__block").fadeIn(1000);
  });

  $(".overlay__close").on("click", function (params) {
    $(".overlay, .overlay__block, .overlay__thanks").fadeOut(1000);
  });

  $(".callback__button").on("click", function (event) {
    event.preventDefault();
    $(".overlay, .overlay__block").fadeOut();
    $(".overlay, .overlay__thanks").fadeIn(1000);
    setTimeout(() => {
      $(".overlay, .overlay__thanks").fadeOut(1000);
    }, 4000);
  });
});

VANTA.BIRDS({
  el: "#greeting",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  backgroundColor: "#ffffff",
  color1: "#f02171",
  color2: "#192bd2",
  colorMode: "lerp",
  birdSize: 0.8,
  wingSpan: 25.0,
  separation: 29.0,
  backgroundAlpha: 0.33,
});

var input = document.querySelector("#phone");
intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: function (success, failure) {
    $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
      var countryCode = resp && resp.country ? resp.country : "";
      success(countryCode);
    });
  },
  utilsScript: "src/utils.js",
});

// $('input[type = "tel"]').inputmask("+38(999)999-99-99");

// window.intlTelInput(input, {
//   // allowDropdown: false,
//   // autoHideDialCode: false,
//   // autoPlaceholder: "off",
//   // dropdownContainer: document.body,
//   // excludeCountries: ["us"],
//   // formatOnDisplay: false,
//   // geoIpLookup: function(callback) {
//   //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
//   //     var countryCode = (resp && resp.country) ? resp.country : "";
//   //     callback(countryCode);
//   //   });
//   // },
//   // hiddenInput: "full_number",
//   initialCountry: "UA",
//   // localizedCountries: { 'de': 'Deutschland' },
//   // nationalMode: false,
//   // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
//   placeholderNumberType: "MOBILE",
//   // preferredCountries: ['ua', 'jp'],
//   // separateDialCode: true,
//   utilsScript: "src/utils.js",
//   // utilsScript: "src/utils.js?22",
// });

//  разделить код набора с помощью скобок
// var intlNumber = $("#phone").intlTelInput("getNumber"); // get full number eg +17024181234
// var countryData = $("#phone").intlTelInput("getSelectedCountryData"); // get country data as obj

//  var countryCode = countryData.dialCode; // using updated doc, code has been replaced with dialCode
// countryCode = "+" + countryCode; // convert 1 to +1

// var newNo = intlNumber.replace(countryCode, "(" + coountryCode+ ")" ); // final version

// VANTA.NET({
//   el: "#greeting",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.0,
//   minWidth: 200.0,
//   scale: 1.0,
//   scaleMobile: 1.0,
//   points: 12.0,
//   maxDistance: 24.0,
//   spacing: 13.0,
//   backgroundColor: "#fff",
//   color: "#fe3e57",
// });
