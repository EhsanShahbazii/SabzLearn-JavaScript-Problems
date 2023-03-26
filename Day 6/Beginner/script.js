//solution 1 loop
// let index = prompt("Please Enter your index for generate fibonacci series:");

// const fibonacciLoop = (n) => {
//   const series = [0, 1];
//   for (let i = 2; i < n; i++) series.push(series[i - 2] + series[i - 1]);
//   return series;
// };

// console.log(fibonacciLoop(index));

//solution 2 recursive
let index = prompt("Please Enter your index for generate fibonacci series:");

const fibonacciRecursive = (n) => {
  if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  } else {
    let series = fibonacciRecursive(n - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  }
};

console.log(fibonacciRecursive(index));
