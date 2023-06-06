const middle = function(array) {
  let result = [];
  if (array.length <= 2) {
    return result;
  } else if (array.length % 2 === 0) {
    let twoMiddleElements = array.length / 2 - 1;
    return array.slice(twoMiddleElements, twoMiddleElements + 2);
  } else {
    let singleMiddleElement = Math.floor(array.length / 2);
    return [array[singleMiddleElement]];
  }
};

module.exports = middle;