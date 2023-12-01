import "../style.css";
import {DOMselectors} from './dom'
import { cards } from "./cards";





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

//display cards
function displayCard(cardswhat) {
  DOMselectors.cards.insertAdjacentHTML("beforeend",
  `<div class="cardsz" id="everyCard">
  <img src="${cards.image}" alt="${cards.name}" class="image">
  <h4 class="card-title">${cards.name}</h4>
  <h4 class="card-title">${cards.type}</h4>
  <h4 class="card-title">${cards.region}</h4>
  </div>
  ` )
};
