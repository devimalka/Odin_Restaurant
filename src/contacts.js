function contactsTab(){
  let tab = document.createElement('div');
  tab.id = 'contactab';

  let header = document.createElement('h2');
  header.innerHTML = 'Contact Us';

  tab.appendChild(header);
  return tab;
}

export default contactsTab;