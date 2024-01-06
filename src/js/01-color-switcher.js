const startBtn = document.querySelector('button[data-start=""');
const stopBtn = document.querySelector('button[data-stop=""');
const body = document.querySelector("body");
let timerID = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onClickColor = () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerID = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const onClickColorStop = () => {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(timerID);
  console.log(timerID);
};

startBtn.addEventListener("click", onClickColor);
stopBtn.addEventListener("click", onClickColorStop);
