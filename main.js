const marsPlusBtn = document.querySelector(".mars-plus-btn");
const marsMinusBtn = document.querySelector(".mars-minus-btn");
const marsInput = document.querySelector(".mars-input");
const moonPlusBtn = document.querySelector(".moon-plus-btn");
const moonMinusBtn = document.querySelector(".moon-minus-btn");
const moonInput = document.querySelector(".moon-input");
let marsTotal = document.querySelector(".mars-total");
let moonTotal = document.querySelector(".moon-total");
let totalCost = document.querySelector(".total-cost");

// Ticket cost
const marsCost = 5000;
const moonCost = 3000;

function getNumber(myInput, isadd) {
  let inputValue = Number(myInput.value);
  if (isadd == true) {
    inputValue++;
    myInput.value = inputValue;
  } else if (myInput.value < 1) {
    return;
  } else {
    inputValue--;
    myInput.value = inputValue;
  }
  getMoney(myInput, inputValue);
}
let marsValue = 0;
let moonValue = 0;

function getMoney(myInput, quentity) {
  if (myInput == marsInput) {
    marsValue = marsCost * quentity;
    marsTotal.innerHTML = marsValue;
  } else {
    moonValue = moonCost * quentity;
    moonTotal.innerHTML = moonValue;
  }
  let totalCostJourny = marsValue + moonValue;
  totalCost.innerHTML = totalCostJourny;
}

// Button Event trigers
// Mars Buttons
marsPlusBtn.addEventListener("click", function () {
  getNumber(marsInput, true);
});
marsMinusBtn.addEventListener("click", function () {
  getNumber(marsInput, false);
});
// Moons Buttons
moonPlusBtn.addEventListener("click", function () {
  getNumber(moonInput, true);
});
moonMinusBtn.addEventListener("click", function () {
  getNumber(moonInput, false);
});
