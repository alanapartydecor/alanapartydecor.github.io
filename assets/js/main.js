/*
  Formula by Pixelarity
  pixelarity.com | hello@pixelarity.com
  License: pixelarity.com/license
*/


(function ($) {

  var $window = $(window),
    $body = $('body');

  // Breakpoints.
  breakpoints({
    xlarge: ['1281px', '1680px'],
    large: ['981px', '1280px'],
    medium: ['737px', '980px'],
    small: ['481px', '736px'],
    xsmall: ['361px', '480px'],
    xxsmall: [null, '360px']
  });

  // Play initial animations on page load.
  $window.on('load', function () {
    window.setTimeout(function () {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Menu.
  $('#menu')
    .append('<a href="#menu" class="close"></a>')
    .appendTo($body)
    .panel({
      visibleClass: 'is-menu-visible',
      target: $body,
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: 'right'
    });

  // Banner.
  var $banner = $('#banner'),
    $header = $('#header');

  if ($banner.length > 0) {

    // IE: Height fix.
    if (browser.name == 'ie') {

      breakpoints.on('>small', function () {
        $banner.css('height', '100vh');
      });

      breakpoints.on('<=small', function () {
        $banner.css('height', '');
      });

    }

    // More button.
    $banner.find('.more')
      .addClass('scrolly');

    // Header.
    $header
      .addClass('with-banner')
      .addClass('alt');

    $banner.scrollex({
      mode: 'top',
      top: '-100vh',
      bottom: 10,
      enter: function () { $header.addClass('alt'); },
      leave: function () { $header.removeClass('alt'); }
    });

  }

  // Spotlights.
  var $spotlight = $('.spotlight');

  if ($spotlight.length > 0
    && browser.canUse('transition'))
    $spotlight.each(function () {

      var $this = $(this);

      $this.scrollex({
        mode: 'middle',
        top: '-10vh',
        bottom: '-10vh',
        initialize: function () { $this.addClass('inactive'); },
        enter: function () { $this.removeClass('inactive'); }
      });

    });

  // Features.
  var $features = $('.features');

  if ($features.length > 0
    && browser.canUse('transition'))
    $features.each(function () {

      var $this = $(this);

      $this.scrollex({
        mode: 'middle',
        top: '-20vh',
        bottom: '-20vh',
        initialize: function () { $this.addClass('inactive'); },
        enter: function () { $this.removeClass('inactive'); }
      });

    });

  // Scrolly.
  $('.scrolly').scrolly();

  // Initial scroll.
  $window.on('load', function () {
    $window.trigger('scroll');
  });

})(jQuery);

// Modal Pop Up
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("modalImg");
for (var i = 0; i < img.length; i++) {
  var modalImg = document.getElementById("img01");
  var captionLeftArrow = document.getElementsByClassName("carousel-button-prev");
  var captionRightArrow = document.getElementsByClassName("carousel-button-next");
  img[i].addEventListener('click', function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  })
}

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}


// let sliderImages = document.querySelectorAll(".slide"),
//   arrowLeft = document.querySelector("#left-arrow"),
//   arrowRight = document.querySelector("#right-arrow"),
//   current = 0;

// // Clear all images
// function reset() {
//   for (let i = 0; i < sliderImages.length; i++) {
//     sliderImages[i].style.display = "none";
//   }
// }

// // Initial slide
// function startSlide() {
//   reset();
//   sliderImages[0].style.display = "block";
// }

// // Show previous
// function slideLeft() {
//   reset();
//   sliderImages[current - 1].style.display = "block";
//   current--;
// }

// // Show next
// function slideRight() {
//   reset();
//   sliderImages[current + 1].style.display = "block";
//   current++;
// }

// // Left arrow click
// arrowLeft.addEventListener("click", function () {
//   if (current === 0) {
//     current = sliderImages.length;
//   }
//   slideLeft();
// });

// // Right arrow click
// arrowRight.addEventListener("click", function () {
//   if (current === sliderImages.length - 1) {
//     current = -1;
//   }
//   slideRight();
// });

// startSlide();


// var indexValue = 1;
// showImg(indexValue);
// function arrow(e) {
//   showImg(indexValue += e);
// }
// function showImg(e) {
//   var i;
//   const img = document.getElementsByClassName('arrow')
//   if (e > img.length) {
//     indexValue = 1
//   }
//   if (e < 1) {
//     indexValue = img.length
//   }
//   for (i = 0; i < img.length; i++) {
//     img[i].style.display = "none";
//   }
//   img[indexValue - 1].style.display = "block";
//   console.log(img[indexValue - 1])
// }

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    // const slides = button.closest("[data-carousel]")
    const slides = button.closest(".carousel").querySelectorAll('a')
    console.log(slides)

    // const activeSlide = slides.querySelector("[data-active]")
    // const activeSlide = slides.find(element => element.dataset.active === true);
    const activeSlide = [...slides].find(element => element.dataset.active === '' || element.dataset.active === 'true');
    let newIndex = [...slides].indexOf(activeSlide) + offset
    console.log(activeSlide)
    // let newIndex = [...slides.children].indexOf(activeSlide) + offset

    if (newIndex < 0) newIndex = slides.length - 1
    if (newIndex >= slides.length) newIndex = 0

    slides[newIndex].dataset.active = true
    var modalImg = document.getElementById("img01");
    modalImg.src = slides[newIndex].children[0].src
    console.log(slides[newIndex])
    delete activeSlide.dataset.active
  })
})

