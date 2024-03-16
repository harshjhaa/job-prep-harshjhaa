const debounce = (fn, delay = 300) => {
  let timer;
  // const self = this; //if arrow function
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

export { debounce };
