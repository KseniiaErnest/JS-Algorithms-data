/* 
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
*/

// Soltuion #1 Frequency counter
function areThereDuplicates(...variables) {
  if (variables.length === 0) return false;
  
  let obj = {};
  
  for (let val of variables) {
      obj[val] ? obj[val] += 1 : obj[val] = 1;
  };
  
  for(let key in obj){
    if(obj[key] > 1) return true
  }
  return false;
}

// Soltion #2 Multiple pointers pattern
function areThereDuplicates(...variables) {
  if (variables.length === 0) return false;
  
  variables.sort();

  let start = 0;
  let next = 1;

  while (next < variables.length) {
if (variables[start] === variables[next]) {
  return true;
}

start++;
next++;
  }

  return false;
}

// Solituin #3 One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}


// Soltion #4 
function areThereDuplicates(...variables) {
  if (variables.length === 0) return false;
  
  variables.sort()
  
  for (let i = 0; i < variables.length; i++) {
    if (variables[i] === variables[i + 1]) {
      return true;
    }
  }
  
  return false;

}
