import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const datetimePicker = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
const daysText = document.querySelector("[data-days]");
const hoursText = document.querySelector("[data-hours]");
const minutesText = document.querySelector("[data-minutes]");
const secondsText = document.querySelector("[data-seconds]");

startBtn.classList.add("startBtn");
startBtn.disabled = true;

let date = new Date();
let timerID;
let timeInMs;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: function (selectedDates) {
    if (selectedDates[0] < new Date()) {
      startBtn.disabled = true;
      Notiflix.Notify.failure("Please choose a date in the future");
    } else {
      startBtn.disabled = false;
      Notiflix.Notify.success("Press start to  start the countdown");
      timeInMs = selectedDates[0] - date;
    }
  },
};

flatpickr(datetimePicker, options);

const addLeadingZero = (value) => {
  return String(value).padStart(2, "0");
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second),
  );

  return { days, hours, minutes, seconds };
}

const startTimer = () => {
  startBtn.disabled = true;

  timerID = setInterval(() => {
    if (timeInMs > 0) {
      const fullDate = convertMs(timeInMs);
      const { days, hours, minutes, seconds } = fullDate;

      daysText.textContent = `${days}`;
      hoursText.textContent = `${hours}`;
      minutesText.textContent = `${minutes}`;
      secondsText.textContent = `${seconds}`;
      timeInMs -= 1000;
    } else {
      clearInterval(timerID);
      daysText.textContent = "00";
      hoursText.textContent = "00";
      minutesText.textContent = "00";
      secondsText.textContent = "00";
      startBtn.disabled = false;
    }
  }, 1000);
};

startBtn.addEventListener("click", startTimer);



