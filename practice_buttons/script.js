
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");

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

b3.onmouseover = function() {
   
}

b3.onmouseout = function() {
   
}