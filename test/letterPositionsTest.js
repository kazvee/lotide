const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {

  describe("Testing the word 'hello':", () => {

    it("returns [0] for 'h'", () => {
      assert.deepEqual(letterPositions('hello').h, [0]);
    });

    it("returns [1] for 'e'", () => {
      assert.deepEqual(letterPositions('hello').e, [1]);
    });

    it("returns [2, 3] for 'l'", () => {
      assert.deepEqual(letterPositions('hello').l, [2, 3]);
    });

    it("returns [4] for 'o'", () => {
      assert.deepEqual(letterPositions('hello').o, [4]);
    });

  });

  describe("Testing the sentence 'lighthouse in the house': ", () => {

    it("letter 'l':", () => {
      assert.deepEqual(letterPositions('lighthouse in the house').l, [0]);
    });

    it("letter 'i':", () => {
      assert.deepEqual(letterPositions('lighthouse in the house').i, [1, 11]);
    });

    it("letter 'g':", () => {
      assert.deepEqual(letterPositions('lighthouse in the house').g, [2]);
    });

    it("letter 'h':", () => {
      assert.deepEqual(letterPositions('lighthouse in the house').h, [3, 5, 15, 18]);
    });

    it("letter 't':", () => {
      assert.deepEqual(letterPositions('lighthouse in the house').t, [4, 14]);
    });

    it("letter 'o':", () => {
      assert.deepEqual(letterPositions('lighthouse in the house').o, [6, 19]);
    });

    it("letter 'u':", () => {
      assert.deepEqual(letterPositions('lighthouse in the house').u, [7, 20]);
    });

    it("letter 's':", () => {
      assert.deepEqual(letterPositions('lighthouse in the house').s, [8, 21]);
    });

    it("letter 'e':", () => {
      assert.deepEqual(letterPositions('lighthouse in the house').e, [9, 16, 22]);
    });

    it("letter 'n':", () => {
      assert.deepEqual(letterPositions('lighthouse in the house').n, [12]);
    });

  });
  
});
