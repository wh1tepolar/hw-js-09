function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

let intervalId = null;

btnStop.disabled = true;

btnStart.addEventListener('click', () => {
    const changeCol = () => document.body.style.backgroundColor = getRandomHexColor();
  intervalId = setInterval(changeCol, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
});


btnStop.addEventListener('click', () => {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(intervalId);
});
