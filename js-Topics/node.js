/////////////////////////
const fs = require("fs");
const https = require("https");

// https.request("https://www.google.com", (res) => {
//   res.on("data", () => {
//     console.log("https-1");
//   });
//   res.on("end", () => {
//     console.log("https-2");
//   });
// });

// fs.readFile(__filename, () => {
//   console.log("readFile");
// });
// setImmediate(() => {
//   console.log("setImmediate 2");
//   setTimeout(() => {
//     console.log("setTimeout");
//   }, 0);
// });

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// setImmediate(() => {
//   console.log("setImmediate 3");
// });

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// setImmediate(() => {
//   console.log("setImmediate 1");
// });

// for (let i = 0; i <= 2000000000; i++) {}
