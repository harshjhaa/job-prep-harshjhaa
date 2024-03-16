// console.log("Async Await");

//Async function
// async function will always return a promise
// you're not returning promise from your side then it'll take the value wrap it inside a promise and returns it.

// async function getData() {
//   // return "Promise Resolved"; //this will get wrapped inside a promise
//   return new Promise((resolve, reject) => {
//     resolve("Promise Resolved");
//   }); //this will not get wrapped as it is already an promise
// }
// const res = getData();
// res.then(console.log);

//------------------------

//async-await combo
//await can only be used inside an async function

// const promise = new Promise((resolve, reject) => {
//   resolve("Promise Resolved");
// });

// //normal funciton
// // function getData() {
// //   promise.then(console.log);
// // }
// // getData();

// //async function
// async function getData() {
//   const res = await promise;
//   console.log(res);
// }
// getData();

//-------------------------

// const promise = new Promise((resolve, reject) => {
//   resolve("Promise  Resolved");
// });
// (function getData() {
//   promise.then((res) => {
//     console.log(res);
//   });
//   console.log("Namaste");
// })();
// (async function getData() {
//   const res = await promise;
//   console.log(res);
//   console.log("Namaste");
// })();

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 20000, "Promise 1 Resolved");
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 40000, "Promise 2 Resolved");
// });
// console.log("Namaste");
// (async function getData() {
//   const res1 = await promise1; //program will wait till promise is resolved and res comes, then only proceed further
//   console.log("Namaste 1");
//   console.log(res1);

//   const res2 = await promise2; //program will wait till promise is resolved and res comes, then only proceed further
//   console.log("Namaste 2");
//   console.log(res2);
// })();
//op-
// Namaste 1    //after 20s
// Promise 1 Resolved
// Namaste 2    //after 40s
// Promise 2 Resolved

// const promise3 = new Promise((resolve, reject) => {
//   if (1) {
//     setTimeout(resolve, 1000, "Promise 3 Resolved");
//   }
//   // if (1) {
//   //   setTimeout(reject, 1000, "Promise 3 Rejected");
//   // }
// });

// const promise4 = new Promise((resolve, reject) => {
//   if (1) {
//     setTimeout(resolve, 2000, "Promise 4 Resolved");
//   }
//   //   if (1) {
//   //     setTimeout(reject, 2000, "Promise 4 Rejected");
//   //   }
// });
// (async function getData() {
//   console.log("Namaste 1");
//   const res1 = await promise3; //program will wait till promise is resolved and res comes, then only proceed further. If not resolved/reject it will keep on waiting
//   console.log(res1);
//   console.log("Namaste 2");

//   console.log("Namaste 3");
//   const res2 = await promise4; //program will wait till promise is resolved and res comes, then only proceed further
//   console.log(res2);
//   console.log("Namaste 4");
// })();

//op-
// Namaste 1
// Promise 3 Resolved
// Namaste 2
// Namaste 3
// Promise 4 Resolved
// Namaste 4

//--------

// const api_url = "https://api.github.com/users/harshjhaa";

// async function getUsersData() {
//   //   fetch(api_url)
//   //     .then((res) => res.json()) //It is a method of the Response object returned by a fetch operation.
//           //It reads the response body and parses it as JSON, returning a promise that resolves to the parsed JSON data.
//   //     .then(console.log);
//   try {
//     const res = await fetch(api_url); //Response object is returned by fetch
//     const jsonVal = await res.json();
//     console.log(jsonVal);
//   } catch (err) {
//     console.log(err);
//   }
// }
// // getUsersData().catch(console.log); //as the async fucntion retruns a promise so we can use this way to handle error as well.
// getUsersData();
