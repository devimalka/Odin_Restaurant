import clearPage from "./tabsLoad";

function MenuTab(){
  let tab = document.createElement('div');
  tab.id = 'menuTab';

  let tabheader = document.createElement('h2');
  tabheader.innerHTML = 'Our Menu';

  tab.appendChild(tabheader);
  tab.addEventListener('click',loadapp);
  return tab;
}



function loadapp(items){
  clearPage();
  let tab  = document.getElementById('content');
  tab.appendChild(createMenuItems(10));
}

// create menu items
function createMenuItems(n){
  let list = document.createElement('ul')
  for(let i = 0 ; i<n; i++){
    let item = document.createElement('li');
    item.innerHTML = "Item " + i;
    list.appendChild(item);
  }

  return list;
}

export default MenuTab;