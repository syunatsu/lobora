//モーダルフォーム
function popup (){
  const modalOpen = document.querySelector(".header_newmenu");
  const modalClose = document.querySelector(".show_form_close");
  const modal = document.querySelector(".dolce03");

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

//ここからdolce01
$(function (){
  $('.dolce_img_wrapper01').addClass('active');
  $('.dolce_overlay01').addClass('active');
  $('.dolce_h2_01').addClass('active');
  $('.dolce01_sentence').addClass('active');
});

//ここからdolce02
$(function (){
  $(window).on('scroll', function (){
    $('.dolce02').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 150) {
        $('.dolce02_span1').addClass('active');
        $('.dolce02_span2').addClass('active');
        $('.dolce02_span3').addClass('active');
        $('.dolce02_span4').addClass('active');
        $('.dolce02_span5').addClass('active');
        $('.dolce02_span6').addClass('active');
        $('.dolce02_span7').addClass('active');
        $('.dolce02_span8').addClass('active');
        $('.dolce02_span9').addClass('active');
        $('.dolce02_span10').addClass('active');
        $('.dolce02_span11').addClass('active');
      } else {
        $('.dolce02_span1').removeClass('active');
        $('.dolce02_span2').removeClass('active');
        $('.dolce02_span3').removeClass('active');
        $('.dolce02_span4').removeClass('active');
        $('.dolce02_span5').removeClass('active');
        $('.dolce02_span6').removeClass('active');
        $('.dolce02_span7').removeClass('active');
        $('.dolce02_span8').removeClass('active');
        $('.dolce02_span9').removeClass('active');
        $('.dolce02_span10').removeClass('active');
        $('.dolce02_span11').removeClass('active');
      }
    });
  });
});

$(function (){
  $(window).on('scroll', function (){
    $('.dolce02').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 300) {
        $('.dolce_menu_img').addClass('active');
      } else {
        $('.dolce_menu_img').removeClass('active');
      }
    });
  });
});