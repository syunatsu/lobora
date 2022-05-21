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