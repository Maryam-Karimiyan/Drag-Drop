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
  "Froth on the Daydream"
];

//store the list items
const listItems=[];


let dragStarIndex;

function createList(){
    [...Books].forEach((book,index)=>{
        const liEl=document.createElement('li');
        liEl.setAttribute('data-index',index);
        liEl.innerHTML=`
        <span class="number">${index+1}</span>
        <div class draggable" draggable="true">
            <p class="book-name">${book}</p>
        </div>
        `;
        listItems.push(liEl);
        draggablelist.appendChild(liEl)
    })
}

createList()