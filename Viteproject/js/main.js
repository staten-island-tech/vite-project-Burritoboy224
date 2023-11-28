import "../style.css";
import {DOMselectors} from './dom'
import { cards } from "./cards";

DOMselectors.all.AddEventListener("click",function() {
    DOMselectors.box.innerHTML = "";
    inserts (cards);
});


