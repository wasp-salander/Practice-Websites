
console.log(Math.PI);
console.log(Math.E);

let x = 1;
let y = 2;
let z = 3;
let num;

// num = Math.round(x);   sima kerekítés
// num = Math.floor(x);   lefele kerekít
// num = Math.ceil(x);   felfelé kerekít
// num = Math.trunc(x);   levágja a tizedes jegyeket
// num = Math.pow(y, z);   hatványozás (2 a 3-ikon = 8)

// num = Math.sqrt(x);
// num = Math.log(x);
// num = Math.sin(x);
// num = Math.cos();
// num = Math.tan();

// num = Math.abs(x);   abszolút érték, negatív számból pozitív
// num = Math.sign(x);

// let max = Math.max(x, y, z);   legnagyobb érték (3)
// let min = Math.min(x, y, z);   legkisebb érték (1)

// --- RANDOM NUMBER GENERATOR ---

// Lesson
const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * 6) + 1;   // random szám 1-től 6-ig (dobókocka)
let randomNum2 = Math.floor(Math.random() * 100) + 1;   // ugyan ez 1-től 100-ig
let randomNum3 = Math.floor(Math.random() * (max - min)) + min;
// konkrét két szám közötti random számot dob

console.log(randomNum3);

// Project

const btn = document.getElementById("btn");
const number = document.getElementById("number");
const mymin = 1;
const mymax = 6;

const sound = new Audio("button_click_sound.mp3");

let myRandomNumber;

btn.addEventListener('click', () => {
   sound.currentTime = 0;
   sound.play();
   myRandomNumber = Math.floor(Math.random() * mymax) + mymin;
   number.textContent = myRandomNumber;
});