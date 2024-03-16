// var findWords = function (words) {
//     const keyboardRows = [new Set("qwertyuiop"), new Set("asdfghjkl"), new Set("zxcvbnm")];
//     return words.filter((word) => {
//         const lowerCaseWord = word.toLowerCase();
//         const row = keyboardRows.find((keyboardRow) => keyboardRow.has(lowerCaseWord[0]));
//         return lowerCaseWord.split("").every((char) => row.has(char))
//     });
// };

// function getMap(val) {
//   const m = new Map();
//   val.split("").forEach((char) => {
//     if (m.has(char)) {
//       m.set(char, m.get(char) + 1);
//     } else {
//       m.set(char, 1);
//     }
//   });
//   return m;
// }
// const lisenceFreqMap = getMap("sstp");
// const wordsMapArr = ["step", "steps", "stripe", "stepple"].map((word) => {
//   const wordFreqMap = getMap(word);
//   for (let [key, value] of wordFreqMap) {
//     if (!lisenceFreqMap.has(key)) wordFreqMap.delete(key);
//   }
//   return new Map([[word, wordFreqMap]]);
// });
// let res = "1000000000000000000000000000000000000000000";
// console.log("lisenceFreqMap ", lisenceFreqMap);
// wordsMapArr.forEach((wordMap) => {
//   if (wordMap.get(wordMap.keys().next().value).size === lisenceFreqMap.size) {
//     const tempMap = wordMap.get(wordMap.keys().next().value);
//     console.log("tempMap ", tempMap);
//     for (const [key, value] of tempMap) {
//       const lisenceKeyValue = lisenceFreqMap.get(key);
//       if (lisenceFreqMap.has(key) && value > lisenceKeyValue) {
//         console.log("lisenceKeyValue ", lisenceKeyValue, "||  value ", value);
//         if (wordMap.keys().next().value.length < res.length) {
//           res = wordMap.keys().next().value;
//           console.log("replaced");
//         }
//       }
//     }
//   }
// });
// console.log(res);

// var widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
// var s = "bbbcccdddaaa";
// var numberOfLines = function (widths, s) {
//     const alphaArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//     let line = 0;
//     let count = 0
//     s.split("").forEach((char, index) => {
//         if (count < 100) {
//             count = count + widths[alphaArr.indexOf(char)];
//         } else if (count >= 100) {
//             count = 0;
//             line = line + 1;
//             count = count + widths[alphaArr.indexOf(char)];
//         }
//     });
//     if (count < 100) {
//         line = line + 1
//     }
//     console.log([line, count])
// };
// numberOfLines(widths, s)
