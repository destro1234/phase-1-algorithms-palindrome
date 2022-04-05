function isPalindrome(word) {
  // Write your algorithm here
   let reverseString = word.toLowerCase().split('').reverse().join('')
   return reverseString === word;
  
}


// const lowerCase = word.toLowerCase()
// console.log(lowerCase)

// const backwards = lowerCase.split('').reverse().join('')
// console.log(backwards)

// return lowerCase === backwards
/* 
  Add your pseudocode here
*/
// function isPalindrome(string) {
    // compare the letters in the string for matches 
// }
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
