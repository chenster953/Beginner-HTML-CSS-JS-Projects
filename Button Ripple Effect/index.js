/* querySelector() to target class */
const btnE1 = document.querySelector(".btn");


/* eventListener("mouseover"), (function) which leads to (=> {}) */
btnE1.addEventListener("mouseover", (event)=>{
/* event.pageX tracks position of mouse on page relative to button on x-axis */
 const x = (event.pageX - btnE1.offsetLeft);
 const y = (event.pageY - btnE1.offsetTop); 
/* btnE1.style.setProperty transcribes 'x'px to --xPox in CSS page */
 btnE1.style.setProperty("--xPos", x + "px")
 btnE1.style.setProperty("--yPos", y + "px")

});