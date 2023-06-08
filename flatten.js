const flatten = function(arrayWithNestedArrays) {
  let flattenedArray = [];
  for (let i = 0; i < arrayWithNestedArrays.length; i++) {
    if (Array.isArray(arrayWithNestedArrays[i])) {
      for (let j = 0; j < arrayWithNestedArrays[i].length; j++) {
        flattenedArray.push(arrayWithNestedArrays[i][j]);
      }
    } else {
      flattenedArray.push(arrayWithNestedArrays[i]);
    }
  }
  return flattenedArray;
};

module.exports = flatten;