// var indexValue = 1;
// function showImg(e) {
//   const images = document.getElementsByClassName('');
//   if (e > images.length) {
//     indexValue = 1
//   }
//   if (e < 1) {
//     indexValue = images.length
//   }
//   for (let i = 0; i < images.length; i++) {
//     images[i].style.display = 'none';
//   }
//   images[indexValue - 1].style.display = 'block';
//   console.log('.toggle')
// }

// showImg(1)




// // Toggle Image Modal
// let galleryIndex = 1;
// showSlides(galleryIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(galleryIndex += n);
// }

// function changeImage() {
//   var image = document.getElementById('modalImg');
//   img.src = "./images-testing/balloon1.jpeg"
// }




// GET https://graph.instagram.com/{media-id}
//   ? fields = { fields }
//   & access_token={ access - token }

// // Instagram API
// https://api.instagram.com/oauth/authorize?client_id=6074440476002258&redirect_uri=https://alanapartydecor.github.io/&scope=user_profile,user_media&response_type=code

// var request = new XMLHttpRequest();
// request.open('GET', 'https://graph.instagram.com/{media-id}?&access_token=IGQVJVdDFobVNvVEwzcVhlS3ZACZAmVyLWdXNlZASQVM0WG5WMG9xeXJCcWVHV1hxMlBHMFRHMzMyWTlDVmZAWdU5WYml3RE1yNF8zb2NMeGdvZAERTQWRfUTkxWkZALR2x5RkJlUlFScGd2MkR4WUJmcXZAPdwZDZD', true);

// request.onload = function (container) {
//   if (request.status >= 200 && request.status < 400) {
//     // Success!
//     var data = JSON.parse(request.responseText);
//     for (var i = 0; i < data.data.length; i++) {
//       var container = document.getElementById('insta-feed');
//       var imgURL = data.data[i].images.standard_resolution.url;
//       console.log(imgURL);
//       var div = document.createElement('div');
//       div.setAttribute('class', 'instapic');
//       container.appendChild(div);
//       var img = document.createElement('img');
//       img.setAttribute('src', imgURL)
//       div.appendChild(img);
//     }

//     console.log(data);
//   } else {
//   }
// };
// request.onerror = function () {
//   // There was a connection error of some sort
// };
// request.send();