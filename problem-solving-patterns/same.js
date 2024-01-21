/* Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same. */
// A Naive Solution with time complexity N^2
function same(arr1, arr2){
  if(arr1.length !== arr2.length){
      return false;
  }
  for(let i = 0; i < arr1.length; i++){
      let correctIndex = arr2.indexOf(arr1[i] ** 2)
      if(correctIndex === -1) {
          return false;
      }
      arr2.splice(correctIndex,1)
  }
  return true
}

// [1, 2, 3, 2], [9, 1, 4, 4]

/* 
So the approach here, the very first thing we can do to check a nice little edge case, it's not even an edge case.
Just we can tell immediately if the two arrays have different lengths, then we're done.
There's no way for it to be true if there's an extra value in here that isn't over here or vice versa.

We're going to loop over this first array or we could loop over the second one instead. And we're going to call index of where we pass in the square of each value.
So we loop over this array, we start at one and one is a silly example because one squared is one. But we're going to ask what is the index of one squared in array two?
So in our case, if we take one, what's the index of one squared in this array? It's this index right here, which is index of one. It's very confusing, a lot of ones. 
And then what we do, we check if the correct index is negative one, meaning it's not in there, we return false and we're done. Because if we had something in here like five. 
And we're trying to see what index in array two contains 25 five squared. Well, nothing does it returns negative one. That means that we have a mismatch and we're done. 
But in the case of one, if it is a match and it is, it's right here, then we're going to call a ray to splice that correct index comma one. 
And that effectively what that does is it removes one from this array. So then we move on to two and then we're going to look at two squared. 
What's the index of two squared in this array? Well, there's two of them. It just gives us the first one. So it's going to return this index. 
So this is not true right here. We don't return false. We keep going. We live another day, another loop iteration, and we remove it from the array using splice and then we look at three squared and it's in there. 
So we remove it. Then we get to the end of the array and we look at two. What is the index of two squared. Well that's four. 
That's it. We remove it, we hit the end of the array and we never returned false. So we return true.

So that's the naive approach because it is o of end squared, it's quadratic time.
This index of is iterating over the entire array or potentially iterating over the entire array, which is a nested loop.
So as n grows the length of our arrays, this grows, as does this, and it's nested. So that's the quadratic relationship.
We always want to try and avoid nested loops whenever possible.

*/

// Refactored Solution - Time Complexity - O(n)
function same(arr1, arr2){
  if(arr1.length !== arr2.length){
      return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2){
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
  }
  for(let key in frequencyCounter1){
      if(!(key ** 2 in frequencyCounter2)){
          return false
      }
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
          return false
      }
  }
  return true
}

/* 
So this is where the frequency counter pattern comes in. Instead of looping over the first array and then checking for each value in a sub loop over the second
array, we can loop over each array one time individually, which is what I'm doing here. So here's one loop, here's another loop.
Remember that two loops is vastly better than two nested loops, two separate loops. This is going to be two MN if n is 1000 characters or 1000 elements, this means 2000 iterations.
But if we have 1000 on the outer loop and then 1000 times on the inner loop, we're looking at 1000 times 1000, which is a million compared to what we say 2000 anyway.


We start with an empty object, and then we just loop over every value in the array. Could use a for loop. 
I like using a for-of; if you're not familiar with the for-of syntax, it's just a nice way of looping over an array or a string. 
We just make a placeholder variable like `val`, and that corresponds to each element in the array. 
So for each value in array one, we're going to add one to the frequency counter if it's already in there, or we're going to initialize it to one. 
So we end up with just this little object that tells us how many times each element occurs in that list.

Then we loop over this first one, and we're going to look at each key. 
We're going to look at two, and we check if two squared (that's what this is) is that a key in the frequency count or two? Two squared is four, so is there any four in our second object? And there is. 
So this part doesn't return false. Then we check, okay, do the values correspond? If there were two twos, there needs to be two fours. 
And if there's not, if there's a mismatch, we return false. So it's not just a matter of checking if there is a four, we need to make sure there are two fours as we've discussed. 
Then we keep going, we hit three, and we check is nine in the second object and it is. And do the values match? One matches one. 
Then we get to five, is there five squared which is 25? Is there a 25? No. So we return false.


*/
