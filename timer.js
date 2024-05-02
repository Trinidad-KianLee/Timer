let count = 0;
let intervalId;

const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const resumeButton = document.querySelector("#resume");
const stopButton = document.querySelector("#stop");
const countSpan = document.querySelector("#count");

function updateCount() {
  countSpan.textContent = count + " second(s)";
}

function startTimer() {
  intervalId = setInterval(function () {
    count++;
    updateCount();
  }, 1000);
  startButton.disabled = true;
  pauseButton.disabled = false;
}

function pauseTimer() {
  clearInterval(intervalId);
  pauseButton.disabled = true;
  resumeButton.disabled = false;
}

function resumeTimer() {
  intervalId = setInterval(function () {
    count++;
    updateCount();
  }, 1000);
  pauseButton.disabled = false;
  resumeButton.disabled = true;
}

function stopTimer() {
  clearInterval(intervalId);
  count = 0;
  updateCount();
  startButton.disabled = false;
  pauseButton.disabled = true;
  resumeButton.disabled = true;
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resumeButton.addEventListener("click", resumeTimer);
stopButton.addEventListener("click", stopTimer);

// Initial update
updateCount();
