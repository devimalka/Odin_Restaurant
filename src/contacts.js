import clearPage from "./tabsLoad";

function contactsTab(){
  let tab = document.createElement('div');
  tab.id = 'contactab';

  let header = document.createElement('h2');
  header.innerHTML = 'Contact Us';
  tab.appendChild(header);
  tab.addEventListener('click',loadapp);

  return tab;
}



function loadapp(){
  clearPage();
  let tab = document.getElementById('content');
  tab.innerHTML = 'test';
}
export default contactsTab;