const textareaE1 = document.getElementById("textarea");

const totalCounterE1 = document.getElementById("total-counter");

const remainingCounterE1 = document.getElementById("remaining-counter");
updateCounter()
// Event listener takes two arguments, event, and function that triggers once the event is triggered
textareaE1.addEventListener("keyup", ()=>{
  updateCounter()
})

function updateCounter() {
  // .value to grab string from text area
  totalCounterE1.innerText = textareaE1.value.length
  // class, id, placeholder, maxlength are all ATTRIBUTES, getAttribute takes one of those attributes
  remainingCounterE1.innerText = textareaE1.getAttribute("maxLength") - textareaE1.value.length;

}