const hContainer = document.getElementById("hours");
const mContainer = document.getElementById("minuts");
const sContainer = document.getElementById("seconds");
let time = new Date();

hContainer.innerText = time.getHours() - 12;
mContainer.innerText = time.getMinutes();
sContainer.innerText = time.getSeconds();
sContainer.innerText += time.getHours() > 12 ? "pm" : "am";

setInterval(() => {
  let time = new Date();

  hContainer.innerText = time.getHours() - 12;
  mContainer.innerText = time.getMinutes();
  sContainer.innerText = time.getSeconds();
  sContainer.innerText += time.getHours() > 12 ? "pm" : "am";
}, 1000);
