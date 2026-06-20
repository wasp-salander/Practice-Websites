
const colorText = document.getElementById("color");
const body = document.body;
const btn = document.getElementById("button");
const colors = ["green", "red", "orange", "blue", "purple", "yellow"];

btn.addEventListener('click', () => {

   const randomNumber = Math.floor(Math.random() * colors.length);
   const randomColor = colors[randomNumber];

   body.style.backgroundColor = randomColor;
   colorText.textContent = randomColor;
})