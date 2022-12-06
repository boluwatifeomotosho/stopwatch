const btnStart = document.getElementById('start');
const btnReset = document.getElementById('reset');
const btnStop = document.getElementById('stop');
let hrID = document.getElementById('hr');
let minID = document.getElementById('min');
let secID = document.getElementById('sec');
let milSecID = document.getElementById('count');
// let hour, min, sec, milliSec, hrStr, minStr, secStr, milSecStr;
let hour = 00;
let min = 00;
let sec = 00;
let milliSec = 00;

btnStart.addEventListener('click', function () {
  timer = true;
  start();
});

btnStop.addEventListener('click', function () {
  timer = false;
});

btnReset.addEventListener('click', function () {
  timer = false;
  hour = 0;
  min = 0;
  sec = 0;
  milliSec = 0;
  hrID.innerHTML = '00';
  minID.innerHTML = '00';
  secID.innerHTML = '00';
  milSecID.innerHTML = '00';
});

const start = function () {
  if (timer) {
    milliSec++;
    if (milliSec === 100) {
      sec++;
      milliSec = 0;
    }
    if (sec === 60) {
      min++;
      sec = 0;
    }
    if (min === 60) {
      hour++;
      min = 0;
      sec = 0;
    }

    let hrStr = hour;
    let minStr = min;
    let secStr = sec;
    let milSecStr = milliSec;

    if (hour < 10) hrStr = '0'.concat(hrStr);
    if (min < 10) minStr = '0'.concat(minStr);
    if (sec < 10) secStr = '0'.concat(secStr);
    if (milliSec < 10) milSecStr = '0'.concat(milSecStr);
    hrID.innerHTML = hrStr;
    minID.innerHTML = minStr;
    secID.innerHTML = secStr;
    milSecID.innerHTML = milSecStr;

    setTimeout(start, 5);
  }
};
