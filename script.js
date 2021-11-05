const on = document.getElementById("on");
const off = document.getElementById("off");
const turnOn = document.querySelector(".on");
const turnOff = document.querySelector(".off");

turnOn.addEventListener("click", function () {
  on.style.display = "inline-block";
  off.style.display = "none";
});
turnOff.addEventListener("click", function () {
  off.style.display = "inline-block";
  on.style.display = "none";
});
