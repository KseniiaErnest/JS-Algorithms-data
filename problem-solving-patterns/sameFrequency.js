// Time complexity O(N)
/* 
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false


Time: O(N)
*/

function sameFrequency(numOne, numTwo){
  const num1 =  numOne.toString();
  const num2 = numTwo.toString();
  
  if (num1.length !== num2.length) return false;
  
  
  let obj1 = {};
  let obj2 = {};
  
  for (let value of num1) {
      obj1[value] = (obj1[value] || 0) + 1;
  };
  
  for (let value of num2) {
      obj2[value] = (obj2[value] || 0) + 1;
  };
  
   for (let key in obj1) {
      if (!(obj2.hasOwnProperty(key))) return false;
     else return true;
  } 
}

// Second refactored solution

function sameFrequency(numOne, numTwo){
  const num1 =  numOne.toString();
  const num2 = numTwo.toString();
  
  if (num1.length !== num2.length) return false;
  
  
let obj = {};

for (let num of num1) {
  obj[num] ? obj[num] += 1 : obj[num] = 1;
}

for (let num of num2) {
  if (!obj[num]) {
    return false;
  } else obj[num] -= 1;
}

return true;
}
