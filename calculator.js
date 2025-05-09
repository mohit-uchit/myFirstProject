/**
This function will help to calculate two arithmetic entities 
* @param {string} operator The operator to be used e.g : +, - , *, /, **, %
* @param {number} num1 The first number
* @param {number} num2 The second number
* @returns {number|string} Return the result or the invalid operator message
**/
const calculate = (operator, num1, num2) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
    case '/':
      result = num1 / num2;
      break;
    case '**':
      result = num1 ** num2;
      break;
    case '%':
      result = num1 % num2;
      break;
    default:
      result = 'The operator is invalid';
  }

  return {
    result: result,
  };
};

module.exports = {
  calculate,
};
