// Remember to put the . in class selection
const navbarE1 = document.querySelector(".navbar");

const bottomContainerE1 = document.querySelector(".bottom-container");

/*offsetTop is when container touches top of screen,
navbar.offsetHeight is subtracting height of navbar,
50 is subtracting the margin top of bottom container */
window.addEventListener("scroll", ()=>{
  if (window.scrollY > bottomContainerE1.offsetTop - navbarE1.offsetHeight - 50){

// classList.add to add class to element, active class already done in css
    navbarE1.classList.add("active");
  } else {
    navbarE1.classList.remove("active");
  }
})