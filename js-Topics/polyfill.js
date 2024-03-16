// console.log("Polyfill");
//It is sort of a browser fallback. Suppose if the browser don't have its own bind method then we need to create of our own.

//--------------------------
//Polyfills for Call
// let name1 = {
//   fName: "Harsh",
//   lName: "Jha",
// };
// const printName = function (city, country, age) {
//   console.log(this);
//   console.log(
//     this.fName + " " + this.lName + " " + city + " " + country + " " + age
//   );
// };
// printName.call(name1, "New Delhi", "India", 26);
// Function.prototype.myCall = function (obj = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error("Not callable");
//   }
//   obj.fn = this;
//   obj.fn(...args);
// };
// printName.myCall(name1, "New Delhi", "India", 26);

//Polyfills for apply
// let name1 = {
//   fName: "Harsh",
//   lName: "Jha",
// };
// const printName = function (city, country, age) {
//   console.log(
//     this.fName + " " + this.lName + " " + city + " " + country + " " + age
//   );
// };
// // printName.apply(name1, ["New Delhi", "India", 26]);
// Function.prototype.myApply = function (obj = {}, args) {
//   if (typeof this !== "function") {
//     throw new Error("Not callable");
//   }
//   if (!Array.isArray(args)) {
//     throw new Error("TypeError: CreateListFromArrayLike called on non-object");
//   }
//   obj.fn = this;
//   obj.fn(...args);
// };
// printName.myApply(name1, ["NewDelhi", "India", 26]);

//Polyfills for Bind
// let name1 = {
//   fName: "Harsh",
//   lName: "Jha",
// };

// const printName = function (city, country, age) {
//   console.log(
//     this.fName + " " + this.lName + " " + city + " " + country + " " + age
//   );
// };

// let printMyName1 = printName.bind(name1, "New Delhi", "India");
// printMyName1(25);

// Function.prototype.myBind = function (...args) {
// if (typeof this !== "function") {
//   throw new Error("Not callable");
// }
//   //arrow function
//   const arg1 = args.slice(1);
//   return (...arg2) => {
//     this.apply(args[0], [...arg1, ...arg2]);
//   };

//   // normal function call
//   //   const self = this;
//   //   const arg1 = args.slice(1);
//   //   return function (...arg2) {
//   //     console.log("this ", this); //window
//   //     console.log("self ", self); //window
//   //     self.apply(args[0], [...arg1, ...arg2]);
//   //   };
// };

// let printMyName3 = printName.myBind(name1, "New Delhi", "India");
// printMyName3(26);

//----------------------

//Polyfill for filter and reduce -
//Filter
// const arr = [1, 2, 3, 4, 5];
// const res1 = arr.filter((ele) => ele > 2);
// console.log("filter: ", res1);
// Array.prototype.myFilter = function (cb) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i])) {
//       result.push(this[i]);
//     }
//   }
//   return result;
// };
// const filterFunction = (ele) => {
//   return ele > 2;
// };
// const res2 = arr.myFilter(filterFunction);
// console.log("myFilter: ", res2);

//Reduce
// const arr = [1, 2, 3, 4, 5];
// const res1 = arr.reduce((acc, curr) => {
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log("reduce ", res1);

// Array.prototype.myReduce = function (cb, initialVal) {
//   let acc = initialVal;
//   for (let i = 0; i < this.length; i++) {
//     acc = acc ? cb(acc, this[i]) : this[i];
//   }
//   return acc;
// };

// const res2 = arr.myReduce((acc, curr) => {
//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log("myReduce ", res2);

//----------------------

//Polyfill for Array Flat -
// const a = [1, 2, [3, [4, [5, 6, [7, 8, 9], 10], 11], 12], 13, 14];
// console.log(a.flat(4));

//recursive way
// Array.prototype.recurisveFlat = function (level = 1) {
//   if (!Array.isArray(this)) {
//     throw new Error(`${this}.flat is not a function`);
//   }
//   let result = [];
//   this.forEach((element) => {
//     if (Array.isArray(element) && level > 0) {
//       result = result.concat(element.recurisveFlat(--level));
//     } else {
//       result.push(element);
//     }
//   });
//   return result;
// };
// console.log(a.recurisveFlat(1));

