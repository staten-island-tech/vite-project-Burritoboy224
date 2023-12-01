import "../style.css";
import {DOMselectors} from './dom'
import {cards} from "./cards";


//display cards
function insertCard(cards) {
  document.querySelector(".cards").insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h2 class = "text">${cards.name}</h2>
      <img src=${cards.image} alt="" class="card-img">
      <h2 class = "info"> type: ${cards.type} <br> region: ${cards.region}</h2>
    </div>`
  );
}
DOMselectors.all.addEventListener("click", function () {
  DOMselectors.cards.innerHTML = '';
  insertCard();
});


  // DOMselectors.form.addEventListener("click", function () {
  //   DOMselectors.card.innerHTML = "";
  //   const regions = cards.filter((regions) => regions.region.includes("Sinnoh"));
  //   inserts(regions);
  // });

  // DOMselectors.form.addEventListener("click", function () {
  //   DOMselectors.card.innerHTML = "";
  //   const regions = cards.filter((regions) => regions.region.includes("Kanto"));
  //   inserts(regions);
  // });

  // DOMselectors.form.addEventListener("click", function () {
  //   DOMselectors.card.innerHTML = "";
  //   const regions = cards.filter((regions) => regions.region.includes("Hoenn"));
  //   inserts(regions);
  // });

  // DOMselectors.form.addEventListener("click", function () {
  //   DOMselectors.card.innerHTML = "";
  //   const regions = cards.filter((regions) => regions.region.includes("Unova"));
  //   inserts(regions);
  // });

  // DOMselectors.form.addEventListener("click", function () {
  //   DOMselectors.card.innerHTML = "";
  //   const regions = cards.filter((regions) => regions.region.includes("Kalos"));
  //   inserts(regions);
  // });

  // DOMselectors.form.addEventListener("click", function () {
  //   DOMselectors.card.innerHTML = "";
  //   const regions = cards.filter((regions) => regions.region.includes("Alola"));
  //   inserts(regions);
  // });

//change theme

// document.querySelector("#changer-button").addEventListener("click", function() {
//   if(document.body.classList.contains("light")) {
//     document.body.classList.add("dark");
//     document.body.classList.remove("light");
//   }
//   else {
//     document.body.classList.add("light");
//     document.body.classList.remove("dark");
//   }
// });

