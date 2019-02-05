const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const data = new Date();
  const minutes = data.getMinutes();
  const hours = data.getHours();
  const seconds = data.getSeconds();
  //clockTitle.innerText = `${hours}:${minutes}:${seconds}`;

  clockTitle.innerText =
    seconds < 10
      ? hours < 10
        ? minutes < 10
          ? `0${hours}:0${minutes}:0${seconds}`
          : `0${hours}:${minutes}:0${seconds}`
        : `${hours}:${minutes}:0${seconds}`
      : `${hours}:${minutes}:${seconds}`;
}

function init() {
  //getTime();
  setInterval(getTime, 1000);
}

init();
