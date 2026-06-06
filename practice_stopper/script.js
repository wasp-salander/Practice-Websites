
const counter = document.getElementById("counter");
const start = document.getElementById("btnStart");
const reset = document.getElementById("btnReset");
const stop = document.getElementById("btnStop");

let sec = 0;
let min = 0;
let hour = 0;
let time = 0;

function run() {
   sec++;

   if (sec === 60) {
      sec = 0;
      min++;
   }
   if (min === 60) {
      min = 0;
      hour++;
   }

   let fsec = sec < 10 ? "0" + sec : sec;
   let fmin = min < 10 ? "0" + min : min;
   let fhour = hour < 10 ? "0" + hour : hour;

   counter.textContent = `${fhour}:${fmin}:${fsec}`;
}

start.addEventListener("click", () => {
   if (time === null) {
      time = setInterval(run, 1000)
   }

   counter.classList.remove("blinkStop");
   counter.classList.remove("blinkReset");
});

stop.addEventListener("click", () => {
   clearInterval(time);
   time = null;

   counter.classList.add("blinkStop");
});

reset.addEventListener("click", () => {
   clearInterval(time);
   time = null;
   sec = 0;
   min = 0;
   hour = 0;
   counter.textContent = "00:00:00";

   counter.classList.add("blinkReset");
});