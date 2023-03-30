let input = prompt("enter your sentence: ");

// solution 1
for (let i = 0; i < input.length; i++) {
  if (!input.substring(i + 1).includes(input[i])) {
    alert(input[i]);
    break;
  }
}
