
// Create a "close" button and append it to each list item
const myTaskList: HTMLCollectionOf<Element> = document.getElementsByTagName("LI");
for (let i = 0; i < myTaskList.length; i++) {
    const span: HTMLElement = document.createElement("SPAN");
    const txt: Text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myTaskList[i].appendChild(span);
}

// Click on a close button to hide the current list item
const closeButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("close");
for (let i = 0; i < closeButtons.length; i++) {
    let closeButton: Element = closeButtons[i];
    closeButton.addEventListener("click", () => {
        const li: HTMLElement | null = closeButton.parentElement;
        if (li) {
            li.style.display = "none";
        }
    })
};

// Add a "checked" symbol when clicking on a list item
const myList: HTMLUListElement | null = document.querySelector('ul');

if (myList) {
    myList.addEventListener('click', function (e) {
        const theTarget: HTMLElement = <HTMLElement>e.target;
        if (theTarget) {
            theTarget.classList.toggle('checked');
        }
    }, false);

}

// Create a new list item when clicking on the "Add" button
function newElement() {
    const newLine: HTMLElement = document.createElement("LI");
    const input: HTMLInputElement = <HTMLInputElement>document.getElementById("myInput");
    if (!input) return;
    const inputValue = input.value;
    const textNode = document.createTextNode(inputValue);
    newLine.appendChild(textNode);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
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

const addBtn: HTMLElement | null = document.getElementById("addBtn");
addBtn?.addEventListener("click", () => {
    newElement();
});