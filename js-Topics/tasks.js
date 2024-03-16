// function drawPyramid(n) {
//   for (let i = 0; i < n; i++) {
//     let space = " ".repeat(n - i - 1);
//     let star = "*".repeat(2 * i + 1);
//     console.log(space, star);
//   }
// //   for (let i = n; i > 0; --i) {
// //     let star = "*".repeat(2 * i - 1);
// //     let space = " ".repeat(n - i);
// //     console.log(space, star);
// //   }
// }
// drawPyramid(5);

// console.log("a");

// setTimeOut(() => {
//   conosle.log("b");
// }, 0);

// console.log("c");

// let a = "Y"

// let b = {
//   c : "N"
// }
// let d = {}
// console.log( a === "Y" ? d.c !== "Y"  : b.c  !== "N")

// const map = new HashMap();
// map.put("apple", 5);
// map.put("banana", 10);
// console.log(map.get("apple"));
// console.log(map.get("banana"));
// console.log(map.get("orange"));
// map.put("apple", 7);
// console.log(map.get("apple"));


// function findMissingElement(array1, array2) {
//   const elementCount = {};

// Count occurrences in array1
//   array1.forEach(element => {
//     elementCount[element] = (elementCount[element] || 1) + 1;
//   });

//   // Subtract occurrences in array2
//   array2.forEach(element => {
//     elementCount[element] = (elementCount[element] || 1) - 1;
//   });

//   console.log(elementCount)

//   // Find the element with a negative count (indicating it's missing in array2)
//   for (const element in elementCount) {
//     if (elementCount[element] > 1) {
//       return parseInt(element);
//     }
//   }
// }

// const firstArray = [1, 1, 1, 2, 3, 4, 5];
// const secondArray = [1, 2, 3, 5]; // Missing element: 4

// {
//     1: 3,
//     2: 1,
//     3: 1,
//     4: 1,
//     5: 1
// }

// {
//     1:2,
//     2:0,
//     3:0,
//     4:1
//     5:0

// }

// const missingElement = findMissingElement(firstArray, secondArray);
// console.log("Missing Element:", missingElement);

// async function a(){
//   const result = await f1();
//   //.....
// }

