document.addEventListener("DOMContentLoaded", function () {
  let open_btn = document.getElementById("open-btn");
  let modal_container = document.getElementById("modal-container");
  let close_btn = document.getElementById("close-btn");
  open_btn.addEventListener("click", function () {
    modal_container.style.display = "block";
  });
  close_btn.addEventListener("click", function () {
    modal_container.style.display = "none";
  });
  window.addEventListener("click", function (e) {
    if (e.target === modal_container) {
      modal_container.style.display = "none";
    }
  });
});
