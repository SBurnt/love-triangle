/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
// function getLoveTrianglesCount(preferences = []) {

  // your implementation
  // console.log(preferences);
  let count = new Set();
  preferences.forEach((item, i, arr) => {
    let spichoneeOne = arr[item - 1];
    let spichoneeTwo = arr[spichoneeOne - 1];
    let spichoneeThree = arr[spichoneeTwo - 1];
    if (spichoneeThree === item) {
      [spichoneeThree, spichoneeOne, spichoneeTwo].map(item => count.add(item));
    }
  });
  // console.log(count);
  return Math.floor(count.size / 3);
};

// getLoveTrianglesCount([23, 15, 37, 5, 20, 20, 25, 34, 10, 15, 6, 31, 14, 16, 9, 13, 12, 23, 24, 4, 28, 1, 38, 41, 29, 27, 34, 21, 7, 23, 17, 30, 7, 26, 33, 14, 40, 1, 39, 18, 19]);
