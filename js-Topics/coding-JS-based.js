/**
 * [4, 5, 6, 7, 4, 8, 9, 7]
 * op-
 * [
 *  {4: 2},
 *  {5, 1}...
 * ]
 */
// const getFrequencyMapArr = (arr) => {
//   const result = [];
//   const frequencyObj = {};
//   arr.forEach((item, i) => {
//     frequencyObj[item] = frequencyObj[item] ? frequencyObj[item] + 1 : 1;
//   });
//   for (const key in frequencyObj) {
//     result.push({ [key]: frequencyObj[key] });
//     // result.push(new Array(frequencyObj[key]).fill(key));
//   }

//   return frequencyObj;
// };

// console.log(getFrequencyMapArr([4, 5, 6, 7, 4, 8, 9, 7]));
