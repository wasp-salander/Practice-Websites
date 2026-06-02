
// #region --- CONSTANTS ---
const btnDecrease = document.getElementById("btnDecrease");
const btnReset = document.getElementById("btnReset");
const btnIncrease = document.getElementById("btnIncrease");
const countLabel = document.getElementById("countLabel");
// #endregion

let countNum = 0;

// #region --- EVENT LISTENERS ---
btnDecrease.onclick = function() {
   countNum--;
   countLabel.textContent = countNum;
}

btnIncrease.onclick = function() {
   countNum++;
   countLabel.textContent = countNum;
}

btnReset.onclick = function() {
   countNum = 0;
   countLabel.textContent = countNum;
}
// #endregion