document.getElementById("outer").addEventListener(
  "click",
  function () {
    console.log("outer");
  },
  false
);
document.getElementById("middle").addEventListener(
  "click",
  function () {
    console.log("middle");
  },
  true
);
document.getElementById("inner").addEventListener(
  "click",
  function () {
    console.log("inner");
  },
  false
);
document.getElementById("inner-btn").addEventListener(
  "click",
  function () {
    console.log("inner-btn");
    console.log(this);
  },
  // () => {
  //   console.log(this);
  // },
  true
);

//Event always captures down then bubbles up. Whichever div is made true it will start capturing it first then bubbling will happen.
