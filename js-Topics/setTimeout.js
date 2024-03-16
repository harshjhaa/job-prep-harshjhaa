// console.log("Start");

// setTimeout(() => {
//   console.log("Finished");
// }, 5000);

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 100);
// });

// let startTime = new Date().getTime();
// let endTime = startTime;
// while (endTime <= startTime + 10000) {
//   endTime = new Date().getTime();
// }
// console.log("End");

// 0 3
// setTimeout(() => {
//   console.log("3");
// }, 3);
// setTimeout(() => {
//   console.log("0");
// }, 0);

// 0 -1
// setTimeout(() => {
//   console.log("0");
// }, 0);
// setTimeout(() => {
//   console.log("-1");
// }, -1);

// -1 0
// setTimeout(() => {
//   console.log("-1");
// }, -1);
// setTimeout(() => {
//   console.log("0");
// }, 0);

//-1 -5 1
// setTimeout(() => {
//   console.log("-1");
// }, -1);
// setTimeout(() => {
//   console.log("-5");
// }, -5);
// setTimeout(() => {
//   console.log("1");
// }, 1);

//up down
// setTimeout(() => {
//   console.log("up");
// }, 0);
// setTimeout(() => {
//   console.log("down");
// }, 0);

//down up
// setTimeout(() => {
//   console.log("down");
// }, 0);
// setTimeout(() => {
//   console.log("up");
// }, 0);
