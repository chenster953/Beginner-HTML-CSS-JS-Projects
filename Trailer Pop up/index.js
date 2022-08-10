const btnE1 = document.querySelector(".btn");
const closeIconE1 = document.querySelector(".close-icon");
const trailerContainerE1 = document.querySelector(".trailer-container")
const videoE1 = document.querySelector("video");

btnE1.addEventListener("click", ()=> {
  trailerContainerE1.classList.remove("active");
});

closeIconE1.addEventListener("click", ()=> {
  trailerContainerE1.classList.add("active");

/* Pause video, reset video time to 0*/
  videoE1.pause();
  videoE1.currentTime = 0;
});