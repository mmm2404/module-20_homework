"use strict";
// Create a "close" button and append it to each list item
const myTaskList = document.getElementsByTagName("LI");
for (let i = 0; i < myTaskList.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myTaskList[i].appendChild(span);
}
// Click on a close button to hide the current list item
const closeButtons = document.getElementsByClassName("close");
for (let i = 0; i < closeButtons.length; i++) {
    let closeButton = closeButtons[i];
    closeButton.addEventListener("click", () => {
        const li = closeButton.parentElement;
        if (li) {
            li.style.display = "none";
        }
    });
}
;
// Add a "checked" symbol when clicking on a list item
const myList = document.querySelector('ul');
if (myList) {
    myList.addEventListener('click', function (e) {
        const theTarget = e.target;
        if (theTarget) {
            theTarget.classList.toggle('checked');
        }
    }, false);
}
// Create a new list item when clicking on the "Add" button
function newElement() {
    const newLine = document.createElement("LI");
    const input = document.getElementById("myInput");
    if (!input)
        return;
    const inputValue = input.value;
    const textNode = document.createTextNode(inputValue);
    newLine.appendChild(textNode);
    if (inputValue === '') {
        alert("You must write something!");
    }
    else {
        if (myList) {
            myList.appendChild(newLine);
        }
    }
    input.value = "";
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    newLine.appendChild(span);
    span.addEventListener("click", () => {
        const li = span.parentElement;
        if (li) {
            li.style.display = "none";
        }
    });
}
const addBtn = document.getElementById("addBtn");
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener("click", () => {
    newElement();
});
