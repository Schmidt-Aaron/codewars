/**
 *
 * Persistent Bugger.
 * https://www.codewars.com/kata/persistent-bugger/train/javascript
 * 6 kyu
 *
 * Write a function, persistence, that takes in a positive parameter
 * num and returns its multiplicative persistence, which is the number of
 * times you must multiply the digits in num until you reach a single digit.
 *
 */

// my solution
const persistence = num => {
  let count = 0;
  // helper functions
  const numDigits = num => num.toString().length;
  const productOfDigits = num => {
    return num
      .toString()
      .split("")
      .reduce((acc, curr) => {
        return +acc * +curr;
      });
  };

  let digits = numDigits(num);
  // main logic
  while (digits > 1) {
    num = productOfDigits(num);
    count++;
    digits = numDigits(num);
  }
  return count;
};

// top solution
function persistence(num) {
  var times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
}
