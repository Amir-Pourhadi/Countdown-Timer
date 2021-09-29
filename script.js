function getTimeRemaining(endTime) {
  const total = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

function initializeClock(endTime) {
  const clock = document.querySelector("#clock");
  const daysSpan = clock.querySelector("#days");
  const hoursSpan = clock.querySelector("#hours");
  const minutesSpan = clock.querySelector("#minutes");
  const secondsSpan = clock.querySelector("#seconds");

  function updateClock() {
    const { total, days, hours, minutes, seconds } = getTimeRemaining(endTime);

    daysSpan.innerText = days;
    hoursSpan.innerText = ("0" + hours).slice(-2);
    minutesSpan.innerText = ("0" + minutes).slice(-2);
    secondsSpan.innerText = ("0" + seconds).slice(-2);

    total <= 0 && clearInterval(timeInterval);
  }

  updateClock();
  const timeInterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 7 * 24 * 60 * 60 * 1000);
initializeClock(deadline);
