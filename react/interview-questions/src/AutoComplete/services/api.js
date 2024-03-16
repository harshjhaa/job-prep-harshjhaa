import fruits from "./fruits.json";

const getFruitAPI = (text) => {
  const fruitsList = fruits.filter((fruit) => {
    return fruit.toLowerCase().includes(text.toLowerCase());
    // return fruit.toLowerCase().substring(0, text.length) === text.toLowerCase();
  });
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 100, fruitsList);
  });
};

export { getFruitAPI };