//iterative way
// Array.prototype.iterativeFlat = function (depth) {
//   const result = [];
//   const stack = [...this.map((item) => [item, depth])];
//   while (stack.length > 0) {
//     const [item, depth] = stack.pop();
//     if (Array.isArray(item) && depth > 0) {
//       stack.push(...item.map((subItem) => [subItem, depth - 1]));
//     } else {
//       result.push(item);
//     }
//   }
//   return result.reverse();
// };

// console.log(
//   [1, 2, [3, [4, [5, 6, [7, 8, 9], 10], 11], 12], 13, 14].iterativeFlat(2)
// );

//----------------------

//flatten Object

// var nestedObject = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3,
//       f: {
//         g: 4,
//       },
//     },
//   },
//   h: 5,
// };

// const isObj = (val) => val !== null && typeof val === "object";
// const flatObj = (obj, prefix = "") => {
//   let result = {};
//   for (const key in obj) {
//     const val = obj[key];
//     if (isObj(val)) {
//       const res = flatObj(val, prefix + key + ".");
//       result = { ...result, ...res };
//     } else {
//       result = { ...result, [prefix + key]: val };
//     }
//   }
//   return result;
// };
// console.log(flatObj(nestedObject));
/**
 * {
  'a': 1,
  'b.c': 2,
  'b.d.e': 3,
  'b.d.f.g': 4,
  'h': 5
}
 */

//----------------------

//Polyfill for Promise.all -
// It rejects when any of the input's promises rejects, with this first rejection reason.
// const promise1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Promise 1 Resolved");
//   }, 200);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Promise 2 is resolved");
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(reject, 400, "Promise 3 is rejected");
// });
// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(reject, 300, "Promise 4 is rejected");
// });
// Promise.all([promise1, promise2])
//   // Promise.all([promise2, promise1, promise4, promise3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("err ", err); //err  Promise 4 is rejected
//   });
// Promise._all = function (promiseArr) {
//   let result = [];
//   let promiseCounter = 0;
//   return new Promise((resolve, reject) => {
//     promiseArr.forEach((promise, index) => {
//       promise
//         .then((res) => {
//           promiseCounter++;
//           result[index] = res;
//           if (promiseCounter === promiseArr.length) {
//             resolve(result);
//           }
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   });
// };
// Promise._all([promise2, promise1]).then(console.log).catch(console.log);

//-------promise.allSettled polyfill-----------
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Promise 2 is resolved");
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(reject, 400, "Promise 3 is rejected");
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(reject, 300, "Promise 4 is rejected");
// });
// const promiseArr = [promise1, promise2, promise3];
// Promise._allSettled = function (promiseArr) {
//   const result = [];
//   let counter = 0;
//   return new Promise((resolve, reject) => {
//     promiseArr.map((promise, index) => {
//       promise
//         .then((res) => {
//           result[index] = { status: "fulfilled", value: res };
//           counter++;
//           if (counter === promiseArr.length) resolve(result);
//         })
//         .catch((err) => {
//           result[index] = { status: "rejected", reason: err };
//           counter++;
//           if (counter === promiseArr.length) resolve(result);
//         });
//     });
//   });
// };
// Promise._allSettled(promiseArr).then((res) => console.log(res));

// Promise._allSettled2 = function (promiseArr) {
//   return Promise.all(
//     promiseArr.map((promise) =>
//       promise
//         .then((value) => {
//           return { status: "fulfilled", value };
//         })
//         .catch((reason) => {
//           return { status: "rejected", reason };
//         })
//     )
//   );
// };
// Promise._allSettled2(promiseArr).then((res) =>
//   console.log("_allSettled2 ", res)
// );

//-------------------------------

//Polyfill for Lodash.isEqual || comparing 2 objects in javascript | deep comparison

// const a = { a: 1, b: 2, c: { z: [2] } };
// const b = { b: 2, a: 1, c: { z: [2] } };
// // console.log(JSON.stringify(a) === JSON.stringify(b));
// function isObject(val) {
//   return val !== null && typeof val === "object";
// }
// function compareObj(o1, o2) {
//   const keyArr1 = Object.keys(o1);
//   const keyArr2 = Object.keys(o2);
//   if (keyArr1.length !== keyArr2.length) return false;
//   for (let key of keyArr1) {
//     const val1 = o1[key];
//     const val2 = o2[key];
//     const isObj = isObject(val1) && isObject(val2);
//     //we are checking if the values are primitive or not
//     if (!isObj && val1 !== val2) return false;
//     if (isObj && !compareObj(val1, val2)) return false;
//   }
//   return true;
// }
// console.log(compareObj(a, b));

