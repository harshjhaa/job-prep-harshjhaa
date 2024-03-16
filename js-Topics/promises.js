// console.log("Promises");
/*
Only 3 states- pending, fullfilled and rejected. 
What is pormise?
Promise is an object respresenting eventual completion of an asynchronous operation.
Ex: Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: Response
*/

// const cart = ["Shoes", "Pants"];
// //creates card and calls payment with orderId
// function createOrder(cart, payment) {
//   console.log("creating order...", cart);
//   payment("12345");
// }
// //takes the orderId and proceed
// function payment(orderId) {
//   console.log("Payment...", orderId);
// }
// createOrder(cart, function (orderId) {
//   payment(orderId);
// });

// const GITHUB_API = "https://api.github.com/users/harshjhaa";
// const user = fetch(GITHUB_API);
// console.log(user);
// user
//   .then((res) => {
//     //here res is immutable, another feature of promises
//     console.log(res.body);
//   })
//   .catch(console.log);

//----------------------------

/*
//producer || creation part
function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (cart.length) {
      console.log("Creating Order...");
      setTimeout(resolve, 2000, "orderID"); //orderId
    } else {
      reject("Cart is empty");
    }
  });
}

function payment(orderId) {
  return new Promise((resolve, reject) => {
    if (orderId) {
      console.log("Doing Payment...");
      setTimeout(resolve, 1000, { orderId, paymentId: "paymentID" });
    } else {
      reject("Issue in paymentID");
    }
  });
}

function orderSummary(res) {
  console.log("Order Summary... ", res);
}

function thankYou() {
  console.log("Thank You");
}
*/

// const cart = ["Shoes", "Pants"];

//consumer || consuming part
// createOrder(cart)
//   .then((orderId) => {
//     console.log("Order ID: ", orderId);
//     return orderId;
//   })
//   .catch(console.log) //it will only catch the error above
//   .then((orderId) => {
//     return payment(orderId);
//   })
//   .then((res) => {
//     console.log("Payment ID: ", res.paymentId);
//     return res;
//   })
//   .then((res) => {
//     orderSummary(res);
//   })
//   .then(() => {
//     thankYou();
//   })
//   .catch(console.log); //generic catch

//--------------------------------

// const multiplyBy2 = (num, cb) => {
//   setTimeout(() => {
//     cb(undefined, num * 2);
//   }, 200);
// };

// const multiply = (num) => {
//   multiplyBy2(num, (err, res) => {
//     if (!err) {
//       multiplyBy2(res, (err, res) => {
//         if (!err) {
//           multiplyBy2(res, (err, res) => {
//             if (!err) {
//               multiplyBy2(res, (err, res) => {
//                 if (!err) {
//                   multiplyBy2(res, (err, res) => {
//                     if (!err) {
//                       multiplyBy2(res, (err, res) => {
//                         if (!err) {
//                           console.log(res);
//                         } else {
//                           console.log("Error in 6 call");
//                         }
//                       });
//                     } else {
//                       console.log("Error in 5 call");
//                     }
//                   });
//                 } else {
//                   console.log("Error in 4 call");
//                 }
//               });
//             } else {
//               console.log("Error in 3 call");
//             }
//           });
//         } else {
//           console.log("Error in 2 call");
//         }
//       });
//     } else {
//       console.log("Error in 1 call");
//     }
//   });
// };
// multiply(10);

//------

// const multiplyBy5 = (num, cb) => {
//   setTimeout(() => {
//     cb(num * 5);
//   }, 200);
// };

// const multiply = (num) => {
//   multiplyBy5(num, (res) => {
//     multiplyBy5(res, (res) => {
//       multiplyBy5(res, (res) => {
//         multiplyBy5(res, (res) => {
//           multiplyBy5(res, (res) => {
//             multiplyBy5(res, (res) => {
//               console.log(res);
//             });
//           });
//         });
//       });
//     });
//   });
// };

// multiply(10);

//-----

// const task1 = (cb) => {
//   setTimeout(() => {
//     console.log("Task 1 complete");
//     cb();
//   }, 500);
// };
// const task2 = (cb) => {
//   setTimeout(() => {
//     console.log("Task 2 complete");
//     cb();
//   }, 600);
// };
// const task3 = (cb) => {
//   setTimeout(() => {
//     console.log("Task 3 complete");
//     cb();
//   }, 200);
// };
// const task4 = (cb) => {
//   setTimeout(() => {
//     console.log("Task 4 complete");
//     cb();
//   }, 300);
// };
// const task5 = (cb) => {
//   setTimeout(() => {
//     console.log("Task 5 complete");
//     cb();
//   }, 800);
// };

// task1(() => {
//   task2(
//     task3(() => {
//       task4(
//         task5(() => {
//           console.log("All task complete");
//         })
//       );
//     })
//   );
// });

////////////////////

///--------resolution-----------

// const task1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 400, "Task 1 complete");
//   });
// };
// const task2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 600, "Task 2 complete");
//   });
// };
// const task3 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 200, "Task 3 complete");
//   });
// };

// task1()
//   .then((res) => {
//     console.log(res);
//     return task2();
//   })
//   .then((res) => {
//     console.log(res);
//     return task3();
//   })
//   .then((res) => {
//     console.log(res);
//   });
