function addClass(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function removeClass(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}
function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  let getScore = parseInt(element.innerText);
  return getScore;
}
function setElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function getRandomAlphabet() {
  const alphabetsSring = "abcdefghijklmnopqrstuvwxyz";
  // const alphabets = alphabetsSring.split(""); //returns an array
  const alphabets = Array.from(alphabetsSring); //returns an array
  // console.log(alphabets);
  const randomNumber = Math.round(Math.random() * 25);
  //   console.log(randomNumber);
  const randomValue = alphabets[randomNumber];
  return randomValue;
}
