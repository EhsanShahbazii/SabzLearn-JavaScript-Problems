const $ = document;
let input = $.querySelector("input"),
  generate4Btn = $.getElementById("generate4_btn"),
  generate6Btn = $.getElementById("generate6_btn"),
  submitBtn = $.getElementById("submit_btn"),
  alert = $.getElementById("alert");

const words6Letter = [
  "Accuse",
  "Admire",
  "Adored",
  "Bridge",
  "Bright",
  "Broken",
  "Budget",
  "Client",
  "Closed",
  "Closer",
  "Dollar",
  "Domain",
  "Double",
  "Driven",
  "Famous",
  "Father",
  "Fellow",
  "Gainly",
  "Gallop",
  "Gamble",
];

const words4Letter = [
  "agar",
  "asps",
  "ahem",
  "able",
  "beta",
  "bets",
  "bevy",
  "case",
  "cent",
  "chop",
  "city",
  "deal",
  "deck",
  "deer",
  "daub",
  "dale",
  "evil",
  "exam",
  "exit",
  "garb",
  "gild",
  "gird",
  "girl",
];

const randomGenerate = (max) => {
  return Math.floor(Math.random() * max);
};

let currentWord = "",
  word = "",
  finish = true,
  i;

generate4Btn.addEventListener("click", () => {
  if (finish) {
    currentWord = "";
    word = words4Letter[randomGenerate(words4Letter.length)].toUpperCase();
    for (i = 0; i < 4; i++) {
      i % 2 == 0 ? (currentWord += word[i]) : (currentWord += "_");
    }
    input.value = currentWord;
    finish = false;
  }
});

generate6Btn.addEventListener("click", () => {
  if (finish) {
    currentWord = "";
    let word = words6Letter[randomGenerate(words6Letter.length)].toUpperCase();
    for (i = 0; i < 6; i++) {
      i % 2 == 0 ? (currentWord += word[i]) : (currentWord += "_");
    }
    input.value = currentWord;
    finish = false;
  }
});

submitBtn.addEventListener("click", () => {
  let userGuess = input.value.toUpperCase();
  userGuess === word && word !== "" ? alert.classList.add("alert_true") : null;
  userGuess === word && word !== "" ? (finish = true) : (finish = false);
});
