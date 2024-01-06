import Notiflix from "notiflix";

const formEl = document.querySelector(".form");
const btnCreatePromises = document.querySelector("button[type=submit]");

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const onSubmitClick = (e) => {
  e.preventDefault();

  let delay = +formEl.delay.value;
  let delayTest = formEl.delay.value;
  let step = +formEl.step.value;
  let amount = +formEl.amount.value;

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
        );
      });
    delay += step;
  }
};

formEl.addEventListener("submit", onSubmitClick);
