// problem -> Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

const arr = [1, 1, 0, -1, -1];
const arryLength = arr.length;
let postiveNumber = 0;
let negativeNumber = 0;
let zero = 0;
arr.map((array) => {
  if (array > 0) {
    postiveNumber++;
  } else if (array < 0) {
    negativeNumber++;
  } else {
    zero++;
  }
});
let postiveNumberRation = postiveNumber / arryLength;
let negativeNumberRatio = negativeNumber / arryLength;
let zeroRatio = zero / arryLength;
console.log(postiveNumberRation.toFixed(6));
console.log(negativeNumberRatio.toFixed(6));
console.log(zeroRatio.toFixed(6));