//----------------------------------

//Polyfill of Deep Copy

// let a = [1, 2, 3, [4, 5]];
// let b = a;
// let b = [...a]; //shalow copy

// let b = [...a]; // spread operator only works if modification is not in nested array
// // b.push(6); // only b will get modified
// b[3].push(6); // both array will be modified

//deep copy
// let b = JSON.parse(JSON.stringify(a));
// b[3].push(6);

// console.log(a);
// console.log(b);

// let a = [1, 2, 3, [4, 5]];
// let obj1 = {
//   a1: {
//     b1: 10,
//   },
// };
// function deepCopy(val) {
//   if (["string", "number", "boolean"].includes(typeof val)) {
//     return val;
//   } else if (Array.isArray(val)) {
//     return val.map((ele) => deepCopy(ele));
//   } else if (typeof val === "object") {
//     return Object.keys(val).reduce((acc, key) => {
//       acc[key] = deepCopy(val[key]);
//       return acc;
//     }, {});
//   }
// }

//array
// let b = deepCopy(a);
// b[3].push(6);
// console.log(a);
// console.log(b);

//object
// let obj2 = deepCopy(obj1);
// obj2.a1.b1 = null;
// console.log(obj1);
// console.log(obj2);

//----------------------------------

//polifill for json.stringify function -

const test1 = { a: "hello", b: true, c: 25 };
const test2 = { foo: [1, 2, "a"], bar: { baz: true } };
const test3 = ["world", test1];
const test4 = 5;
const test5 = "test";
const test6 = false;
const test7 = ["world", false, 56];

// console.log(JSON.stringify(test1));
// console.log(JSON.stringify(test2));
// console.log(JSON.stringify(test3));
// console.log(JSON.stringify(test4));
// console.log(JSON.stringify(test5));
// console.log(JSON.stringify(test6));

// const myJsonStringify = (item) => {
//   if (typeof item === "string") {
//     return `"${item}"`;
//   } else if (typeof item === "number" || typeof item === "boolean") {
//     return `${item}`;
//   } else if (Array.isArray(item)) {
//     let res = "[";
//     for (let i = 0; i < item.length; i++) {
//       const val = item[i];
//       res = res + `${myJsonStringify(val)},`;
//     }
//     res = `${res.substring(0, res.length - 1)}]`; //removing last comma
//     return res;
//   } else {
//     let res = "{";
//     for (const key in item) {
//       const val = item[key];
//       res = res + `"${key}":${myJsonStringify(val)},`;
//     }
//     res = `${res.substring(0, res.length - 1)}]`; //removing last comma
//     return res;
//   }
// };

// console.log(myJsonStringify(test2));

//----------------------------------

//array.groupBy -
// Array.prototype.myGroupBy = function (key) {
//   return this.reduce((acc, curr) => {
//     const gKey = curr[key].toString();
//     if (gKey in acc) {
//       acc[gKey].push(curr);
//     } else {
//       acc[gKey] = [curr];
//     }
//     return acc;
//   }, {});
// };
// const gData = [
//   { done: true, createdDate: "30-11-9090" },
//   { done: false, createdDate: "30-01-9090" },
//   { done: true, createdDate: "30-12-9090" },
// ].myGroupBy("done");
// console.log(gData);

//----------------------------------

//var a=[1, 2, 3, 4]
// function fn(zero, one, ...args){
//     console.log(zero, one, args);
// }
// undefined
// fn(a)
// VM1023:2 (4) [1, 2, 3, 4] undefined []
// undefined
// fn(a, true, false)
// VM1023:2 (4) [1, 2, 3, 4] true [false]
// undefined
// fn(a, true, false, true)
// VM1023:2 (4) [1, 2, 3, 4] true (2) [false, true]
// undefined
// function fn(zero, one, ...args){
//     console.log(zero, one, ...args);
// }
// undefined
// fn(a, true, false, true)
// VM1193:2 (4) [1, 2, 3, 4] true false true
// undefined
