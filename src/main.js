$(function () {
  $(".header__btn").on("click", function () {
    if ($("#valid-msg").length > 0) {
      $("#valid-msg").css("display", "none");
    }
  });
});

var input = document.querySelector("#phone"),
  errorMsg = document.querySelector("#error-msg"),
  validMsg = document.querySelector("#valid-msg");

var errorMap = [
  "Invalid number",
  "Invalid country code",
  "Too short",
  "Too long",
  "Invalid number",
];

var iti = window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: function (success, failure) {
    $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
      var countryCode = resp && resp.country ? resp.country : "";
      success(countryCode);
    });
  },
  utilsScript: "src/utils.js",
});

var reset = function () {
  input.classList.remove("error");
  errorMsg.innerHTML = "";
  errorMsg.classList.add("hide");
  validMsg.classList.add("hide");
};

input.addEventListener("blur", function () {
  reset();
  if (input.value.trim()) {
    if (iti.isValidNumber()) {
      validMsg.classList.remove("hide");
      validMsg.style.display = "block";
      input.style.border = "2px solid rgb(0, 196, 0)";
    } else {
      validMsg.style.display = "none";
      input.classList.add("error");
      input.style.border = "2px solid rgb(255, 0, 0)";
      var errorCode = iti.getValidationError();
      errorMsg.innerHTML = errorMap[errorCode];
      errorMsg.classList.remove("hide");
    }
  }
});

input.addEventListener("change", reset);
input.addEventListener("keyup", reset);

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

  if ($(".collection__inner").length) {
    $(".collection__inner").slick({
      arrows: true,
      dots: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:
        '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt="prev slider arrow"></button>',
      nextArrow:
        '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt="next slider arrow"></button>',

      responsive: [
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 641,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    });
  }

  $(".link-projects, .link-certificates, .link-body, .go-top").on(
    "click",
    function (event) {
      event.preventDefault();
      var id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 200);
    }
  );

  if ($(".gallery__inner").length) {
    var mixer = mixitup(".gallery__inner", {
      load: {
        filter: ".all",
      },
    });
  }
});

new WOW().init();

setTimeout(function () {
  if ($("#greeting").length > 0) {
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
      color1: "#fe3e57",
      color2: "#192bd2",
      colorMode: "lerp",
      birdSize: 0.8,
      wingSpan: 25.0,
      separation: 29.0,
      backgroundAlpha: 0.33,
    });
  }
}, 2500);

//  разделить код набора с помощью скобок
// var intlNumber = $("#phone").intlTelInput("getNumber"); // get full number eg +17024181234
// var countryData = $("#phone").intlTelInput("getSelectedCountryData"); // get country data as obj

//  var countryCode = countryData.dialCode; // using updated doc, code has been replaced with dialCode
// countryCode = "+" + countryCode; // convert 1 to +1

// var newNo = intlNumber.replace(countryCode, "(" + coountryCode+ ")" ); // final version

// popup
let overlay = document.querySelector(".overlay");
let popup = document.querySelector(".overlay__popup");
let openPopupButtons = document.querySelectorAll(".popup__open");
let closePopupButton = document.querySelector(".overlay__close");

if (overlay) {
  if (openPopupButtons.length > 0) {
    openPopupButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        overlay.classList.add("active");
        popup.classList.add("active");
        document.querySelector("html").classList.add("no-scroll");
      });
    });
  }

  closePopupButton.addEventListener("click", () => {
    overlay.classList.remove("active");
    popup.classList.remove("active");
    document.querySelector("html").classList.remove("no-scroll");
  });

  // по полю вокруг
  document.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
      popup.classList.remove("active");
      document.querySelector("html").classList.remove("no-scroll");
    }
  });
}
// document.body.addEventListener("click", (e) => {
//   if (e.code === "Escape") {
//     overlay.classList.remove("active");
//     popup.classList.remove("active");
//     document.querySelector("html").classList.remove("no-scroll");
//   }
// });

$(function () {
  $(".callback__button").on("click", function (event) {
    event.preventDefault();
    $(".overlay, .overlay__block").fadeOut(100);
    $(".overlay, .overlay__thanks").fadeIn(1000);
    setTimeout(() => {
      $(".overlay, .overlay__thanks").fadeOut(1000);
    }, 4000);
    $("html").removeClass("no-scroll");
  });
});

// Form
const form = document.forms.contact;
if (form) {
  const formArr = Array.from(form);

  let validFormArr = [];
  let button = form.elements["button"];

  formArr.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
      el.setAttribute("is-valid", "0");
      validFormArr.push(el);
    }
  });

  form.addEventListener("input", inputHandler);
  button.addEventListener("click", buttonHandler);

  function inputHandler({ target }) {
    if (target.hasAttribute("data-reg")) {
      inputCheck(target);
    }
  }

  function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
      el.setAttribute("is-valid", "1");
      el.style.border = "2px solid rgb(0, 196, 0)";
    } else {
      el.setAttribute("is-valid", "0");
      el.style.border = "2px solid rgb(255, 0, 0)";
    }
  }

  function buttonHandler(e) {
    const allValid = [];
    validFormArr.forEach((el) => {
      allValid.push(el.getAttribute("is-valid"));
    });
    const isAllValid = allValid.reduce((acc, current) => {
      return acc & current;
    });

    if (!Boolean(Number(isAllValid))) {
      e.preventDefault();
      alert("Please check all the required form fields");
    }
  }
}

// popup2
// let projectsOverlay = document.querySelector(".projects-overlay");
// let projectsPopup = document.querySelector(".projects-overlay__popup");
// let openPopupBtns = document.querySelectorAll(".projects-popup__open");
// let closePopupBtn = document.querySelector(".projects-overlay__close");

// if (projectsOverlay) {
//   if (openPopupBtns.length > 0) {
//     openPopupBtns.forEach((button) => {
//       button.addEventListener("click", (e) => {
//         e.preventDefault();
//         projectsOverlay.classList.add("active");
//         projectsPopup.classList.add("active");
//         document.querySelector("html").classList.add("no-scroll");
//       });
//     });
//   }

//   closePopupBtn.addEventListener("click", () => {
//     projectsOverlay.classList.remove("active");
//     projectsPopup.classList.remove("active");
//     document.querySelector("html").classList.remove("no-scroll");
//   });

//   // по полю вокруг
//   document.addEventListener("click", (e) => {
//     if (e.target === overlay) {
//       projectsOverlay.classList.remove("active");
//       projectsPopup.classList.remove("active");
//       document.querySelector("html").classList.remove("no-scroll");
//     }
//   });
// }
// на jquery
// $(".header__btn").on("click", function (e) {
//   e.preventDefault;
//   $(".overlay, .overlay__block").fadeIn(800);
//   $("html").addClass("no-scroll");
// });

// $(".overlay__close").on("click", function (params) {
//   $(".overlay, .overlay__block, .overlay__thanks").fadeOut(800);
//   $("html").removeClass("no-scroll");
// });

// $(".projects__link--weather").on("click", function (params) {
//   $(".projects-overlay, .projects-overlay__block").fadeIn(1000);
// });

// $(".projects-overlay__close").on("click", function (params) {
//   $(".projects-overlay, .projects-overlay__block").fadeOut(1000);
// });
