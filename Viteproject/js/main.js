import "../style.css";
import {DOMselectors} from './dom'
import { cards } from "./cards";

DOMselectors.all.AddEventListener("click",function() {
    DOMselectors.box.innerHTML = "";
    inserts (cards);
});

//DOMselectors.form.addEventListener("click", function () {


//change theme

document.querySelector("#changer-button").addEventListener("click", function() {
  if(document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
  else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

//display cards
function insertCards() {
  cards.forEach((card) => DOMselectors.menu.insertAdjacentHTML("beforeend", 
  `<div class="card" id="all">
  <h2 class="name">${card.name}</h2>
  <img src="${card.image}" alt="${card.name}" class="image">
  <h3 class="text">${card.type}</h3>
</div>`
)
);
}
DOMselectors.All.addEventListener("click", function () {
  DOMselectors.menu.innerHTML = ' ';
  insertCards();
});
