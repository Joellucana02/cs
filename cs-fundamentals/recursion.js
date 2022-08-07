/* Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1. Otherwise, return the result of the base multiplied by the power function to the exponent - 1. You can think of it in terms of this example:
 */

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
power(2, 4);

/* Next, try to write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1. For example: */

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
factorial(4);

/* { Recursion Exercises. } */

/* Part 1: Recursion Exercises */

/* Recursion Exercise
Getting started
For this exercise you MUST use recursion to solve these problems. Some of them can be done without, but it is essential that you practice recursion and make the tests pass.

Write a function called productOfArray which takes in an array of numbers and returns the product of them all */

/* productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60 */

function productOfArray(arr) {
  let ind = arr[0];
  if (arr.length <= 1) return arr[0];
  arr.shift();
  return ind * productOfArray(arr);
}
/* Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44
                    }
                }
            }
        }
    }
}

contains(nestedObject, 44) // true
contains(nestedObject, "foo") // false */

function contains(nesObj, val) {
  let key = Object.keys(nesObj)[0];
  if (nesObj[key] == val) return true;
  return contains(nesObj[key], val);
}

/* The real size of a multi-dimensional array
Challenge:

Given a multi-dimensional integer array, return the total number of integers, stored inside this array. You should not rely on the number of dimensions to solve this kata. If n is the number of dimensions, then: 1 <= n < +Infinity.

Example:

Given [[[5], 3], 0, 2, [], [4, [5, 6]]], your function should return a result of 7. This is because the array contains 7 integers.

Addendum:

Think of it as dimension-agnostic value counting. We want to know the total number of integers inside the array and we don't care for the dimensions.

*/
let n = 0;
function realSize(arrays) {
  if (Array.isArray(arrays[n])) {
    arrays = arrays.concat(arrays[n]);
    arrays.splice(n, 1);
    return realSize(arrays);
  } else if (arrays[n] >= 0 || arrays[n] === undefined) {
    if (n < arrays.length) {
      console.log(arrays);
      n++;
      return realSize(arrays);
    }
    return arrays.length;
  }
}
