function popup (){
  const modalOpen = document.querySelector(".new_recipe");
  const modalClose = document.querySelector(".show_form_close");
  const modal = document.querySelector(".drink04");

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

//ここからdrink01
$(function (){
  $('.drink_img_wrapper01').addClass('active');
  $('.drink_overlay01').addClass('active');
  $('.drink_h2_01').addClass('active');
  $('.drink01_sentence').addClass('active');
});

//ここからdrink02
$(function (){
  $(window).on('scroll', function (){
    $('.drink02').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 150) {
        $('.drink02_span1').addClass('active');
        $('.drink02_span2').addClass('active');
        $('.drink02_span3').addClass('active');
        $('.drink02_span4').addClass('active');
        $('.drink02_span5').addClass('active');
        $('.drink02_span6').addClass('active');
        $('.drink02_span7').addClass('active');
        $('.drink02_span8').addClass('active');
        $('.drink02_span9').addClass('active');
        $('.drink02_span10').addClass('active');
        $('.drink02_span11').addClass('active');
      } else {
        $('.drink02_span1').removeClass('active');
        $('.drink02_span2').removeClass('active');
        $('.drink02_span3').removeClass('active');
        $('.drink02_span4').removeClass('active');
        $('.drink02_span5').removeClass('active');
        $('.drink02_span6').removeClass('active');
        $('.drink02_span7').removeClass('active');
        $('.drink02_span8').removeClass('active');
        $('.drink02_span9').removeClass('active');
        $('.drink02_span10').removeClass('active');
        $('.drink02_span11').removeClass('active');
      }
    });
  });
});

$(function (){
  $(window).on('scroll', function (){
    $('.drink02').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 250) {
        $('.drink_recommended01').addClass('active');
      } else {
        $('.drink_recommended01').removeClass('active');
      }
    });
  });
});

$(function (){
  $(window).on('scroll', function (){
    $('.drink02').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 700) {
        $('.drink_recommended02').addClass('active');
      } else {
        $('.drink_recommended02').removeClass('active');
      }
    });
  });
});

//ここからdrink03
$(function (){
  $(window).on('scroll', function (){
    $('.drink03').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 150) {
        $('.drink03_span1').addClass('active');
        $('.drink03_span2').addClass('active');
        $('.drink03_span3').addClass('active');
        $('.drink03_span4').addClass('active');
        $('.drink03_span5').addClass('active');
        $('.drink03_span6').addClass('active');
        $('.drink03_span7').addClass('active');
        $('.drink03_span8').addClass('active');
        $('.drink03_span9').addClass('active');
      } else {
        $('.drink03_span1').removeClass('active');
        $('.drink03_span2').removeClass('active');
        $('.drink03_span3').removeClass('active');
        $('.drink03_span4').removeClass('active');
        $('.drink03_span5').removeClass('active');
        $('.drink03_span6').removeClass('active');
        $('.drink03_span7').removeClass('active');
        $('.drink03_span8').removeClass('active');
        $('.drink03_span9').removeClass('active');
      }
    });
  });
});

$(function (){
  $(window).on('scroll', function (){
    $('.drink03').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 300) {
        $('.drink_menu_img').addClass('active');
      } else {
        $('.drink_menu_img').removeClass('active');
      }
    });
  });
});