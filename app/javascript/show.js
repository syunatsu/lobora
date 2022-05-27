function popup (){
const buttonOpen = document.querySelector(".edit_btn");
const buttonClose = document.querySelector(".show_form_close2");
const modal = document.querySelector(".modal_page2");
const modalBack = document.querySelector(".show_form_wrapper2");
const backGround = document.querySelector("html");

buttonOpen.addEventListener("click", () => {
  //モーダルを開く
  modal.style.display = "block";
  backGround.classList.add("modal_set");
});

buttonClose.addEventListener("click", () => {
  //モーダルを閉じる
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

window.addEventListener('turbolinks:load', popup);

/*show01*/
$(function() {
    $('.show_menu_name').addClass('active');
    $('.show_img_wrapper').addClass('active');
    $('.show_menu_recipe').addClass('active');
    $('.show_menu_how_to').addClass('active');
    $('.show_back_btn').addClass('active');
    $('.edit_btn').addClass('active');
    $('.delete_btn').addClass('active');
});