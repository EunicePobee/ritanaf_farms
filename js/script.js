// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });


// Wait for the DOM to load before initializing Swiper
// document.addEventListener("DOMContentLoaded", function () {
//   var swiper = new Swiper(".mySwiper", {
//       loop: true, // Enables infinite scrolling
//       autoplay: {
//           delay: 5000, // 5 seconds delay before next slide
//           disableOnInteraction: false, // Keeps autoplay working after user interaction
//       },
//       navigation: {
//           nextEl: ".swiper-button-next", // Next button
//           prevEl: ".swiper-button-prev", // Previous button
//       },
//       pagination: {
//           el: ".swiper-pagination", // Dots navigation
//           clickable: true, // Makes pagination dots clickable
//       },
//       scrollbar: {
//           el: ".swiper-scrollbar", // Scrollbar element
//           draggable: true, // Enables dragging on the scrollbar
//       },
//   });
// });


var swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
        delay: 5000, // Change slide every 5 seconds
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    }
});


// For slider1
let slider = tns({
  container : ".my-slider",
  "slideBy" : "1",
  "speed" : 400,
  "nav" : false,
  autoplay : true,
  controls: false,
  autoplayButtonOutput : false,
  responsive: {
      1600: {
          items : 3,
          gutter : 10
      },
      1024: {
          items : 3,
          gutter : 10
      },
      768: {
          items : 2,
          gutter : 10
      },
      480: {
          items : 1,
          gutter : 10
      }
  }
})