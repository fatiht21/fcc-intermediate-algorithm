/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
*/

//s1
function sumAll(arr) {
  let allSum = [];
  arr.sort((a, b) => a - b);
  for (let i = arr[0]; i <= arr[1]; i++) {
    allSum.push(i);
  }
  let sum = allSum.reduce((x, y) => x + y);
  return sum;
}

console.log(sumAll([5, 10]));

//s2
function sumAll(arr) {
  let arrMax = Math.max(arr[0], arr[1]);
  let arrMin = Math.min(arr[0], arr[1]);

  let allSum = 0;

  for (let i = arrMin; i <= arrMax; i++) {
    allSum += i;
  }
  return allSum;
}

console.log(sumAll([4, 1]));
