const containerE1 = document.querySelector(".container");

// Create 30 of the same divs using a for loop createElement('div'), style the divs with giving them class ('color-container')
for (let index = 0; index < 30; index++) {
  const colorContainerE1 = document.createElement("div");
  colorContainerE1.classList.add("color-container");
  containerE1.appendChild(colorContainerE1);
  
}

const colorContainerE1s = document.querySelectorAll(".color-container");

generateColors();

function generateColors() {
// Loop thru 30 boxes
  colorContainerE1s.forEach((colorContainerE1)=> {
      const newColorCode = randomColor();
      colorContainerE1.style.backgroundColor = "#" + newColorCode;
      colorContainerE1.innerText = "#" + newColorCode;
  });
}

function randomColor () {
  const chars = '0123456789abcdef';
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
// Math.floor(Math.random()) generates integer instead of float
    const randomNumber = Math.floor(Math.random() * chars.length);
// chars.substring???
    colorCode += chars.substring(randomNumber, randomNumber + 1);
  }    
  return colorCode;
}
