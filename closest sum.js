/**
 *
 * Closest Sum
 * https://www.codewars.com/kata/closest-sum/train/javascript
 *
 * 6 kyu problem
 *
 * Given an array (ints) of n integers, find three integers in arr such that the
 * sum is closest to a given number (num), target.
 *
 * Return the sum of the three integers. You may assume that each input
 * would have exactly one solution.
 *
 * Example:
 * closest_sum([-1, 2, 1, -4], 1) # 2 (-1 + 2 + 1 = 2)
 * Note: your solution should not modify the input array.
 *
 */

// helper functions

// find all combinations of three ints
// *only works on arrays with four elements
const getCombos = arr => {
  let data = [];
  let n = 3;

  for (let i = 0; i <= 3; i++) {
    let temp = [];
    arr.forEach((element, ind) => {
      if (ind !== i) {
        temp.push(element);
      }
    });
    data.push(temp);
  }

  return data;
};

// add up all iterations
const addUp = arr => arr.reduce((a, b) => a + b);

const closestSum = (ints, num) => {
  // create array with all combinations of three
  const combinations = getCombos(ints);

  // add up individual arrays
  const sums = combinations.map(el => addUp(el));

  // find the closest
  let closest;
  let difference;
  sums.forEach(el => {
    if (!Number(closest) === true) {
      closest = el;
      difference = Math.abs(num - el);
    } else if (difference > Math.abs(num - el)) {
      closest = el;
      difference = Math.abs(num - el);
    }
  });

  return closest;
};
