
//#region --- CONSTANTS / DOM ELEMENTS ---
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");

const header = document.getElementById("header");
const nickName = document.getElementById("nickName");
const danger = document.getElementById("danger");
const lightDark = document.getElementById("lightDark");
const error = document.getElementById("error");

const defaultText = b6.textContent;
const characters = "!@#$%^&*()_+~`|}{[]\:;?><,./0123456789";
const amongUsSound = new Audio("among_us_sound.mp3");
//#endregion

//#region --- STATE ---
let lightMode = false;
let textAppear = false;
let redText = document.getElementById("red");
let isName = prompt("What's your nickname?");
//#endregion

//#region --- EVENT LISTENERS ---
b1.onmouseover = function() {
   b1.style.backgroundColor = "#db0f27";
   b1.style.borderColor = "#db0f27";
   b1.style.color = "#faf5ef";
   b1.style.transition = "all 0.6s ease";
}

b1.onmouseout = function() {
   b1.style.backgroundColor = "";
   b1.style.broderColor = "";
   b1.style.color = "";
   b1.style.transition = "all 0.6s ease";
}

b1.onclick = function() {
   textAppear = !textAppear;
   if(textAppear) {
      redText.textContent = "RED!";
   } else {
      redText.textContent = "";
   }
}

b2.onmouseover = function() {
   b2.style.boxShadow = "0 0 15px 5px #008ecc";
   b2.style.backgroundColor = "transparent";
   b2.style.transition = "all 0.6s ease";
}

b2.onmouseout = function() {
   b2.style.boxShadow = "";
   b2.style.backgroundColor = "";
   b2.style.transition = "all 0.6s ease";
}

b2.onclick = function() {
   textAppear = !textAppear;
   isName;
   if(textAppear) {
      nickName.textContent = `Hello ${isName}!`;
   } else {
      nickName.textContent = "";
   }
}

b3.onmouseover = function() {
   b3.style.fontSize = "0.9em";
}

b3.onmouseout = function() {
   b3.style.fontSize = "";
}

b3.onclick = function() {
   amongUsSound.currentTime = 0;
   amongUsSound.play();
}

b4.onmouseover = function() {
   b4.style.boxShadow = "0 0 1px 1.8px #ff3333";
   danger.classList.add("error-glitch");
   setTimeout(() => {
      danger.classList.remove('error-glitch');
   }, 500);
}

b4.onmouseout = function() {
   b4.style.boxShadow = "";
}

b4.onclick = function() {
   b4.classList.toggle("color-switch");
}

b5.onmouseover = function() {
   b5.classList.add("slide");
   b5.classList.add("lightDark-text");
}

b5.onmouseout = function() {
   b5.classList.remove("slide");
   b5.classList.remove("lightDark-text");
}

b5.onclick = function() {
   lightMode = !lightMode

   if(lightMode) {
      document.body.classList.add("color-mode");
      header.classList.add("appear");
      b5.classList.add("dark-mode");
      lightDark.textContent = ("DARK");

   setTimeout(() => {
      header.classList.remove("appear");
   }, 1500);

   } else {
      document.body.classList.remove("color-mode");
      b5.classList.remove("dark-mode");
      lightDark.textContent = ("LIGHT");
   }
}

b6.onmouseover = function() {
   if (b6.disabled) return;
  b6.disabled = true;

  let iteracio = 0;
  
  // Ez az időzítő felel a lassabb, ütemesebb pörgetésért
  let timer = setInterval(() => {
    
    b6.textContent = defaultText
      .split("") // Szétszedjük a szöveget betűkre
      .map((betu, index) => {
        // Ha az adott betűnél már "túl vagyunk" az iteráción, 
        // akkor visszaadjuk a végleges, jó betűt
        if (index < iteracio) {
          return defaultText[index];
        }
        
        // Ha szóköz van, azt ne bántsuk
        if (betu === " ") return " ";
        
        // Különben dobjon be egy random hiba-karaktert
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join(""); // Visszafűzzük szöveggé
    
    // Ha a végére értünk a szövegnek, leállítjuk
    if (iteracio >= defaultText.length) {
      clearInterval(timer);
      b6.disabled = false;
    }
    
    // Ezzel a számmal szabályozod a sebességet: 
    // a 0.3 azt jelenti, hogy egy betű kb. 3-4-szer villan meg, mielőtt fixálódna.
    iteracio += 0.3; 
    
  }, 60); // 40 ms-onként frissül (szép, folyamatos mozgás)
}