//モーダルフォーム
function popup (){
  const modalOpen = document.querySelector(".header_newmenu");
  const modalClose = document.querySelector(".show_form_close");
  const modal = document.querySelector(".food05");

  modalOpen.addEventListener("click", () => {
    modal.style.display = "block";
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  document.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
}
window.addEventListener('turbolinks:load', popup)

//ここからfood01
$(function (){
  $('.food_img_wrapper01').addClass('active');
  $('.food_overlay01').addClass('active');
  $('.food_h2_01').addClass('active');
  $('.food01_sentence').addClass('active');
});

//ここからfood02
$(function (){
  $(window).on('scroll', function (){
    $('.food02').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 150) {
        $('.food02_span1').addClass('active');
        $('.food02_span2').addClass('active');
        $('.food02_span3').addClass('active');
        $('.food02_span4').addClass('active');
        $('.food02_span5').addClass('active');
        $('.food02_span6').addClass('active');
        $('.food02_span7').addClass('active');
        $('.food02_span8').addClass('active');
        $('.food02_span9').addClass('active');
        $('.food02_span10').addClass('active');
        $('.food02_span11').addClass('active');
      } else {
        $('.food02_span1').removeClass('active');
        $('.food02_span2').removeClass('active');
        $('.food02_span3').removeClass('active');
        $('.food02_span4').removeClass('active');
        $('.food02_span5').removeClass('active');
        $('.food02_span6').removeClass('active');
        $('.food02_span7').removeClass('active');
        $('.food02_span8').removeClass('active');
        $('.food02_span9').removeClass('active');
        $('.food02_span10').removeClass('active');
        $('.food02_span11').removeClass('active');
      }
    });
  });
});

$(function (){
  $(window).on('scroll', function (){
    $('.food02').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 300) {
        $('.food_img_wrapper02').addClass('active');
        $('.food_special_explain01').addClass('active');
      } else {
        $('.food_img_wrapper02').removeClass('active');
        $('.food_special_explain01').removeClass('active');
      }
    });
  });
});

$(function (){
  $(window).on('scroll', function (){
    $('.food02').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 1100) {
        $('.food_img_wrapper03').addClass('active');
        $('.food_special_explain02').addClass('active');
      } else {
        $('.food_img_wrapper03').removeClass('active');
        $('.food_special_explain02').removeClass('active');
      }
    });
  });
});

//ここからfood03
$(function (){
  $(window).on('scroll', function (){
    $('.food03').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 150) {
        $('.food03_span1').addClass('active');
        $('.food03_span2').addClass('active');
        $('.food03_span3').addClass('active');
        $('.food03_span4').addClass('active');
        $('.food03_span5').addClass('active');
        $('.food03_span6').addClass('active');
        $('.food03_span7').addClass('active');
        $('.food03_span8').addClass('active');
        $('.food03_span9').addClass('active');
        $('.food03_span10').addClass('active');
        $('.food03_span11').addClass('active');
      } else {
        $('.food03_span1').removeClass('active');
        $('.food03_span2').removeClass('active');
        $('.food03_span3').removeClass('active');
        $('.food03_span4').removeClass('active');
        $('.food03_span5').removeClass('active');
        $('.food03_span6').removeClass('active');
        $('.food03_span7').removeClass('active');
        $('.food03_span8').removeClass('active');
        $('.food03_span9').removeClass('active');
        $('.food03_span10').removeClass('active');
        $('.food03_span11').removeClass('active');
      }
    });
  });
});

$(function (){
  $(window).on('scroll', function (){
    $('.food03').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 250) {
        $('.food_recommended01').addClass('active');
      } else {
        $('.food_recommended01').removeClass('active');
      }
    });
  });
});

$(function (){
  $(window).on('scroll', function (){
    $('.food03').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 700) {
        $('.food_recommended02').addClass('active');
      } else {
        $('.food_recommended02').removeClass('active');
      }
    });
  });
});

// ここからfood04
$(function (){
  $(window).on('scroll', function (){
    $('.food04').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 150) {
        $('.food04_span1').addClass('active');
        $('.food04_span2').addClass('active');
        $('.food04_span3').addClass('active');
        $('.food04_span4').addClass('active');
        $('.food04_span5').addClass('active');
        $('.food04_span6').addClass('active');
        $('.food04_span7').addClass('active');
        $('.food04_span8').addClass('active');
      } else {
        $('.food04_span1').removeClass('active');
        $('.food04_span2').removeClass('active');
        $('.food04_span3').removeClass('active');
        $('.food04_span4').removeClass('active');
        $('.food04_span5').removeClass('active');
        $('.food04_span6').removeClass('active');
        $('.food04_span7').removeClass('active');
        $('.food04_span8').removeClass('active');
      }
    });
  });
});

$(function (){
  $(window).on('scroll', function (){
    $('.food04').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 300) {
        $('.food_menu_img').addClass('active');
      } else {
        $('.food_menu_img').removeClass('active');
      }
    });
  });
});