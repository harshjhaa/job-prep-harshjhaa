// const observer = new MutationObserver((data) => {
//   console.warn(data);
// });
// observer.observe(document.getElementById("elem"), {
//   childList: true, //deleteDiv
//   subtree: true, //deleteInnerDiv
//   attributes: true, //updateAttrDiv
//   characterDataOldValue: true, //contenteditable
// });
// function deleteDiv() {
//   document.getElementById("elem").children[0].remove();
// }
// function deleteInnerDiv() {
//   document.getElementsByClassName("otherDiv")[0].children[0].remove();
// }
// function updateAttrDiv() {
//   document.getElementById("otherDiv").children[0].className = "hello";
// }
