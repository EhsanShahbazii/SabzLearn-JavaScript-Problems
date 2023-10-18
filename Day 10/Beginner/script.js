//solution 1 loop
// let input = Number(prompt("Enter your number:"));
// const factorial = (num) => {
//   let result = 1n,
//     i;
//   for (i = 1n; i <= num; i++) result *= i;
//   return result;
// };

// alert(factorial(input));

//solution 2 recursive
let input = BigInt(prompt("Enter your number:"));

const factorial = (num) => {
  if (num == 1n) return 1n;
  else return num * factorial(num - 1n);
};

alert(factorial(input));
