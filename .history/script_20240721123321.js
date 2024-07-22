let char = "aahbnnncdeehhhh";

function removeDuplicateChar(char) {
  return [...new Set(char)].join("");
}

console.log(removeDuplicateChar(char));
