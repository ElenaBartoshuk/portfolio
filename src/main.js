$(".header__btn").on("click", function () {
  if ($("#valid-msg").length) {
    $("#valid-msg").css("display", "none");
  }
});

var input = document.querySelectorAll('input[type="tel"]'),
  errorMsg = document.querySelector("#error-msg"),
  validMsg = document.querySelector("#valid-msg");
validSecondMsg = document.querySelector("#valid2-msg");

var errorMap = [
  "Invalid number",
  "Invalid country code",
  "Too short",
  "Too long",
  "Invalid number",
];

for (let i = 0; i < input.length; i++) {
  var iti = window.intlTelInput(input[i], {
    initialCountry: "auto",
    geoIpLookup: function (success, failure) {
      $.get("https://ipinfo.io", function () {}, "jsonp").always(function (
        resp
      ) {
        var countryCode = resp && resp.country ? resp.country : "";
        success(countryCode);
      });
    },
    utilsScript: "src/utils.js",
  });

  var reset = function () {
    input[i].classList.remove("error");
    errorMsg.innerHTML = "";
    errorMsg.classList.add("hide");
    validMsg.classList.add("hide");
    if (validSecondMsg) {
      validSecondMsg.classList.add("hide");
    }
  };

  input[i].addEventListener("blur", function () {
    reset();
    if (input[i].value.trim()) {
      if (iti.isValidNumber()) {
        validMsg.classList.remove("hide");
        if (validSecondMsg) {
          validSecondMsg.classList.remove("hide");
        }
        validMsg.style.display = "block";
        if (validSecondMsg) {
          validSecondMsg.style.display = "block";
        }
      } else {
        validMsg.style.display = "none";
        if (validSecondMsg) {
          validSecondMsg.style.display = "none";
        }
        input[i].classList.add("error");
        var errorCode = iti.getValidationError();
        errorMsg.innerHTML = errorMap[errorCode];
        errorMsg.classList.remove("hide");
      }
    }
  });

  input[i].addEventListener("change", reset);
  input[i].addEventListener("keyup", reset);
}

$(function () {
  $(".navbar-collapse li a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  if ($(".gallery__items").length) {
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
  }

  if ($(".collection").length) {
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
  }

  $(".header__btn").on("click", function (params) {
    $(".overlay, .overlay__block").fadeIn(1000);
    // if ($("#valid-msg").length) {
    //   $("#valid-msg").style.display = "none";
    // }
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

  if ($(".gallery__inner").length) {
    var mixer = mixitup(".gallery__inner", {
      load: {
        filter: ".all",
      },
    });
  }
  // var mixer = mixitup(".gallery__inner", {
  //   load: {
  //     filter: ".all",
  //   },
  // });
});

if ($("#greeting").length) {
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
}

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

// var iti = window.intlTelInput(input, {
//   initialCountry: "auto",
//   geoIpLookup: function (success, failure) {
//     $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
//       var countryCode = resp && resp.country ? resp.country : "";
//       success(countryCode);
//     });
//   },
//   utilsScript: "src/utils.js",
// });

// var reset = function () {
//   input.classList.remove("error");
//   errorMsg.innerHTML = "";
//   errorMsg.classList.add("hide");
//   validMsg.classList.add("hide");
//   if (validSecondMsg) {
//     validSecondMsg.classList.add("hide");
//   }
// };

// input.addEventListener("blur", function () {
//   reset();
//   if (input.value.trim()) {
//     if (iti.isValidNumber()) {
//       validMsg.classList.remove("hide");
//       if (validSecondMsg) {
//         validSecondMsg.classList.remove("hide");
//       }
//       validMsg.style.display = "block";
//       if (validSecondMsg) {
//         validSecondMsg.style.display = "block";
//       }
//     } else {
//       validMsg.style.display = "none";
//       if (validSecondMsg) {
//         validSecondMsg.style.display = "none";
//       }
//       input.classList.add("error");
//       var errorCode = iti.getValidationError();
//       errorMsg.innerHTML = errorMap[errorCode];
//       errorMsg.classList.remove("hide");
//     }
//   }
// });

// input.addEventListener("change", reset);
// input.addEventListener("keyup", reset);
