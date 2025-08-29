const add = function(num1, num2) {
	return num1 + num2;
};
console.log(add(2,3));
const subtract = function(num1, num2) {
	return num1 - num2;
};
console.log(subtract(10,4));
const sum = function(num1, num2) {
	return num1 + num2;
};
console.log(sum(2,3));
const multiply = function(num1, num2) {
  return num1 * num2;
};
console.log(multiply(2,4));
const power = function(num1, num2) {
	return Math.pow(num1,num2);
};
console.log(power(2,3));
const factorial = function(num) {
	let fact = 1;
  if(num === 0 || num === 1) return 1;
  for(let i = 1; i<=num; i++){
    fact = fact * (i);
  }
  return fact;
};
console.log(factorial(5));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
