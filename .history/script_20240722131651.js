let char = "aahbnnncdeehhhh";

function removeDuplicateChar(char) {
  return [...new Set(char)].join("");
}

console.log("removeDuplicateChar😃:", removeDuplicateChar(char));

//Remove Duplicate items from array
//first solution

let arr = ["🍎", "mango", "🍎", "orange", "mango", "mango"];

function removeDuplicateCharacters1(char) {
  return [...new Set(char)];
}

console.log("removeDuplicateCharacters1😀", removeDuplicateCharacters1(arr));

// second solution

function removeDuplicateCharacters2(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log("removeDuplicateCharacters2😀", removeDuplicateCharacters2(arr));

//third solution

function removeDuplicateCharacters3(arr) {
  let unique = [];
  for (i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log("removeDuplicateCharacters3", removeDuplicateCharacters3(arr));

// forth solution

let removeDuplicateCharacters4 = arr.filter((item, index) => {
  return arr.indexOf(item) === index;
});
console.log("removeDuplicateCharacters4😀", removeDuplicateCharacters4);

//fifth solution

function removeDuplicateCharacters5(arr) {
  let uniqueItems = [];
  arr.forEach((element) => {
    if (!uniqueItems.includes(element)) {
      uniqueItems.push(element);
    }
  });
  return uniqueItems;
}

console.log("removeDuplicateCharacters1😀", removeDuplicateCharacters5(arr));
