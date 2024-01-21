/* 
Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
*/
// Time Complexity - O(n)
function validAnagram(str1, str2){
  if(str1.length !== str2.length) return false;
  
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  
  for (let value of str1) {
      frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
  };
  
  for (let value of str2) {
      frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
  }
  
  
 for (let key in frequencyCounter1) {
    
    if (!(frequencyCounter2.hasOwnProperty(key))) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  } 
  
  return true;
  
}

// Other solution
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')