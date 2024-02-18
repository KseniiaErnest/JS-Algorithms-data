/* 
Merging Arrays Pseudocode
•	Create an empty array, take a look at the smallest values in each input array
•	While there are still values we haven't looked at...
•	If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
•	If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
•	Once we exhaust one array, push in all remaining values from the other array

*/

function merge(arr1, arr2) {
  const results = [];

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      results.push(arr1[pointer1]);
pointer1++;
    } else {
      results.push(arr2[pointer2]);
      pointer2++;
    }
  }

  while (pointer1 < arr1.length) {
    results.push(arr1[pointer1]);
    pointer1++;
  }

  while (pointer2 < arr2.length) {
    results.push(arr2[pointer2]);
    pointer2++;
  }


  return results;

}

[1, 10, 50], [2, 14, 99, 100]

/* mergeSort Pseudocode
Break up the array into halves until you have arrays that are empty or have one element
Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
Once the array has been merged back together, return the merged (and sorted!) array  */

function mergeSort(arr) {

if (arr.length <= 1) return arr;
let mid = Math.floor(arr.length/2);
let left = mergeSort(arr.slice(0, mid));
let right = mergeSort(arr.slice(mid));

return merge(left, right);

}