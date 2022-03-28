const draggablelist = document.querySelector(".draggablelist");
const check_btn = document.querySelector(".check-btn");
const Books = [
  "The Stranger",
  "In Search of Lost Time",
  "The Trial",
  "The Little Prince",
  "Man's Fate",
  "Journey to the End of the Night",
  "The Grapes of Wrath",
  "For Whom the Bell Tolls",
  "Le Grand Meaulnes",
  "Froth on the Daydream",
];

//store the list items
const listItems = [];

let dragStarIndex;

createList();
function createList() {
  [...Books]
    .map((book) => ({
      Bookname: book,
      Booknum: Math.random(),
    }))
    .sort((book1, book2) => book1.Booknum - book2.Booknum)
    .map((book) => book.Bookname)
    .forEach((book, index) => {
      const liEl = document.createElement("li");
      liEl.setAttribute("data-index", index);
      liEl.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
            <p class="book-name">${book}</p>
            <i class="fa-solid fa-arrows-spin"></i>
        </div>
        `;
      listItems.push(liEl);
      draggablelist.appendChild(liEl);
    });
  addEventListeners();
}

function addEventListeners() {
  const draggableDivs = document.querySelectorAll(".draggable");
  const draglistofLis = document.querySelectorAll(".draggablelist li");

  draggableDivs.forEach((drag) => {
    drag.addEventListener("dragstart", dragStart);
  });

  draglistofLis.forEach((item) => {
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragleave", dragLeave);
  });
}
function dragStart() {
  // console.log('start');
  dragStarIndex = this.closest("li").getAttribute("data-index");
}

function dragEnter() {
  //  console.log("enter");
  this.classList.add("over");
}
function dragOver(e) {
  //  console.log("over");
  e.preventDefault();
}
function dragDrop() {
  //  console.log("drop");
  const dragEndIndex = this.getAttribute("data-index");
  swapItems(dragStarIndex, dragEndIndex);

  this.classList.remove("over");
}
function swapItems(from, To) {
  const firstItem = listItems[from].querySelector(".draggable");
  const secondItem = listItems[To].querySelector(".draggable");

  listItems[from].appendChild(secondItem);
  listItems[To].appendChild(firstItem);
}
function dragLeave() {
  //  console.log("leave");
  this.classList.remove("over");
}

function checkOrder() {
  listItems.forEach((listItem, index) => {
    const bookname = listItem.querySelector(".draggable").innerText.trim();

    if(bookname !== Books[index]){
        listItem.classList.add('wrong')
    }
    else{
      listItem.classList.remove('wrong')
      listItem.classList.add('right')
    }
  });
}
check_btn.addEventListener("click", checkOrder);
