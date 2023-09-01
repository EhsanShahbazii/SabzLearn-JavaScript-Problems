// This project has not been debugged yet :(
// I will debug in due course.

const $ = document;
let computer = $.getElementsByClassName("computer")[0],
  user = $.getElementsByClassName("user")[0],
  timer = $.getElementsByClassName("timer")[0],
  userSpeedRange = $.getElementById("user_speed_range"),
  compSpeedRange = $.getElementById("comp_speed_range");

let win = false,
  finish = false;

let userXY = { x: 10, y: 10 },
  computerXY = { x: 700, y: 200 };

let computerSpeed = 5,
  userSpeed = 10,
  time = 30;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

userSpeedRange.addEventListener("change", (e) => {
  userSpeed = e.target.value;
});

compSpeedRange.addEventListener("change", (e) => {
  computerSpeed = e.target.value;
});

window.addEventListener("keydown", (e) => {
  if (!win && !finish) {
    switch (e.keyCode) {
      case 37:
        user.style.left = `${userXY.x - 1 * userSpeed}px`;
        userXY.x = userXY.x - 1 * userSpeed;
        break;
      case 38:
        user.style.top = `${userXY.y - 1 * userSpeed}px`;
        userXY.y = userXY.y - 1 * userSpeed;
        break;
      case 39:
        user.style.left = `${userXY.x + 1 * userSpeed}px`;
        userXY.x = userXY.x + 1 * userSpeed;
        break;
      case 40:
        user.style.top = `${userXY.y + 1 * userSpeed}px`;
        userXY.y = userXY.y + 1 * userSpeed;
    }
  } else {
    alert("you win the game!");
  }
  // frameControl(userXY);
});

const frameControl = (obj) => {
  if (obj.x <= 0) obj.x = 1550;
  if (obj.x >= 1551) obj.x = 0;
  if (obj.y <= 0) obj.y = 750;
  if (obj.y >= 751) obj.y = 0;
};

const moveItem = (step, direction) => {
  let curStep = 0;
  // time = Math.floor(4000 / step);
  let intl = setInterval(() => {
    if (curStep >= step) return null;
    if (win && !finish) {
      win = true;
      finish = true;
      clearInterval(intl);
      return null;
    }
    winning();
    // test();
    switch (direction) {
      case 37:
        computer.style.left = `${computerXY.x - 1 * computerSpeed}px`;
        computerXY.x = computerXY.x - 1 * computerSpeed;
        break;
      case 38:
        computer.style.top = `${computerXY.y - 1 * computerSpeed}px`;
        computerXY.y = computerXY.y - 1 * computerSpeed;
        break;
      case 39:
        computer.style.left = `${computerXY.x + 1 * computerSpeed}px`;
        computerXY.x = computerXY.x + 1 * computerSpeed;
        break;
      case 40:
        computer.style.top = `${computerXY.y + 1 * computerSpeed}px`;
        computerXY.y = computerXY.y + 1 * computerSpeed;
    }
    curStep++;
    // frameControl(computerXY);
  }, 300);
};

const ai = () => {
  // moveItem(random(100, 200), random(37, 40));
  moveItem(50, random(37, 40));
};

const winning = () => {
  // let distance = Math.abs(computerXY.x + computerXY.y - (userXY.x + userXY.y));
  let distance =
    Math.abs(computerXY.x - userXY.x) + Math.abs(computerXY.y - userXY.y);
  distance < 25 ? (win = true) : null;
  // console.log(distance);
};

const timeFunc = () => {
  const intl = setInterval(() => {
    timer.innerText = `0:${time - 1}`;
    time--;
    if (time <= 0 || win) {
      clearInterval(intl);
      if (!win) {
        alert("Game over");
        finish = true;
      }
    }
  }, 1000);
};

window.onload = () => {
  timeFunc();
  ai();
  const intl = setInterval(() => {
    ai();
    if (finish || win) clearInterval(intl);
  }, 3000);
};

const test = () => {
  console.log(
    `computer: (${computerXY.x},${computerXY.y}) and user: (${userXY.x}, ${userXY.y})`
  );
};
