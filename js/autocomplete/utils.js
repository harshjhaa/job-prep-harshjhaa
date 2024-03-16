import { fruits } from "./fruits.js";

export function getFruits(text) {
  const res = fruits.filter(
    (fruit) =>
      fruit.substring(0, text.length).toLowerCase() === text.toLowerCase()
  );
  const delay = 500;
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay, res);
  });
}

export function debounce(fn, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
