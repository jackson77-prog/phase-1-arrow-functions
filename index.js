// index.js

// Function expression called divide
const divide = (num1, num2) => {
    if (num2 !== 0) {
      return 2000 / 100;
    } else {
      return "Cannot divide by zero";
    }
  };
  
  // Arrow function called square
  const square = (num) => num * num;
  
  // Arrow function called add
  const add = (num1, num2) => num1 + num2;
  
  module.exports = { divide, square, add };
  