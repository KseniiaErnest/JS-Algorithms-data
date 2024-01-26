// #1 Recursive example

function countDown(num){
  if(num <= 0) {
      console.log("All done!");
      return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// Without recursion
function countDown(num) {
for (let i = 0; i > 0; i--) {
  console.log(i);
}
console.log('All done!');
}

// #2 Recursive example 

function sumRange(num){
  if(num === 1) return 1; 
  return num + sumRange(num-1);
}

// Factorial Iteratively
function factorial(num) {
  let total = 1;

  for (let i = num; i > 0; i--) {
    total *= i;
  }

  return total;
}

// Factorial Recursively
function factorial(num) {
  if (num === 1) return 1;
return num * factorial(num - 1);
}

// Pattern helper
function outer(input){
    
  var outerScopedVariable = []

  function helper(helperInput){
      // modify the outerScopedVariable
      helper(helperInput--)
  }
  
  helper(input)

  return outerScopedVariable;

}
// Let's try to collect all of the odd values in an array.
function collectOddValues(arr){
    
  let result = []

  function helper(helperInput){
      if(helperInput.length === 0) {
          return;
      }
      
      if(helperInput[0] % 2 !== 0){
          result.push(helperInput[0])
      }
      
      helper(helperInput.slice(1))
  }
  
  helper(arr)

  return result;

}


// The same task but with Pure Recursion function
function collectOddValues(arr){
  let newArr = [];
  
  if(arr.length === 0) {
      return newArr;
  }
      
  if(arr[0] % 2 !== 0){
      newArr.push(arr[0]);
  }
      
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}