function eventHandleByKeyBoard(event) {
  // console.log("button pressed");
  // console.log(event.key.toUpperCase());
  const keyboardValue = event.key;
  if (keyboardValue === "Escape") {
    gameOver();
  }

  const currentAlphabetElement = document.getElementById("text-element");
  // console.log(currentAlphabetElement.innerText);
  const screenAlphabet = currentAlphabetElement.innerText.toLowerCase();
  if (screenAlphabet === keyboardValue) {
    // const lifeScore = document.getElementById("life");
    removeBackgroundColorById(screenAlphabet);
    continueGame();

    //score increase
    let spanScore = getElementValueById("span-score");
    spanScore += 1;
    setElementValueById("span-score", spanScore);
    // spanScore.innerText = getSpanScore;
  }
  //lifetime decrease
  else {
    let lifeScore = getElementValueById("life-score");
    lifeScore -= 1;
    setElementValueById("life-score", lifeScore);
    if (lifeScore < 0) {
      gameOver();
      // continueGame();
    }
  }
}
document.addEventListener("keyup", eventHandleByKeyBoard);

function continueGame() {
  // generate a random alphabet
  const alphabet = getRandomAlphabet();
  //get randomly  generated alphabet to the screen (show it)
  const currentAlphabetElement = document.getElementById("text-element");
  currentAlphabetElement.innerText = alphabet;
  setBackgroundColorById(alphabet);
}

function play() {
  // const beginScreen = document.getElementById("begin-screen");
  // beginScreen.classList.add("hidden");
  addClass("begin-screen");
  // const playGround = document.getElementById("play-ground");
  // playGround.classList.remove("hidden");
  addClass("end-screen");
  removeClass("play-ground");
  continueGame();
  //reset life and score
  setElementValueById("life-score", 3);
  setElementValueById("span-score", 0);
}
function gameOver() {
  addClass("play-ground");
  removeClass("end-screen");
  //update final score in the end screen
  const lastScore = getElementValueById("span-score");
  // console.log(lastscore);
  setElementValueById("game-score", lastScore);
  //clear the last selected alphabet highlight
  const currentAlphabet = setElementTextById("text-element");
  removeBackgroundColorById(currentAlphabet);
}
