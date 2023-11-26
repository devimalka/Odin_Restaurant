import contactLoad from "./contacts";
import { contentDiv } from "./initial";
import init from "./initial";
import menuLoad from "./menu";
import createNav from "./navbar";

import "./style.css";

contentDiv.appendChild(createNav());
contentDiv.appendChild(init());

document.body.appendChild(contentDiv);


let cnttab = document.getElementById('contacts').addEventListener('click',contactLoad);
let mnutab = document.getElementById('Menu').addEventListener('click',menuLoad);
