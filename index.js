const inp = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const list = document.querySelector("li");
const delBtn = document.querySelectorAll("delBtn");
//Displaying list-item
btn.addEventListener("click", function () {
  let val = inp.value;
  const el = document.createElement("li");
  el.innerText = val;
  ul.appendChild(el);
  inp.value = "";
  // creating delete button
  const renBtn = document.createElement("button");
  /*const deleteButton =*/ renBtn.classList.add("delBtn");
  renBtn.innerText = "Delete";
  el.appendChild(renBtn);
});
//functionality of delete button
//Event Delegation
ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  } else {
    console.log("Error deleting a listItem");
  }
});
