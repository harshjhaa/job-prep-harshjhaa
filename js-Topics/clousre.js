// var a = 10;
// console.log(a);

//clousers
// var a = 10;
// function x() {
//   var b = 20;
//   function y() {
//     var c = 30;
//     function z() {
//       // debugger;
//       console.log(a);
//       console.log(b);
//       console.log(c);
//     }
//     z();
//   }
//   y();
// }
// x();

// function x(c) {
//   var a = 20;
//   function y() {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   }
//   a = 10;
//   let b = 30;
//   // debugger;
//   return y;
// }
// x(40)();
// var z = x();
// z();

//currying
// function x(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         console.log(a + b + c + d); //local->d:40 closure->c:30 closure->b:20 closure(x)->a:10
//       };
//     };
//   };
// }
// x(10)(20)(30)(40);

//once function
// function once(fun, val) {
//   let hasRun = false;
//   return function () {
//     if (!hasRun) {
//       fun(val);
//       hasRun = true;
//     }
//   };
// }
// const runOnce = once(function (val) {
//   console.log(`Will run only ${val} time`);
// }, 1);
// runOnce(); //give o/p
// runOnce(); //not give o/p

// function fun(f) {
//   let hasRun = false;
//   return function () {
//     if (!hasRun) {
//       f();
//       hasRun = true;
//     }
//   };
// }
// const runOnce = fun(() => {
//   console.log("Only run 1 time");
// });
// runOnce();
// runOnce();

// Module Pattern-
// const mModule = (function () {
//   const _arr = [];
//   function _privateFun() {
//     console.log("Item pushed, arr: ", _arr);
//   }
//   return {
//     publicFun: function (val) {
//       _arr.push(val);
//       _privateFun();
//     },
//   };
// })();

//Revealing Module Pattern-
// const rModule = (function () {
//   const _arr = [];
//   function _privateFun() {
//     console.log("Item pushed, arr: ", _arr);
//   }
//   function publicFun(val) {
//     _arr.push(val);
//     _privateFun();
//   }
//   return {
//     publicFun: publicFun,
//   };
// })();

//CommonJS-Pattern
/*
const dependencyModule = require("dependencyModule");
function fun() {
  //...code
}
// Export public interface
module.exports = {
  publicMethod: fun,
};
*/

//memoize in JS
// function memoize(fun) {
//   const obj = {};
//   return function (...args) {
//     console.log(obj);
//     const key = JSON.stringify(args);
//     if (!(key in obj)) {
//       console.log("Calculated");
//       const res = fun(args);
//       obj[key] = res;
//       return res;
//     }
//     console.log("Cached");
//     return obj[key];
//   };
// }
// function expensiveOp(n) {
//   return n * 2;
// }
// const memoizedExpensiveOp = memoize(expensiveOp);
// console.log("memoizedExpensiveOp ", memoizedExpensiveOp(5));
// console.log("memoizedExpensiveOp ", memoizedExpensiveOp(10));

// function memoize(fun) {
//   const memoizeObj = {};
//   return function (...args) {
//     console.log("memoizeObj ", memoizeObj);
//     const key = JSON.stringify(args);
//     if (!(key in memoizeObj)) {
//       const result = fun(...args);
//       memoizeObj[key] = result;
//       return result;
//     }
//     return memoizeObj[key];
//   };
// }
// function sum(a, b) {
//   return a + b;
// }
// const result = memoize(sum);
// console.log(result(10, 20));
// console.log(result(20, 20));

//setTimeoutLoopQuestion
// (function fun() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// })();
// (function fun() {
//   for (var i = 1; i <= 5; i++) {
//     (function close(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     })(i);
//   }
// })();

//dataHiding
// function counter() {
//   let count = 0;
//   function incrementCount() {
//     count++;
//     console.log(count);
//   }
//   function decrementCount() {
//     count--;
//     console.log(count);
//   }
//   return {
//     increment: incrementCount,
//     decrement: decrementCount,
//   };
// }
// const count = counter();

//constructor function
// function Counter() {
//   let count = 0;
//   this.increment = function () {
//     count++;
//     console.log(count);
//   };
//   this.decrement = function () {
//     count--;
//     console.log(count);
//   };
// }
// const count = new Counter();

//garbage-collection in clouser
// (function fun() {
//   let a = 10,
//     b = 20; //b will not be stored in the closure, in the scope
//   return function () {
//     console.log(a);
//   };
// })()();
