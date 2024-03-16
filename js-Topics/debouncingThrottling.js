// console.log("Debouncing and Throttling");

//Deboncing
// making api-call if the keyup event between 2 keys are greater that 300ms
// let counter = 0;
// const getData = () => {
//   console.log("Getting the data...", ++counter);
// };
// const debounce = function (fn, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// };
// const debounceApi = debounce(getData, 300);

// Debouncing in ReactJs -
// const [inpVal, setInpVal] = useState("");
// const handleInpChange = (event) => {
//   setInpVal(event.target.value);
// };
// useEffect(() => {
//   let timer = null;
//   (function () {
//     timer = setTimeout(async () => {
//       clearTimeout(timer);
//       const res = await fetch(`https://randomuser.me/api/?name=${inpVal}`);
//       const data = await res.json();
//       console.log(data);
//     }, 300);
//   })();
//   return () => {
//     clearTimeout(timer); //if the user click again within 300ms this will get called
//   };
// }, [inpVal]);

//Throttling
//making api-call after every 300ms
// let counter = 0;
// const getData = (args) => {
//   console.log("Getting the data...", ++counter, " ", args);
// };
// const throttle = function (fn, delay = 300) {
//   let flag = true;
//   return function (...args) {
//     if (flag) {
//       fn.apply(this, args);
//       flag = false;
//       setTimeout(() => {
//         flag = true;
//       }, delay);
//     }
//   };
// };
// const debounceApi = throttle(getData, 300);
