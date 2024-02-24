// Radix Sort Helper 1: getDigit(num, place) - returns the digit in num at the given place value. (From the right).
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Radix Sort Helper 2: digitCount(num) - returns the number of digits in num.
// Version 1
function digitCount(num) {
return Math.abs(num).toString().length;
}
// Version 2
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Radix Sort Helper 2: mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list.
// My version:
function mostDigits(arr) {
  let mostDigits = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentDigit = digitCount(arr[i]);
    if (currentDigit > mostDigits) {
      mostDigits = currentDigit;
    }
  }

  return mostDigits;
}

// Other version
function mostDigits(arr) {
  let maxDigits = 0;

  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]))
  }

  return maxDigits;
}

function redixSort(nums) {
let maxDigitCount = mostDigits(nums);

for (let k = 0; k < maxDigitCount; k++) {
  let digitBuckets = Array.from({length: 10}, () => []);
  for (let i = 0; i < nums.length; i++) {
    getDigit(nums[i], k);
    let digit = getDigit(nums[i], k);
    digitBuckets[digit].push(nums[k]);
  }
  nums = [].concat(...digitBuckets);
}
return nums;
}