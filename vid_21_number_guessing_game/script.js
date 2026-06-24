
const tip = document.getElementById("tip");
const text = document.getElementById("text");
const Btn = document.getElementById("submitBtn");

const clickSound = new Audio("button_click_sound.mp3");
const winSound = new Audio("video_game_win.wav");
const looseSound = new Audio("retro_arcade_game_over.wav");

const minNum = 1;
const maxNum = 10;
let randomNum = Math.floor(Math.random() * ((maxNum-1) - minNum + 1)) + minNum;
console.log(randomNum);


let attempts = 3;

function running() {

   if(tip.value == randomNum) {

      winSound.play();

      text.textContent = `Congrats! You've guessed right!`;
      tip.disabled = true;
      tip.value = null;
      Btn.textContent = 'Again';

   } else if(tip.value <= 0 || tip.value >= 10 || tip.value == null) {

      text.textContent = 'Invalid number';

   } else {

      attempts--

      if(attempts == 0) {

            looseSound.play();

            text.textContent = `Game over! The number was ${randomNum}`;
            tip.disabled = true;
            tip.value = null;
            Btn.textContent = 'Again';

      } else {
         text.textContent = `${attempts} attempts left`;
      }
   }

}

Btn.addEventListener('click', () => {

   clickSound.currentTime = 0;
   clickSound.play();

   if(tip.disabled) {

      randomNum = Math.floor(Math.random() * ((maxNum-1) - minNum + 1)) + minNum;
      console.log(randomNum);

      attempts = 3;
      tip.disabled = false;
      tip.value = null;
      Btn.textContent = 'Submit';
      text.textContent = `it's between ${minNum - 1} and ${maxNum}`;

   } else {
      running();
   }

})