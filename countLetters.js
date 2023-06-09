const assertEqual = require("./assertEqual");

const countLetters = function(sentence) {
  const result = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }

  return result;
};

// Test Code
console.log("LHL", countLetters("LHL"));
console.log("lighthouse in the house", countLetters("lighthouse in the house"));

console.log("Result 1:");
const result1 = countLetters("LHL");
assertEqual(result1.H, 1);
assertEqual(result1.L, 2);

console.log("Result 2:");
const result2 = countLetters("lighthouse in the house");
assertEqual(result2.l, 1);
assertEqual(result2.i, 2);
assertEqual(result2.g, 1);
assertEqual(result2.h, 4);
assertEqual(result2.t, 2);
assertEqual(result2.o, 2);
assertEqual(result2.u, 2);
assertEqual(result2.s, 2);
assertEqual(result2.e, 3);
assertEqual(result2.n, 1);

module.exports = countLetters;