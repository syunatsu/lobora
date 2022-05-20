function popup (){
const buttonOpen = document.querySelector(".edit_btn");
const buttonClose = document.querySelector(".show_form_close");
const modal = document.querySelector(".show03");

buttonOpen.addEventListener("click", () => {
  //モーダルを開く
  modal.style.display = "block";
});

buttonClose.addEventListener("click", () => {
  //モーダルを閉じる
  modal.style.display = "none";
});

document.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
}

window.addEventListener('turbolinks:load', popup);