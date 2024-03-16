//Callback are the function passed to some other function
//Callback hell and inversion of control.
// console.log("Callbacks");

// const cart = ["Shoes", "Pants"];

// function createOrder(cart, payment) {
//   //perform operation on cart
//   console.log(cart);
//   //call payment
//   payment();
// }

// function payment(orderSummary) {
//   //do payment
//   console.log("Payment");
//   //call orderSummary
//   orderSummary();
// }

// function orderSummary(updateWallet) {
//   //return order summary
//   console.log("Order Summary");
//   //call updateWallet
//   updateWallet();
// }

// function updateWallet() {
//   //perrom opertaion on wallet
//   console.log("Update Wallet");
// }

// createOrder(cart, function () {
//   payment(function () {
//     orderSummary(function () {
//       updateWallet();
//     });
//   });
// });

// Promise chaining
/*
createOrder(cart)
  .then(function(){
            return payment() //always return a promise
        }))
  .then(()=>orderSummary())
  .then(()=>pdateWallet())
  .catch(console.log);
*/
