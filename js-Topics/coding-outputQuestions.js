// Promise.resolve(1)
//   .then(
//     (value) => console.log(value * 2),
//     (value) => console.log(value * 3)
//   )
//   .then(() => {
//     throw new Error("Oh No!");
//   })
//   .catch((error) => console.log(error))
//   .finally(() => console.log(4))
//   .then(console.log)
//   .finally(() => console.log(6))
// console.log(7);
// > 7
// > 2
// > Error: Oh No!
// > 4
// > undefined
// > 6

// Promise.resolve(1)
//   .then(
//     (value) => console.log(value * 2),
//     (value) => console.log(value * 3)
//   )
//   .then(() => {
//     throw new Error("Oh No!");
//   })
//   .catch((error) => 5)
//   .finally(() => console.log(4))
//   .then(console.log)
//   .finally(() => console.log(6))
// 2
// 4
// 5
// 6

// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

// function sum(a) {
//   return function (b) {
//     if (b === undefined) {
//       return a;
//     } else {
//       return sum(a + b);
//     }
//   };
// }
// console.log(sum(1)(2)(3)());

// function sum(...a) {
//   return function (...b) {
//     const arr = [...a, ...b];
//     // console.log(arr);
//     return arr.reduce((acc, curr) => {
//       return (acc = acc + curr);
//     }, 0);
//   };
// }
// console.log(sum(1, 2, 3, 4, 5)(1, 2, 3, 4, 5)); //30

// console.log(1);
// setTimeout(() => console.log(5), 0);
// new Promise((resolve) => {
//   console.log(2);
//   resolve(3);
// })
// .then((res) => console.log(res));
// console.log(4);

// (function () {
//   let x = 10;
//   function changeX(value) {
//     value = 20;
//   }
//   changeX(x);
//   console.log(x);
// })();

// var a = 1;
// (function x() {
//   console.log(a);
//   if (a) {
//     var a = 9;
//   }
//   console.log(a);
// })();

//destructure from a nested object-
// var obj = { fName: "Harsh", address: { city: "New Delhi", country: "India" } };
// var {
//   fName,
//   address: { country },
// } = obj;
// console.log(fName, country); //Harsh India

// if obj somehow becomes null then it will generate uncaught error, fix this such that the UI doesn't break
// var obj = null;
// var { fName, address } = { ...obj };
// const { country } = { ...address };
// console.log(fName, country);

//----------------------------------------

// var obj1 = {
//   fName: "Harsh", //primitive datatype
//   address: { city: "New Delhi", country: "India", local: { hNo: "b1" } }, //non-primitive
// };
// var obj2 = obj1; //var obj2 will also be pointing to same object in the heap memory

// console.log(obj1 === obj2); //true

// obj2.address["state"] = "Delhi";

// obj2.fName = "Yash";
// console.log("obj1 ", obj1); //{fName: 'Harsh, Yash', address: {…}}
// console.log("obj2 ", obj2); //{fName: 'Harsh, Yash', address: {…}}
// console.log(obj1.fName === obj2.fName); //true

//----------------------------------------

// var obj1 = {
//   fName: "Harsh",
//   address: { city: "New Delhi", country: "India", local: { hNo: "b1" } },
//   assets: ["iphone", "apple watch", "airpods", "macbook pro"],
// };
// var obj2 = { ...obj1 }; //shalow copy is done, a new obj2 var is created & the non-primitive data from the old one is passed by reference

// console.log("obj1 ", obj1);
// console.log("obj2 ", obj2);

//-----

//for non-primitive datatypes
// console.log("var obj2 = { ...obj1 };");
// console.log("obj1 === obj2 ", obj1 === obj2);
// console.log("obj1.address === obj2.address ", obj1.address === obj2.address); // all the non primitive datatypes will give true, as they're passed by reference
// console.log(
//   "obj1.address.local === obj2.address.local ",
//   obj1.address.local === obj2.address.local
// );
// console.log("obj1.assets === obj2.assets ", obj1.assets === obj2.assets);

