const $ = document;
let captchaShow = $.getElementById("captcha__text"),
  genBtn = $.getElementById("generate__captcha"),
  input = $.getElementById("input"),
  alert = $.getElementById("alert"),
  submitBtn = $.getElementById("submit_btn");

let fonts = [
  "Architects Daughter",
  "Creepster",
  "Permanent Marker",
  "Press Start 2P",
  "Rubik Iso",
];

let captcha = "",
  fontRange = { min: 29, max: 40 },
  letterRange1 = { min: 48, max: 57 },
  letterRange2 = { min: 65, max: 90 },
  captchaFalse = "Captcha is not correct",
  captchaTrue = "Captcha is correct";

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const createLetter = () =>
  randomNumber(0, 10) % 2 === 0
    ? randomNumber(letterRange1.min, letterRange1.max)
    : randomNumber(letterRange2.min, letterRange2.max);

const createCaptcha = () => {
  let i;
  for (i = 0; i < 5; i++) {
    let letter = String.fromCharCode(createLetter());
    captcha += letter;
    let temp = `<span style="font-family: ${
      fonts[randomNumber(0, fonts.length)]
    }; font-size: ${randomNumber(
      fontRange.min,
      fontRange.max
    )}px">${letter}</span>`;
    captchaShow.innerHTML += temp;
  }
};

genBtn.addEventListener("click", () => {
  captcha = "";
  captchaShow.innerHTML = "";
  input.value = "";
  createCaptcha();
});

submitBtn.addEventListener("click", () => {
  if (input.value.toUpperCase() === captcha && input.value !== "") {
    alert.innerHTML = captchaTrue;
  } else {
    alert.innerHTML = captchaFalse;
  }
});

createCaptcha();
