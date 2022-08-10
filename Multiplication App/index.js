/* Math.random() generates random number, *10 describes numbers 1 thru 10, Math.ceil changes from float to int. */
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const scoreE1 = document.getElementById("score");
/* Use JSON.parse to change score
from string back to number */
let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0
}

scoreE1.innerText  = `score: ${score}`

const questionE1 = document.getElementById("question");
/* Get input and assign to variable */ 
const inputE1 = document.
getElementById("input");

/* Get form and assign to variable */
const formE1 = document.getElementById("form");



/* Use backticks instead of quotes to insert variables, use ${} to plug in variables */
questionE1.innerText = `What is ${num1} multiplied by ${num2}?`

const correctAns = num1 * num2;
/* No idea what this means */
formE1.addEventListener("submit", ()=>{
  /* Default input returns a string, put + in front of input.value to return number */
  const userAns = +inputE1.value
  if (userAns === correctAns) {
    score ++;
    updateLocalStorage()
  } else {
    score --;
    updateLocalStorage()
  }
})
/* Functino for updating local storage, Use JSON.stringify 
to convert score from number to string */
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score))
}
