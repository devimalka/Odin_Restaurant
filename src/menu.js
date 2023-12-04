function MenuTab(){
  let tab = document.createElement('div');
  tab.id = 'menuTab';

  let tabheader = document.createElement('h2');
  tabheader.innerHTML = 'Our Menu';

  tab.appendChild(tabheader);
  tab.appendChild(createMenuItems(10));
  return tab;
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