// Got elements by ID and plugged into variables
const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");
// Assigned hours, minutes, seconds to variables
function updateClock() {
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let ampm = "AM"
// If hours > 12, reset to 0
  if (h > 12) {
    h = h - 12
    ampm = "PM"
  }
// No idea what this means
  h = h<10 ? "0" + h : h;
  m = m<10 ? "0" + m : m;
  s = s<10 ? "0" + s : s;

  hourE1.innerText = h;
  minuteE1.innerText = m;
  secondsE1.innerText = s;
  ampmE1.innerText = ampm;
// No idea what this means
  setTimeout(()=>{
  updateClock()
}, 1000)
}
updateClock();