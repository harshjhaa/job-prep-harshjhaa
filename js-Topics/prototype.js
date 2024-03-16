// console.log("Prototypes");

//prototype chaining
// var a = [];
// a.__proto__; //it will point to Array.prototype
// Array.prototype; //[constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
// a.__proto__.__proto__; //it will point to the prototype of Array.prototype, i.e. to Object.prototype
// Object.prototype    //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
//a.__proto__.__proto__.__proto__ //it will point to the prototype of Object.prototype but prototype of Object.prototype = null. Therfor o/p is null
//Object.prototype.__proto__    //null

// let obj1 = {
//   name: "Harsh",
//   city: "New Delhi",
//   getInfo: function () {
//     console.log(this.name, " from ", this.city);
//   },
// };
// let obj2 = {
//   name: "Jha",
// };
// obj2.__proto__ = obj1;
// console.log(obj2.getInfo()); //Jha from  New Delhi

// let a = {}; //a have the properties of Object.prototype
// let b = Object.create(null); //b will not have the properties of Object.prototype

//---------------------------
//here we are attaching functions to the prototype methodods
// Array.prototype.findDouble = function () {
//   let res = [];
//   console.log("this ", this);
//   for (let i = 0; i < this.length; i++) {
//     res.push(this[i] * 2);
//   }
//   return res;
// };
// const a = [1, 2, 3, 4, 5];
// console.log(a.findDouble()); //[2, 4, 6, 8, 10]

//This is how we can add properties to the objects
// Function.prototype.myBind = function () {
//   console.log("myBind function");
// };
// function fun() {}
// fun.myBind(); //myBind function
// fun.__proto__.myBind(); //myBind function

//----------------------------
// var obj1 = {};
// var obj2 = {};
// obj2.__proto__ = obj1;
// console.log(obj2.__proto__);
//-----
// var obj1 = Object.create({});
// console.log(obj1.__proto__);
// var obj2 = {}
// console.log(obj2.__proto__);

//----------------------------

//Call apply bind polyfills-

// var obj = {
//   fName: "Harsh",
// };
// function getUserDetails(lName, state) {
//   console.log(this.fName + lName + state);
// }

// getUserDetails.call(obj, "Jha", "Delhi");
// Function.prototype.myCall = function (obj, ...args) {
//   obj["fn"] = this;
//   console.log(args); // ['Jha', 'Delhi']
//   console.log(...args); //Jha Delhi
//   obj.fn(...args);
// };
// getUserDetails.myCall(obj, "Jha", "Delhi");

// getUserDetails.apply(obj, ["Jha", "Delhi"]);
// Function.prototype.myApply = function (obj, args) {
//   obj["fn"] = this;
//   obj.fn(...args);
// };
// getUserDetails.myApply(obj, ["Jha", "Delhi"]);

// var user = getUserDetails.bind(obj, "Jha", "Delhi");
// user();
// Function.prototype.myBind = function (obj, ...args) {
//   return () => {
//     this.apply(obj, args);
//   };
// };
// var user = getUserDetails.myBind(obj, "Jha", "Delhi");
// user();
