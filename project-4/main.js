// document.addEventListener("DOMContentLoaded", function () {
const startStopButton = document.querySelector("#startStopbtn");
const resetBtn = document.querySelector("#resetBtn");
let seconds = 0;
let minutes = 0;
let hours = 0;
let leadingseconds = 0;
let leadingminutes = 0;
let leadinghours = 0;
let timerInterval = null;
let timerStatus = "stopped";

function stopwatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  let sec =
    seconds < 10
      ? (leadingseconds = "0" + seconds.toString())
      : (leadingseconds = seconds);
  let min =
    minutes < 10
      ? (leadingminutes = "0" + minutes.toString())
      : (leadingminutes = minutes);
  let hrs =
    hours < 10
      ? (leadinghours = "0" + hours.toString())
      : (leadinghours = hours);
  let displayTimer = (document.getElementById("timer").innerText =
    hrs + ":" + min + ":" + sec);
}

startStopButton.addEventListener("click", function () {
  console.log(timerStatus);
  if ((timerStatus = "stopped")) {
    timerInterval = window.setInterval(stopwatch, 1000);
    document.getElementById(
      "startStopbtn"
    ).innerHTML = `<i class ="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById(
      "startStopbtn"
    ).innerHTML = `<i class ="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
  }
});
resetBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerHTML = "00:00:00";
});
// });
