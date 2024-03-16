export const debounce = (fn, delay = 300) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

export const generatePopulationIcons = (population) => {
  const icons = [];
  const maxPopulation = 2000000000;
  const maxIcon = 20;
  const minIcon = 1;

  const percentage = (population / maxPopulation) * 100;

  const iconNumber =
    Math.ceil((percentage / 100) * (maxIcon - minIcon)) + minIcon;

  const n = iconNumber < 20 ? iconNumber : 20;

  for (let i = 0; i < n; i++) {
    icons.push(`\u{1F468}`);
  }

  return population !== "unknown" ? icons : null;
};
