// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if(number === 0) {
    return 1;
  } 
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 1;
  for(let i = number; i > 0; i--) {
    answer *= i;
  }
  return answer;
}

console.log("recursive approach:", findFactorialRecursive(10));
console.log("iterative approach:", findFactorialIterative(10));
