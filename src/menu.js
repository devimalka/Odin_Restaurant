import clearPage from "./tabsLoad";

function menuLoad() {
  clearPage();
  let div = document.createElement("div");
  div.id = "contactTab";

  let h1 = document.createElement("h1");
  h1.innerHTML = "hi this is contacts";

  div.appendChild(h1);
  return div;
}

export default menuLoad;
