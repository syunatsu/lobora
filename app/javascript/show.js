function popup (){
const buttonOpen = document.querySelector(".edit_btn");
const buttonClose = document.querySelector(".show_form_close");
const modal = document.querySelector(".modal_page");
const modalBack = document.querySelector(".show_form_wrapper");

buttonOpen.addEventListener("click", () => {
  //モーダルを開く
  modal.style.display = "block";
});

buttonClose.addEventListener("click", () => {
  //モーダルを閉じる
  modal.style.display = "none";
});

document.addEventListener("click", (e) => {
  if (e.target == modalBack) {
    modal.style.display = "none";
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