// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?

// let char = "aahbnnncdeehhhh";

// function removeDuplicateChar(char) {
//   return [...new Set(char)].join("");
// }

// console.log(removeDuplicateChar(char));

//////////////////

let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicateChar(char) {
  return [...new Set(char)];
}

console.log(removeDuplicateChar(arr));
