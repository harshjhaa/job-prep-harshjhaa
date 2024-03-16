//Polifill -

//Call-
// let obj = {
//   fName: "Harsh",
//   lName: "Jha",
// };
// function getUserData(...args) {
//   const [city, country] = args;
//   console.log(this.fName, this.lName, city, country);
// }
// Function.prototype.myCall = function (obj, ...args) {
//   obj.fn = this;
//   obj.fn(...args);
// };
// getUserData.myCall(obj, "New Delhi", "India");

//apply
// let obj = {
//   fName: "Harsh",
//   lName: "Jha",
// };
// function getUserData(args) {
//   const [city, country] = args;
//   console.log(this.fName, this.lName, city, country);
// }
// Function.prototype.myApply = function (obj, args) {
//   obj.fn = this;
//   obj.fn(args);
// };
// getUserData.myApply(obj, ["New Delhi", "India"]);

//bind
// let obj = {
//   fName: "Harsh",
//   lName: "Jha",
// };
// function getUserData(...args) {
//   const [city, country, age] = args;
//   console.log(this.fName, this.lName, city, country, age);
// }
// Function.prototype.myBind = function (obj, ...args1) {
//   const self = this;
//   return function (...args2) {
//     // console.log(args1); //['New Delhi', 'India']
//     // console.log(...args1); //New Delhi India
//     self.apply(obj, [...args1, ...args2]);
//   };
// };
// const fn = getUserData.myBind(obj, "New Delhi", "India");
// fn(25);

//-------------------------------

//Array.flat
// Array.prototype.myFlat = function (level = 1) {
//   let result = [];
//   this.forEach((item) => {
//     if (Array.isArray(item) && level > 0) {
//       result = result.concat(item.myFlat(--level));
//     } else {
//       result.push(item);
//     }
//   });
//   return result;
// };
// const arr = [1, 2, 3, [4, 5, [6, 7, 8]]];
// console.log(arr.myFlat(Infinity));

//-------------------------------

// Promise.all
// Promise.myAll = function (promiseArr) {
//   return new Promise((resolve, reject) => {
//     const result = [];
//     let promiseCounter = 0;
//     promiseArr.forEach((promise, index) => {
//       promise
//         .then((res) => {
//           result[index] = res;
//           promiseCounter++;
//           if (promiseCounter == promiseArr.length) {
//             resolve(result);
//           }
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   });
// };
// Promise.myAll([
//   new Promise((res, rej) => {
//     res("Promise 1 Resolved");
//   }),
//   new Promise((res, rej) => {
//     res("Promise 2 Resolved");
//   }),
//   new Promise((res, rej) => {
//     // res("Promise 3 Resolved");
//     rej("Promise 3 Rejected");
//   }),
// ])
//   .then(console.log)
//   .catch(console.log);

//-------------------------------

//Promise.allSetelled
// function get(promiseStatus, data, promiseCounter, promiseArrLength) {
//   return {
//     obj: {
//       status: promiseStatus,
//       [promiseStatus == "fulfilled" ? "value" : "reason"]: data,
//     },
//     counter: ++promiseCounter,
//     isCompleted: promiseCounter === promiseArrLength,
//   };
// }
// Promise.myAllSettled = function (promiseArr) {
//   return new Promise((resolve, reject) => {
//     const result = [];
//     let promiseCounter = 0;
//     promiseArr.forEach((promise, index) => {
//       promise
//         .then((res) => {
//           //   result[index] = { status: "fulfilled", value: res };
//           //   promiseCounter++;
//           //   promiseCounter === promiseArr.length && resolve(result);
//           const { obj, counter, isCompleted } = get(
//             "fulfilled",
//             res,
//             promiseCounter,
//             promiseArr.length
//           );
//           result[index] = obj;
//           promiseCounter = counter;
//           isCompleted && resolve(result);
//         })
//         .catch((err) => {
//           result[index] = { status: "rejected", reason: err };
//           promiseCounter++;
//           promiseCounter === promiseArr.length && resolve(result);
//         });
//     });
//   });
// };
// Promise.myAllSettled([
//   new Promise((res, rej) => {
//     res("Promise 1 Resolved");
//   }),
//   new Promise((res, rej) => {
//     res("Promise 2 Resolved");
//   }),
//   new Promise((res, rej) => {
//     // res("Promise 3 Resolved");
//     rej("Promise 3 Rejected");
//   }),
// ])
//   .then(console.log)
//   .catch(console.log);

//-------------------------------

