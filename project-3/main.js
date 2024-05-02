document.addEventListener("DOMContentLoaded", function () {
  const accordian = document.getElementsByClassName("content-container");
  console.log(accordian);
  //   accordian.forEach((accord) => {
  //     accord.addEventListener("click", function () {
  //       this.classList.toggle("active");
  //     });
  for (var i = 0; i < accordian.length; i++) {
    console.log(accordian[i]);
    accordian[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }
});
