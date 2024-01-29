/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// My solution
function productOfArray(arr) {
    
  let result = 1;
  
  function helper(inputArray) {
      if (inputArray.length === 0) return;
      
      result *= inputArray[0];
      helper(inputArray.slice(1));
  }
  
  
  helper(arr);
  return result;
       
  }

  // Solution without helper
  function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
