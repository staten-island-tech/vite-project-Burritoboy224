
import { cards } from "./cards";
import { DOMSelectors } from "./dom";

 
//Prints out the information from array
function display() {
  cards.forEach((pokemon) => DOMSelectors.cards.insertAdjacentHTML("beforeend", 
  `<div class="card" id="all">
  <h2 class = "text">${pokemon.name}</h2>
  <img src=${pokemon.image} alt="" class="card-img">
  <h2 class = "info"> type: ${pokemon.type}</h2>
</div>
  `)
  );
}
//finds the correct region and filter it
function SinnohRegion() {
  const find = cards.filter((pokemon) => pokemon.region.includes("Sinnoh"));
  find.forEach((pokemon) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
  `<div class="card" id="Sinnoh">
  <h2 class = "text">${pokemon.name}</h2>
  <img src=${pokemon.image} alt="" class="card-img">
  <h2 class = "info">${pokemon.type}</h2>
</div>
  `)
  );
}

function UnovaRegion() {
  const find = cards.filter((pokemon) => pokemon.region.includes("Unova"));
  find.forEach((pokemon) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
  `<div class="card" id="Unova">
  <h2 class = "text">${pokemon.name}</h2>
  <img src=${pokemon.image} alt="" class="card-img">
  <h2 class = "info">${pokemon.type}</h2>
</div>
  `)
  );
}

function KantoRegion() {
  const find = cards.filter((pokemon) => pokemon.region.includes("Kanto"));
  find.forEach((pokemon) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
  `<div class="card" id="Kanto">
  <h2 class = "text">${pokemon.name}</h2>
  <img src=${pokemon.image} alt="" class="card-img">
  <h2 class = "info">${pokemon.type}</h2>
</div>
  `)
  );
}

function HoennRegion() {
  const find = cards.filter((pokemon) => pokemon.region.includes("Hoenn"));
  find.forEach((pokemon) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
  `<div class="card" id="Hoenn">
  <h2 class = "text">${pokemon.name}</h2>
  <img src=${pokemon.image} alt="" class="card-img">
  <h2 class = "info">${pokemon.type}</h2>
</div>
  `)
  );
}

function KalosRegion() {
  const find = cards.filter((pokemon) => pokemon.region.includes("Kalos"));
  find.forEach((pokemon) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
  `<div class="card" id="Kalos">
  <h2 class = "text">${pokemon.name}</h2>
  <img src=${pokemon.image} alt="" class="card-img">
  <h2 class = "info">${pokemon.type}</h2>
</div>
  `)
  );
}

function AlolaRegion() {
  const find = cards.filter((pokemon) => pokemon.region.includes("Alola"));
  find.forEach((pokemon) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
  `<div class="card" id="Alola">
  <h2 class = "text">${pokemon.name}</h2>
  <img src=${pokemon.image} alt="" class="card-img">
  <h2 class = "info">${pokemon.type}</h2>
</div>
  `)
  );
}
//reset or clear fields
DOMSelectors.all.addEventListener("click", function () {
  DOMSelectors.cards.innerHTML = '';
  display();
});

DOMSelectors.Sinnoh.addEventListener("click", function () {
  DOMSelectors.cards.innerHTML = '';
  SinnohRegion();
});

DOMSelectors.Unova.addEventListener("click", function () {
  DOMSelectors.cards.innerHTML = '';
  UnovaRegion();
});

DOMSelectors.Kanto.addEventListener("click", function () {
  DOMSelectors.cards.innerHTML = '';
  KantoRegion();
});

DOMSelectors.Hoenn.addEventListener("click", function () {
  DOMSelectors.cards.innerHTML = '';
  HoennRegion();
});

DOMSelectors.Kalos.addEventListener("click", function () {
  DOMSelectors.cards.innerHTML = '';
  KalosRegion();
});

DOMSelectors.Alola.addEventListener("click", function () {
  DOMSelectors.cards.innerHTML = '';
  AlolaRegion();
});


display(); 