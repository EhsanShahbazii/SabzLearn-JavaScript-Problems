// solution 1
let input = prompt("inter your number");
let sum = 0,
  i;

for (i = 0; i < input.length; i++) sum += Number(input[i]);

console.log(sum);

// solution 2
// let input = prompt("inter your number");
// let sum = 0;

// Array.from(input).map((item) => (sum += Number(item)));

// console.log(sum);
