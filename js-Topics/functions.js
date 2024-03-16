//function-statement or function-declarations
// a(); can be called before
// function a() {
//   console.log("a called");
// }
// a();

//function-expression: assigning functions to a variable
// b(); cannot be called berfore, TypeError: b is not a function
// var b = function () {
//   console.log("b called");
// };
// b();

//anonymous function
// function (){
// }

//named-fucntion-expression
// var c = function fun() {
//   console.log(fun); //will give the op- function fun(){console.log(fun)}
// };
// fun();   //Reference Error: fun is not defined, as fun is not defined in global scope

//First-class-functions/citizens
//The ability of treating functions as values- passed as an argument, recieved as parameter and returned as well.

//Arrow-functions ES-6
// const fun = () => {};

//callback-fucntions : A function passed inside another function, that can be executed right away or later.
// (function attachEventListner() {
//   let count = 0;
//   const btn = document.getElementById("btn");
//   function clickEvent() {
//     console.log("clicked times: ", ++count);
//   }
//   btn.addEventListener("click", clickEvent);
//   setTimeout(() => {
//     btn.removeEventListener("click", clickEvent);
//   }, 5000);
// })();


//method chaining-
// var a = [1, [2, 3, [4, 5, 6], 7, 8, 9], 10];
// var res = a
//   .flat(Infinity)
//   .map((ele) => ele * 3)
//   .filter((ele) => ele % 2 == 0);
// console.log(res);