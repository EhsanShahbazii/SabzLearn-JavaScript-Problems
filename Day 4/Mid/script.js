const $ = document;
let container = $.getElementsByClassName("cont")[0];

const random = (min, max) => Math.floor(Math.random() * max + min);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let drops = [];

const snow = () => {
  let w = random(1, 15),
    op = Math.random(),
    lef = random(0, 100),
    del = random(0, 15);
  sec = random(5, 15);
  let drop = `<div style="position: absolute; width: ${w}px; height: ${w}px; opacity: ${op}; top: -2rem; left: ${lef}rem;animation: snow ${sec}s ${del}s linear; border-radius: 50%;z-index: 1000;filter: drop-shadow(0 0 10px white);background-color: #fff"></div>`;

  drops.push(drop);
};

const main = async () => {
  while (true) {
    for (let i = 0; i < random(50, 100); i++) snow();
    for (let i = 0; i < drops.length; i++) container.innerHTML += drops[i];
    await sleep(30000);
    container.innerHTML = "";
  }
};

main();
