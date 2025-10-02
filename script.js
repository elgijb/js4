const button = document.querySelector(".prize__button");
const prizes = document.querySelectorAll(".prize");
const prizeNumbers = document.querySelectorAll(".prize__number");
let prizesArray = [];

for (let i = 0; i < prizeNumbers.length; i++) {
  prizesArray.push(prizeNumbers[i].textContent);
}

const resultBlock = document.querySelector(".prize__result");

button.addEventListener("click", function () {
  for (let i = 0; i < prizes.length; i++) {
    prizes[i].classList.remove("active");
  }

  const randomIndex = Math.floor(Math.random() * prizesArray.length);
  const randomNumber = prizesArray[randomIndex];
  resultBlock.innerHTML = "Выпал: " + randomNumber;
  prizes[randomIndex].classList.add("active");
});
