const fibonacci = function(num) {
    if(num === "0") return 0;
   if(num<0) return "OOPS";
   if(num === 0) return 0;
   if(num === 1) return 1;
   let current = 1;
   let previous = 0;
   for(let i = 2; i<=num; i++) {
    let next = current + previous;
    previous = current;
    current = next;
   }
   return current;
};
// console.log(fibonacci(5));

// Do not edit below this line
module.exports = fibonacci;
