function popup (){
  const modalOpen = document.querySelector(".new_recipe");
  const modalClose = document.querySelector(".show_form_close");
  const modal = document.querySelector(".modal_page");
  const modalBack = document.querySelector(".show_form_wrapper");
  const backGround = document.querySelector("html");

  modalOpen.addEventListener("click", () => {
    modal.style.display = "block";
    backGround.classList.add("modal_set");
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    backGround.classList.remove("modal_set");
  });

  document.addEventListener("click", (e) => {
    if (e.target == modalBack) {
      modal.style.display = "none";
      backGround.classList.remove("modal_set");
    }
  });
}

window.addEventListener('turbolinks:load', popup)

/*container02*/
$(function (){
  $(window).on('scroll', function (){
    $('.container02').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 100) {
        $('.background02').addClass('active');
      } else {
        $('.background02').removeClass('active');
      }
    });
  });
});

$(function (){
  $(window).on('scroll', function (){
    setTimeout(function (){
      $('.container02').each(function (){
        let target = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        if (scroll > target - windowHeight + 130) {
          $('.concept_img').addClass('active');
          $('.concept_messages').addClass('active');
        } else {
          $('.concept_img').removeClass('active');
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
    $('.coffee_left').each(function (){
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 150) {
        $('.coffee_left').addClass('active');
      } else {
        $('.coffee_left').removeClass('active');
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

