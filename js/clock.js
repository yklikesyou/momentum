const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h3"); // h3 또는 .clock__text 이라고도 가능
// 이 두문장 = const clock = document.querySelector(".js-clock .clock__text"); 이렇게 한꺼번에 해도됨

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
// setInterval(함수, 몇초마다)
