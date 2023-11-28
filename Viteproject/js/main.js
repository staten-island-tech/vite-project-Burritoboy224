import "../style.css";
import {DOMselectors} from './dom'
import { cards } from "./cards";

DOMselectors.all.AddEventListener("click",function() {
    DOMselectors.box.innerHTML = "";
    inserts (cards);
});

DOMselectors.form.addEventListener("click", function () {
    DOMselectors.menu.innerHTML = "";
    const regions = cards.filter((regions) => regions.region.includes("Sinnoh"));
    inserts(regions);
  });

  DOMselectors.form.addEventListener("click", function () {
    DOMselectors.menu.innerHTML = "";
    const regions = cards.filter((regions) => regions.region.includes("Kanto"));
    inserts(regions);
  });

  DOMselectors.form.addEventListener("click", function () {
    DOMselectors.menu.innerHTML = "";
    const regions = cards.filter((regions) => regions.region.includes("Hoenn"));
    inserts(regions);
  });

  DOMselectors.form.addEventListener("click", function () {
    DOMselectors.menu.innerHTML = "";
    const regions = cards.filter((regions) => regions.region.includes("Unova"));
    inserts(regions);
  });

  DOMselectors.form.addEventListener("click", function () {
    DOMselectors.menu.innerHTML = "";
    const regions = cards.filter((regions) => regions.region.includes("Kalos"));
    inserts(regions);
  });

  DOMselectors.form.addEventListener("click", function () {
    DOMselectors.menu.innerHTML = "";
    const includesRegions = cards.filter((regions) => regions.region.includes("Alola"));
    inserts(regions);
  });



