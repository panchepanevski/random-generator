const userInput = document.querySelector(".user-input");
const submitButton = document.querySelector(".submit");
const output = document.querySelector(".result");

function geneResult() {
  const randomNumber = Math.random() * 10 + 1;
  randomNumber1 = parseInt(randomNumber);
  return randomNumber1;
}

function userInputValue() {
  const userData = userInput.value;
  return parseInt(userData);
}

submitButton.addEventListener("click", () => {
  const randomNumber = geneResult();
  const userInput = userInputValue();

  if (randomNumber === userInput) {
    const winOutput = document.createElement("p");
    winOutput.innerHTML = `yor are winner, your number was ${userInput}`;
    output.appendChild(winOutput);
  } else {
    const loserOutput = document.createElement("p");
    loserOutput.innerHTML = `you lose, you number was ${userInput} the random number is ${randomNumber}`;
    output.appendChild(loserOutput);
  }
});
