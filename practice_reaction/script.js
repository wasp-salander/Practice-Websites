
const zone = document.body;
const dots = document.getElementById("dots");
const header = document.getElementById("header");
const text = document.getElementById("text");
const image = document.getElementById("image");

let state = "start";
let counter = null;
let startTime = 0;

zone.addEventListener('click', () => {
   if (state === "start" || state === "result") {
      state = "wait";
      zone.className = "red";
      image.style.display = "none";
      dots.textContent = "...";
      header.textContent = "Wait for green";
      text.textContent = "";

      const randomTime = Math.floor(Math.random() * 3000) + 2000;

      counter = setTimeout(() => {
         state = "click";
         zone.className = "green";
         header.textContent = "Click!";
         text.textContent = "";
         startTime = performance.now();
      }, randomTime);

   } else if(state === "wait") {
      clearTimeout(counter);
      state = "result";
      zone.className = "blue";
      dots.textContent = "!";
      header.textContent = "Too soon!";
      text.textContent = "Click to try again.";

   } else if(state === "click") {
      const finalTime = performance.now();
      const reactionTime = Math.round(finalTime - startTime);

      state = "result";
      zone.className = "blue";
      dots.textContent = "⏱";
      header.textContent = `${reactionTime} ms`;
      text.textContent = "Click to keep going";
   }
});