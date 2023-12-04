import contactsTab from "./contacts";
import { createContainer, getContainer, mainHeader } from "./initial";
import MenuTab from "./menu";
import { navBar } from "./navbar";
import clearPage from "./tabsLoad";
import './style.css';

// appending container div to the body
document.body.appendChild(createContainer());

let container = getContainer();
container.appendChild(mainHeader());
let mheader = document.getElementById('mheader');
mheader.appendChild(navBar());


let menuclick = document.getElementById('menuTab').addEventListener('click',clearPage);
