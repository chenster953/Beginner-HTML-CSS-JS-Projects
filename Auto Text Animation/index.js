const containerE1 = document.querySelector(".container");

const careers = ['McDonalds', 'Burger King', 'Chick fil a Manager', 'Batman']

let careerIndex = 0

let characterIndex = 0

updateText();

function updateText() {    
  characterIndex++
  containerE1.innerHTML = `<h1>I am the ${careers[careerIndex].slice(0,characterIndex)}</h1>`;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;   
    characterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400)
}