// obj1.address.local.hNo = "b2";
// console.log("obj1 ", obj1);
// console.log("obj2 ", obj2);

//-----

//for primitive datatypes
// console.log("var obj2 = { ...obj1 };");
// console.log("obj1.fName === obj2.fName ", obj1.fName === obj2.fName);

// obj2.fName = "Yash";
// console.log(`obj2.fName = "Yash";`);
// console.log(obj1, "Will not get modified"); //obj1 will not get modified,
// console.log(obj2, "Will only get modified"); //obj2 will only get modified,

// obj2.fName = "Harsh";
// console.log(`obj2.fName = "Harsh";`);
// console.log("obj1.fName === obj2.fName ", obj1.fName === obj2.fName);

// obj2.fName = obj2.fName + ", Yash";
// console.log(`obj2.fName = obj2.fName + ", Yash"`);
// console.log("obj1.fName === obj2.fName ", obj1.fName === obj2.fName);

//-----

/**
 * Conclusion-
 * 1. var obj2 = obj1 -
 *  a. this will create a new obj2 variable but it will be pointing to the same memory address in the heap
 *  b. obj1 === obj2 true
 *  c. any changes made in any of the object will be reflected in the other object (for both primitive and N.P. datatypes)
 *  e. obj1.fName === obj2.fName true all the time as any changes made in one will get reflected in other
 *
 * 2. var obj2 = {...obj1}
 *  a. this will create alltogether a new object in the memory
 *  b. but a shallow copy will be made in the memory from obj1, all the N.P. datatypes will get reference from the original object obj1
 *  c. any changes made in N.P. datatype of any of object will get reflected in other object
 *  d. but any changes made in the primitive datatype of any object will not get reflected in the other object
 *  e. obj1.fName === obj2.fName true only if they contain same value
 */

//----------------------------------------

//callback-hell

// function createOrder(cart, payment) {
//   //perform operation on cart and do payment
//   console.log("Creating Order...");
//   payment(function () {
//     orderSummary(function () {
//       updateWallet();
//     });
//   });
// }

// function payment(orderSummary) {
//   //perform payment and prepare order summary
//   console.log("Doing Payment...");
//   orderSummary();
// }

// function orderSummary(updateWallet) {
//   //show order summary to customer and upadte the wallet
//   console.log("Preparing Order Summary...");
//   updateWallet();
// }

// function updateWallet() {
//   //update the wallet
//   console.log("Updating Wallet...");
// }

// createOrder(["shoes", "shirt", "pants"], function () {});

//----------------------------------------

// var obj = {
//   fName: "Harsh",
//   getName() {
//     console.log(this);
//     console.log(this.fName);
//   },
// };
// console.log(obj.getName); //actual function
// obj.getName();   //harsh

//-----

// var obj = {
//   fName: "Harsh",
//   getNameNormal: function () {
//     console.log(this);
//     console.log(this.fName);
//   },
//   getNameArrow: () => {
//     console.log(this);
//     console.log(this.fName);
//   },
// };

// setTimeout(obj.getNameNormal, 0); //window
// setTimeout(obj.getNameArrow, 0); //window

// setTimeout(obj.getNameNormal(), 0); //obj- here we're invoking the function instantly, the context of this is through the object using which the function is called
// setTimeout(obj.getNameArrow(), 0); //window

//----------------------------------------

// function thisScope() {}
// Function.prototype.fun = function () {
//   console.log(this); //thisScope() {}
//   // return function () {
//   //   console.log(this); //window : when normal func is returned, the context of this is not preserved, so window
//   // };
//   return () => {
//     console.log(this); //thisScope(){} //it doesn't matter who is calling arrow function it'll get the value from it's surrounding
//   };
// };
// thisScope.fun()();

//----------------------------------------

// var a = "abc";
// console.log(a);
// a[0] = "x";
// console.log(a);

//----------------------------------------

// var p1 = {
//   fName: "Harsh",
//   getName: function () {
//     console.log(this.fName);
//   },
// };
// var p2 = {
//   fName: "Jha",
// };
// p2.__proto__ = p1;
// p2.getName();

//----------------------------------------
