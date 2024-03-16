// console.log("Call Apply Bind");

// const name1 = {
//   fName: "Harsh",
//   lName: "Jha",
// };

// const name2 = {
//   fName: "Narendra",
//   lName: "Modi",
// };

// const getName = function (city, country) {
//   console.log(this.fName + " " + this.lName + " " + city + " " + country);
// };

//args are passed comma saperated
// getName.call(name1, "New Delhi");
// getName.call(name2, "Gujrat", "India");

//args are passed as array list
// getName.apply(name1, ["New Delhi"]);
// getName.apply(name2, ["Gujrat", "India"]);

//we get a reference to the getName function which can be invoked later, pass args comma saperated
// const getFullName = getName.bind(name2, "Gujrat", "India");
// getFullName();
