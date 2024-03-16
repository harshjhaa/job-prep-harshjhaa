import { debounce, getFruits } from "./utils.js";

const inputBar = document.getElementById("inp-bar");
const suggestionBox = document.getElementsByClassName("suggestion-box");

function reset() {
  suggestionBox[0].classList.remove("suggestion-box-show");
  suggestionBox[0].setAttribute("aria-expanded", "false");
}

function renderSuggestionBox(list = []) {
  const listFragment = document.createDocumentFragment();

  list.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add("suggestion-item");
    li.setAttribute("data-key", item);
    li.setAttribute("role", "option");
    listFragment.appendChild(li);
  });

  //removing the old data
  suggestionBox[0].innerHTML = "";

  //adding new data
  suggestionBox[0].appendChild(listFragment);
  suggestionBox[0].setAttribute("aria-expanded", "true");
}

async function getSuggestions(text) {
  const res = await getFruits(text);
  if (res.length) {
    suggestionBox[0].classList.add("suggestion-box-show");
    // console.log(res);
    renderSuggestionBox(res);
  }
}

function handleInput(e) {
  const text = e.target.value;
  if (text) {
    getSuggestions(text);
  } else {
    reset();
  }
}

function handleItemSelect(e) {
  if ("key" in e.target.dataset) {
    inputBar.value = e.target.dataset.key;
    reset();
  }
}

(function () {
  if (inputBar) {
    inputBar.focus();
    inputBar.addEventListener("input", debounce(handleInput));
    suggestionBox[0].addEventListener("click", handleItemSelect);
  }
})();
