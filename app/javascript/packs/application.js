// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')
require("../show")
require("../top")
require("../food")
require("../dolce")
require("../drink")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

$(function (){
  $(window).on('scroll', function (){
    if ($(this).scrollTop() > 1000) {
      $('.back_to_top').fadeIn(300);
    } else {
      $('.back_to_top').fadeOut(300);
    }
  });
});

$(function (){
  $('.back_to_top').on('click', function (){
    $(html, body).animate({scrollTop : 0}, 1200);
    return false;
  });
});

$(function (){
  $(window).on('scroll', function (){
      let target = $('footer').offset().top;
      let scroll = $(this).scrollTop();
      let windowHeight = $(this).height();
      if (scroll > target - windowHeight + 30) {
        $('.footer_empty').addClass('active');
      } else {
        $('.footer_empty').removeClass('active');
      }
    });
  });