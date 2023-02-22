const $ = document;
let btn = $.getElementById("qt"),
  box = $.getElementById("text"),
  quoter = $.getElementsByClassName("qouter")[0];

const randomNumber = () => {
  return Math.floor(Math.random() * 11);
};

fetch("./quotes.json")
  .then((res) => res.json())
  .then((data) => {
    btn.addEventListener("click", () => {
      let num = randomNumber();
      box.innerText = data[num].quote;
      quoter.innerText = data[num].author;
    });
  });
