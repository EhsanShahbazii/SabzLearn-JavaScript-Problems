const $ = document;
let numberInput = $.getElementById("first"),
  powInput = $.getElementById("second"),
  resultInput = $.getElementById("result"),
  btn = $.getElementById("submit_btn");

const power = (num, pow) => {
  let res = 1n;
  for (let i = 0; i < pow; i++) res *= num;
  return res;
};

btn.addEventListener("click", () => {
  let number = numberInput.value;
  let pow = powInput.value;
  resultInput.innerText = power(BigInt(number), BigInt(pow));
});
