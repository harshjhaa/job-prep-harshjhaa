// console.log("Arrow Function");

// function regularFunction() {
//   console.log(this); //this will point to the object from where regularFunction() is called
// }
// //Arrow functions are particularly useful in situations where you want to capture the this value from the surrounding context.
// const arrowFunction = () => {
//   console.log(this); //this will point to the object where arrowFunction() is exists. In this case window
// };
// const obj = {
//   method1: regularFunction,
//   method2: arrowFunction,
// };
// obj.method1(); //{method1: ƒ, method2: ƒ}
// obj.method2(); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//---------------------------

// let obj1 = {
//   fName: "Harsh",
//   city: "New Delhi",
// };
// obj1.getInfo = () => {
//   console.log(obj1.fName, " from ", obj1.city);
// };

// let obj2 = {
//   fName: "Harsh",
//   city: "New Delhi",
//   getInfo: () => {
//     console.log(this.fName, " from ", this.city); //this points to window
//   },
// };

// let obj3 = {
//   fName: "Harsh",
//   city: "New Delhi",
//   getInfo: function () {
//     const self = this;
//     return () => {
//       console.log(self.fName, " from ", self.city);
//     };
//   },
// };

// obj1.getInfo(); // Outputs: Harsh from New Delhi
// obj2.getInfo(); // Outputs: undefined from undefined
// obj3.getInfo()(); // Outputs: Harsh from New Delhi

//---------------------------
