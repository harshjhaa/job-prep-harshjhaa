//a function which takes another function as an argumnet or returns a function is known as HOF.
// function x() {
//   console.log("Callback Fun");
// }
// //y is HOF
// function y(x) {
//   x();
// }
// y();

//-----------------------------

// const radiusArr = [1, 2, 3, 4];

// //modularity
// const getArea = function (radius) {
//   return Math.PI * radius * radius;
// };
// //modularity
// const getCircumference = function (radius) {
//   return 2 * Math.PI * radius;
// };
// //reusablitiy
// const calculate = function (arr, logicFunction) {
//   //   return arr.map((radius) => logicFunction(radius));
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(logicFunction(arr[i]));
//   }
//   return result;
// };
// //We also followed DRY, used HOF
// console.log("Area ", calculate(radiusArr, getArea)); //[3.141592653589793, 12.566370614359172, 28.274333882308138, 50.26548245743669]
// console.log("Circumference ", calculate(radiusArr, getCircumference)); //[6.283185307179586, 12.566370614359172, 18.84955592153876, 25.132741228718345];

// //here we can see our calculate function is exactly behaving like map
// console.log("using map: ", radiusArr.map(getArea)); //3.141592653589793, 12.566370614359172, 28.274333882308138, 50.26548245743669]

//-------------------------------------

//polyphill of map
// Array.prototype.calculateValue = function (logicFunction) {
//   //   return arr.map((radius) => logicFunction(radius));
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(logicFunction(this[i]));
//   }
//   return result;
// };
// console.log(
//   "using calculateValue as prototype: ",
//   radiusArr.calculateValue(getArea)
// );
