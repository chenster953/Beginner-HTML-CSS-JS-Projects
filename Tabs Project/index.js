const btn1E1 = document.querySelector(".btn1");
const btn2E1 = document.querySelector(".btn2");
const btn3E1 = document.querySelector(".btn3");
const p1E1 = document.querySelector(".paragraph1");
const p2E1 = document.querySelector(".paragraph2");
const p3E1 = document.querySelector(".paragraph3");

btn1E1.addEventListener("click",()=> {
  btn2E1.classList.remove("live");
  btn3E1.classList.remove("live");  
  btn1E1.classList.add("live");
  p1E1.classList.add("live")
  p2E1.classList.remove("live")
  p3E1.classList.remove("live")
})
btn2E1.addEventListener("click",()=> { 
  btn1E1.classList.remove("live");
  btn3E1.classList.remove("live");
  btn2E1.classList.add("live");
  p2E1.classList.add("live")
  p1E1.classList.remove("live")
  p3E1.classList.remove("live")

})
btn3E1.addEventListener("click",()=> {  
  btn2E1.classList.remove("live");
  btn1E1.classList.remove("live");
  btn3E1.classList.add("live");
  p3E1.classList.add("live")
  p2E1.classList.remove("live")
  p1E1.classList.remove("live")

})

