const $ = document;
let colorInput = $.querySelector("input[type='color']"),
  sizeInput = $.querySelector("input[type='range']"),
  randomCheck = $.querySelector("input[type='checkbox']");

let color = "#d6d2d2",
  size = 10;

colorInput.addEventListener("change", (e) => {
  color = e.target.value;
});

sizeInput.addEventListener("change", (e) => {
  size = Number(e.target.value);
});

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

window.onmousemove = (e) => {
  if (randomCheck.checked) {
    size = randomNumber(sizeInput.min, sizeInput.max);
  }
  let cx = e.clientX;
  let cy = e.clientY;
  let drop = $.createElement("div");
  drop.className = "drop";
  drop.style.left = `${cx}px`;
  drop.style.top = `${cy}px`;
  drop.style.width = `${size}px`;
  drop.style.height = `${size}px`;
  drop.style.backgroundColor = color;
  $.body.appendChild(drop);
  setTimeout(() => {
    $.body.removeChild(drop);
  }, 2000);
};
