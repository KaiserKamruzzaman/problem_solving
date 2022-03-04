//problem....>  Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
const arr = [7, 69, 2, 221, 8974];
const arr_max_num = Math.max(...arr);
const arr_min_num = Math.min(...arr);
let maxNum = 0;
let minNum = 0;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  minNum = minNum + arr[i];
  maxNum = maxNum + arr[i];
  if (count == arr.length - 1) {
    minNum = minNum - arr_max_num;
  }
  if (count == 0) {
    maxNum = maxNum - arr_min_num;
  }
  count++;
}
console.log(minNum + "  " + maxNum);
