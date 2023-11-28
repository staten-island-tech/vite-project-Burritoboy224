import "../style.css";
import {DOMselectors} from './dom'
import { cards } from "./cards";

DOMselectors.all.AddEventListener("click",function() {
    DOMselectors.box.innerHTML = "";
    inserts (cards);
});

DOMselectors.Sinnoh.addEventListener("click", function () {
    DOMselectors.menu.innerHTML = "";
    const regions = cards.filter((region) => region.type.includes("Sinnoh"));
    inserts(regions);
  });

  DOMselectors.Sinnoh.addEventListener("click", function () {
    DOMselectors.menu.innerHTML = "";
    const regions = cards.filter((region) => region.type.includes("Kanto"));
    inserts(regions);
  });

  DOMselectors.Sinnoh.addEventListener("click", function () {
    DOMselectors.menu.innerHTML = "";
    const regions = cards.filter((region) => region.type.includes("Hoenn"));
    inserts(regions);
  });

  DOMselectors.Sinnoh.addEventListener("click", function () {
    DOMselectors.menu.innerHTML = "";
    const regions = cards.filter((region) => region.type.includes("Unova"));
    inserts(regions);
  });

  DOMselectors.Sinnoh.addEventListener("click", function () {
    DOMselectors.menu.innerHTML = "";
    const regions = cards.filter((region) => region.type.includes("Kalos"));
    inserts(regions);
  });

  DOMselectors.Sinnoh.addEventListener("click", function () {
    DOMselectors.menu.innerHTML = "";
    const regions = cards.filter((region) => region.type.includes("Alola"));
    inserts(regions);
  });



