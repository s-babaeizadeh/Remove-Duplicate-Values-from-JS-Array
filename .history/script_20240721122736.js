let char = "aahbnnncdeehhhh";

// let charnew = "";

// for (i = 0; i <= char.length; i++) {
//   if (char.charAt(i)) {
//     console.log(char.charAt(i));
//   }
// }

function removeDuplicate(str) {
  return [...new Set(str)];
}

let newchar = removeDuplicate(char);
