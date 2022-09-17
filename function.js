const hourHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotation", rotationPercentage * 360);
};

const setClock = () => {
  const date = new Date();
  const hourPercentage = date.getHours() / 12;
  const minutesPercentage = date.getMinutes() / 60;
  const secondsPercentage = date.getSeconds() / 60;

  setRotation(hourHand, hourPercentage);
  setRotation(minutesHand, minutesPercentage);
  setRotation(secondsHand, secondsPercentage);
};

setInterval(setClock, 1000);
