import contactsTab from "./contacts";
import MenuTab from "./menu";

// navigation bar div
function navBar(){
  let navBarDiv = document.createElement('div');
  navBarDiv.id = 'navbardiv';

  navBarDiv.appendChild(MenuTab());
  navBarDiv.appendChild(contactsTab());
  return navBarDiv;
}

export {navBar};