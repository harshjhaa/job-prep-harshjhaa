//----------------------------
// var obj1 = {
//   obj2: {
//     normal: function () {
//       console.log(this);
//     },
//     arrow: () => {
//       console.log(this);
//     },
//   },
// };
// obj1.obj2.normal(); //{normal: ƒ, arrow: ƒ}
// obj1.obj2.arrow();  //Window {window: Window, self: Window, document: document, name: 'Harsh', location: Location, …}
//------
// var obj1 = {
//   normalObj: {
//     normal: function () {
//       console.log(this);
//     },
//   },
//   arrowObj: {
//     arrow: () => {
//       console.log(this);
//     },
//   },
// };
// obj1.normalObj.normal(); //calling obj
// obj1.arrowObj.arrow(); //window
//------
// var obj1 = {
//   obj2: {
//     arrow: () => {
//       console.log(this); //window
//     },
//   },
// };
// obj1.obj2.arrow();
//--------------------------

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

/**
 * When you call thisScope.fun(), the this inside the fun method is bound to the thisScope function.
 * However, when you return an inner function and invoke it (thisScope.fun()()),
 * the inner function creates its own this context.
 */

//--------------------------

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

// setTimeout(() => {
//   obj.getNameNormal(); //obj
//   obj.getNameArrow(); //window
// }, 0);

/**
 * In this case, you are passing the obj.getName function as a reference to the setTimeout function.
 * When setTimeout executes the function after the specified timeout, the context (the value of this) is not preserved.
 * Instead, it defaults to the global object (which is window in a browser environment).
 * So, when obj.getName is called inside setTimeout, this refers to the global object (window), and hence, this.fName is undefined.
 */
// setTimeout(obj.getNameNormal, 0); //window undefined
// setTimeout(obj.getNameArrow, 0); //window undefined

// setTimeout(obj.getNameNormal(), 0); //obj Harsh
// setTimeout(obj.getNameArrow(), 0); //window undefined

//----------------------------------------
