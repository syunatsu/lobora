function popup (){
  const modalOpen = document.querySelector(".header_newmenu");
  const modalClose = document.querySelector(".show_form_close");
  const modal = document.querySelector(".container06");

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

/*container01*/
$(function (){
  $('.background01').addClass('active');
})

/*container02*/
$(function (){
  $(window).on('scroll', function (){
    $('.background02').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 100) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });
});

$(function (){
  $(window).on('scroll', function (){
    setTimeout(function (){
      $('.concept_img').each(function (){
        let target = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        if (scroll > target - windowHeight + 50) {
          $(this).addClass('active');
          $('.concept_messages').addClass('active');
        } else {
          $(this).removeClass('active');
          $('.concept_messages').removeClass('active');
        }
      });
    }, 1000)
  });
});

/*container03*/
$(function (){
  $(window).on('scroll', function (){
    $('.container03_border').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 130) {
        $(this).addClass('active');
        $('.menu').addClass('active');
        $('.comment').addClass('active');
        $('.box1').addClass('active');
        $('.box2').addClass('active');
        $('.box3').addClass('active');
      } else {
        $(this).removeClass('active');
        $('.menu').removeClass('active');
        $('.comment').removeClass('active');
        $('.box1').removeClass('active');
        $('.box2').removeClass('active');
        $('.box3').removeClass('active');
      }
    });
  });
});

/*container04*/
$(function (){
  $(window).on('scroll', function (){
    $('.container04').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 100) {
        $('.theater_img').addClass('active');
      } else {
        $('.theater_img').removeClass('active');
      }
    });
  });
});

$(function (){
  $(window).on('scroll', function (){
    $('.theater_left').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 150) {
        $('.theater_left').addClass('active');
      } else {
        $('.theater_left').removeClass('active');
      }
    });
  });
});

/*container05*/
$(function (){
  $(window).on('scroll', function (){
    $('.container05_border').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 50) {
        $('.container05_border').addClass('active1');
      } else {
        $('.container05_border').removeClass('active1');
      }
    });
  });
});

