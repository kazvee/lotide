const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = function(first, second) {
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }

  return results;
};

// Test Code
console.log("Testing the word 'hello': ");
console.log("Letter 'h':", letterPositions("hello").h[0]);
assertArraysEqual(letterPositions("hello").h, [0]);
console.log("Letter 'e':", letterPositions("hello").e[0]);
assertArraysEqual(letterPositions("hello").e, [1]);
console.log("Letter 'l':", letterPositions("hello").l);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
console.log("Letter 'o':", letterPositions("hello").o[0]);
assertArraysEqual(letterPositions("hello").o, [4]);

console.log("Testing the sentence 'lighthouse in the house': ");
console.log("Letter 'l':", letterPositions("lighthouse in the house").l[0]);
assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
console.log("Letter 'i':", letterPositions("lighthouse in the house").i);
assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);
console.log("Letter 'g':", letterPositions("lighthouse in the house").g[0]);
assertArraysEqual(letterPositions("lighthouse in the house").g, [2]);
console.log("Letter 'h':", letterPositions("lighthouse in the house").h);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
console.log("Letter 't':", letterPositions("lighthouse in the house").t);
assertArraysEqual(letterPositions("lighthouse in the house").t, [4, 14]);
console.log("Letter 'o':", letterPositions("lighthouse in the house").o);
assertArraysEqual(letterPositions("lighthouse in the house").o, [6, 19]);
console.log("Letter 'u':", letterPositions("lighthouse in the house").u);
assertArraysEqual(letterPositions("lighthouse in the house").u, [7, 20]);
console.log("Letter 's':", letterPositions("lighthouse in the house").s);
assertArraysEqual(letterPositions("lighthouse in the house").s, [8, 21]);
console.log("Letter 'e':", letterPositions("lighthouse in the house").e);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
console.log("Letter 'n':", letterPositions("lighthouse in the house").n[0]);
assertArraysEqual(letterPositions("lighthouse in the house").n, [12]);
