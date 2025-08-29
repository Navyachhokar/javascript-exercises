const palindromes = function (string) {
   const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
   const cleanString = string.toLowerCase().split("").filter((char) => alphanumerical.includes(char)).join("");
   const reverseString = cleanString.split("").reverse().join("");
   return cleanString === reverseString;
};
// console.log(palindromes("nitin"));

// Do not edit below this line
module.exports = palindromes;
