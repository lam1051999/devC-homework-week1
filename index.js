let correctResult = 5;
let numberOfGuesses = 10;
let button = document.getElementById("guessButton");
document.getElementById(
  "guesses"
).innerHTML = `Your have ${numberOfGuesses} left`;
let retryButton = document.getElementById("retryButton");
retryButton.style.display = "none";
let pastGuesses = "Your past guesses are: ";

button.addEventListener("click", function () {
  if (document.getElementById("number").value !== "") {
    let input = parseInt(document.getElementById("number").value);
    let message = document.getElementById("message");

    numberOfGuesses--;
    document.getElementById(
      "guesses"
    ).innerHTML = `Your have ${numberOfGuesses} left`;
    pastGuesses = pastGuesses + input + ",";
    document.getElementById("pastGuesses").innerHTML = pastGuesses;

    if (numberOfGuesses === 0) {
      button.style.display = "none";
      retryButton.style.display = "inline-block";
      pastGuesses = "Your past guesses are: ";
    }

    if (input < correctResult) {
      message.innerHTML = "Your guess is too low, guess higher";
      message.style.backgroundColor = "red";
    } else if (input > correctResult) {
      message.innerHTML = "Your guess is too high, guess lower";
      message.style.backgroundColor = "orange";
    } else {
      message.innerHTML = "Yay, YOU ARE THE LORD OF THE GUESSES";
      message.style.backgroundColor = "lightgreen";
      button.style.display = "none";
      retryButton.style.display = "inline-block";
      pastGuesses = "Your past guesses are: ";
    }
  } else {
    alert("You must input a specific number");
  }
});

retryButton.addEventListener("click", function () {
  numberOfGuesses = 10;
  retryButton.style.display = "none";
  button.style.display = "inline-block";
  document.getElementById(
    "guesses"
  ).innerHTML = `Your have ${numberOfGuesses} left`;
  document.getElementById("pastGuesses").innerHTML = pastGuesses;
  document.getElementById("number").value = "";
  document.getElementById("message").innerHTML = "";
});
