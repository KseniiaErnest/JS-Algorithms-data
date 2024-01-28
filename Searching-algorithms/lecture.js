/* 
Linear Search Pseudocode
•	This function accepts an array and a value
•	Loop through the array and check if the current array element is equal to the value
•	If it is, return the index at which the element is found
•	If the value is never found, return -1

*/

function linearSearch(arr, value){
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) return i;
  } 
  return -1;
 }

 /*
 Binary Search Pseudocode
- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer:
- Create a pointer in the middle
- If you find the value you want, return the index
- If the value is too small, move the left pointer up
- If the value is too large, move the right pointer down
- If you never find the value, return -1
 */

// My solution
function binarySearch(arr, val){
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let middlePointer = Math.floor((leftPointer + rightPointer + 1) / 2); // Average of left and right
  
  while (leftPointer < rightPointer) {
    
      if (arr[middlePointer] === val) return middlePointer;
      if (arr[middlePointer] < val) leftPointer++;
      if (arr[middlePointer] > val) rightPointer--;
  }
  return -1;
}

// My solution refactored based on the other solutions
function binarySearch(arr, val){
  let start = 0;
  let end = arr.length - 1;
  
  while (start <= end) {
     let middle = Math.floor((start + end) / 2);
    
    if (arr[middle] === val) return middle;
    if (arr[middle] < val) start = middle + 1;
    if (arr[middle] > val) end = middle - 1;
  }
  return -1;
}

// Original Solution
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]){
          end = middle - 1;
      } else {
          start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
  }
  if(arr[middle] === elem){
      return middle;
  }
  return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)