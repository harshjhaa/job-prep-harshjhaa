// console.log("Module Patterns");
/*
// module pattern
const myPaymentModulePattern = (function () {
  //private var
  let paymentID;

  //private function
  function payment() {
    paymentID = "paymentId";
    return paymentID;
  }

  return {
    paymentModule: function () {
      return payment();
    },
  };
})();

//revealing module pattern
const myPaymentRevealingModulePattern = (function () {
  //private var
  let paymentID;

  //private function
  function payment() {
    paymentID = "paymentId";
    return paymentID;
  }

  //public function
  function doPayment() {
    return payment();
  }

  return {
    paymentModule: doPayment,
  };
})();

console.log(myPaymentRevealingModulePattern.paymentModule());


//----------

const myCounterModule = (function () {
  // Private variables
  let count = 0;

  // Private functions
  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  // Public API
  return {
    getCount: function () {
      return count;
    },
    incrementCounter: function () {
      increment();
    },
    decrementCounter: function () {
      decrement();
    },
  };
})();

// Example usage
myCounterModule.incrementCounter();
myCounterModule.incrementCounter();
myCounterModule.decrementCounter();
console.log(myCounterModule.getCount()); // Output: 1

const myRevealingCounterModule = (function () {
  // Private variables
  let count = 0;

  // Private functions
  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  // Revealing public API
  function getCount() {
    return count;
  }

  function incrementCounter() {
    increment();
  }

  function decrementCounter() {
    decrement();
  }

  // Expose only the necessary functions
  return {
    getCount: getCount,
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
  };
})();

// Example usage
myRevealingCounterModule.incrementCounter();
myRevealingCounterModule.incrementCounter();
myRevealingCounterModule.decrementCounter();
console.log(myRevealingCounterModule.getCount()); // Output: 1

*/

//-----------------------------------------------

/*
//Common JS

// counterModule.js file

// Private variables
let count = 0;

// Private functions
function increment() {
  count++;
}
function decrement() {
  count--;
}

// Expose public API
module.exports = {
  incrementCounter: function () {
    increment();
  },
  decrementCounter: function () {
    decrement();
  },
   getCount: function () {
    return count;
  }
};

*/

/*
// main.js file
const counterModule = require('./counterModule');

// Example usage
counterModule.incrementCounter();
counterModule.decrementCounter();

console.log(counterModule.getCount());
*/