//Promise.race
// Promise.myRace = function (promiseArr) {
//   return new Promise((resolve, reject) => {
//     promiseArr.forEach((promise) => {
//       promise
//         .then((res) => {
//           resolve(res);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   });
// };
// Promise.myRace([
//   new Promise((res, rej) => {
//     // res("Promise 1 Resolved");
//     setTimeout(res, 200, "Promise 1 Resolved");
//   }),
//   new Promise((res, rej) => {
//     // res("Promise 2 Resolved");
//     setTimeout(res, 100, "Promise 2 Resolved");
//   }),
//   new Promise((res, rej) => {
//     // rej("Promise 3 Rejected");
//     setTimeout(res, 50, "Promise 3 Rejected");
//   }),
// ])
//   .then(console.log)
//   .catch(console.log);

//-------------------------------

//Promise.any
// Promise.myAny = function (promiseArr) {
//   return new Promise((resolve, reject) => {
//     promiseArr.forEach((promise, index) => {
//       const errors = [];
//       promise
//         .then((res) => {
//           resolve(res);
//         })
//         .catch((err) => {
//           errors[index] = err;
//           if (errors.length === promiseArr.length) {
//             reject(new AggregateError(errors, "All promises were rejected"));
//           }
//         });
//     });
//   });
// };
// Promise.myAny([
//   new Promise((res, rej) => {
//     setTimeout(rej, 50, "P1 Rejceted");
//   }),
//   new Promise((res, rej) => {
//     setTimeout(res, 100, "P2 Resolved");
//   }),
//   new Promise((res, rej) => {
//     setTimeout(rej, 200, "P3 Rejceted");
//   }),
// ])
//   .then(console.log)
//   .catch(console.log);

//-------------------------------

//comparing 2 OBJECTS
// const a = { a: 1, b: 2, c: { z: [2, 4] } };
// const b = { b: 2, a: 1, c: { z: [2, 4] } };
// const isObject = (val) => val !== null && typeof val === "object";
// const isEqual = function (a, b) {
//   aKey = Object.keys(a);
//   bKey = Object.keys(b);
//   if (aKey.length !== bKey.length) return false;
//   for (key in a) {
//     aVal = a[key];
//     bVal = b[key];
//     const isObj = isObject(aVal) && isObject(bVal);
//     if (!isObj && aVal !== bVal) return false;
//     if (isObj && !isEqual(aVal, bVal)) return false;
//   }
//   return true;
// };
// console.log(isEqual(a, b));

//-------------------------------

//Deep Copy
// let obj = {
//   a: "hi",
//   b: {
//     c: 10,
//   },
//   d: [1, "hi", true],
// };
// let a = [1, "hi", true, [4, 5]];
// const deepCopy = (item) => {
//   if (["string", "number", "boolean"].includes(typeof item)) {
//     return item;
//   } else if (Array.isArray(item)) {
//     return item.map((ele) => deepCopy(ele));
//   } else if (typeof item === "object") {
//     return Object.keys(item).reduce((acc, key) => {
//       acc[key] = deepCopy(item[key]);
//       return acc;
//     }, {});
//   }
// };
// let o = deepCopy(obj);
// console.log(o);

//-------------------------------

// function checkPallindrome(str) {
//   const newStr = str
//     .toLowerCase()
//     .split(/[,\s]/)
//     .join("");
//   console.log(newStr);
//   if (newStr.length === 1) return true;
//   if (newStr.length === 2) return newStr[0] === newStr[1];
//   if (newStr[0] === newStr.slice(-1))
//     return checkPallindrome(newStr.slice(1, -1));
//   return false;
// }
// console.log(checkPallindrome("A man, a plan, a canal, Panama"));

//-------------------------------

// throttling -
// const throttle = (fn, delay = 5000) => {
//   let hasRun = false;
//   return function (...args) {
//     if (!hasRun) {
//       fn.apply(this, args);
//       hasRun = true;
//       setTimeout(() => {
//         hasRun = false;
//       }, delay);
//     }
//   };
// };

//-------------------------------

//method chaining-
// var a = [1, [2, 3, [4, 5, 6], 7, 8, 9], 10];
// var res = a
//   .flat(Infinity)
//   .map((ele) => ele * 3)
//   .filter((ele) => ele % 2 == 0);
// console.log(res);

//-------------------------------

//constructor function -
// function Counter(initialVal = 0) {
//   this.value = initialVal;

//   this.increment = () => {
//     this.value++;
//   };

//   this.decrement = () => {
//     this.value--;
//   };

//   this.getValue = () => {
//     return this.value;
//   };
// }
// const counter1 = new Counter();

// counter1.increment();
// counter1.increment();
// counter1.increment();
// console.log(counter1.getValue());

// const counter2 = new Counter(5);
// counter2.increment();
// counter2.increment();
// counter2.increment();
// console.log(counter2.getValue());

//-------------------------------
