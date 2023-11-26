function createNav() {
  let navdiv = document.createElement("div");
  navdiv.id = "navdiv";

  navdiv.appendChild(createTab("contacts"));
  navdiv.appendChild(createTab("Menu"));

  return navdiv;
}

function createTab(tabname) {
  let tab = document.createElement("div");
  tab.id = tabname;

  let header = document.createElement("h2");
  header.innerHTML = tabname;

  tab.appendChild(header);

  return tab;
}

export default createNav;
