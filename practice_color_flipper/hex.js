
const colorText = document.getElementById("color");
const body = document.body;
const btn = document.getElementById("button");
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

btn.addEventListener('click', () => {

   let hexColor = "#";
   
   for(let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()]
   }

   body.style.backgroundColor = hexColor;
   colorText.textContent = hexColor;
})

function getRandomNumber() {
   return Math.floor(Math.random() * hex.length);
}