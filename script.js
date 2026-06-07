
const clickSound = new Audio("sound_pen_click.wav");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
   button.addEventListener('click', () => {
      clickSound.currentTime = 0;
      clickSound.play();
   });
});