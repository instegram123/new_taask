let time = 0;
let running = false;
let interval;
let display = document.getElementById("timer-display");

let start = document.getElementById("start-btn");
let stop = document.getElementById("stop-btn");
let reset = document.getElementById("reset-btn");

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);

// دالة بدء التوقيت
function startTimer() {
  if (running==false) {
    running = true;
    interval = setInterval(function() {
      time++;
      display.innerText = formatTime(time);
    }, 1000);
  }
}

// دالة إيقاف التوقيت
function stopTimer() {
  running = false;
  clearInterval(interval);
}

// دالة إعادة التعيين
function resetTimer() {
  running = false;
  clearInterval(interval);
  time = 0;
  display.innerText = "00:00:00";
}

// دالة تنسيق الوقت
function formatTime(t) {
  let h = Math.floor(t / 3600);
  let m = Math.floor((t % 3600) / 60);
  let s = t % 60;
  
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  return h + ":" + m + ":" + s;}
