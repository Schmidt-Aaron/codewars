/**
 *
 * Bouncing Balls
 * https://www.codewars.com/kata/bouncing-balls/train/javascript
 *
 * 6kyu problem
 *
 * @param {float} h Meters > 0
 * @param {float} bounce Bounce coefficient 0 > bounce < 1
 * @param {float} window height of observer window; < h
 */

const bouncingBall = (h, bounce, window) => {
  // escape conditions
  if (h < 0 || bounce >= 1 || bounce <= 0 || window >= h) {
    return -1;
  }

  // # passing window n times
  let count = 1;

  // highest point of bounce
  let apogee = h;

  // loop it
  while (apogee > window) {
    apogee *= bounce;
    if (apogee > window) {
      count += 2;
    }
  }
  return count;
};

bouncingBall(3.0, 0.66, 1.5); // 3
