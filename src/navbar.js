function createNav(){
    let navdiv = document.createElement('div');
    navdiv.id = 'navdiv';

    navdiv.appendChild(createTab('contacts'));
    navdiv.appendChild(createTab('Menu'));

    console.log('test');
    return navdiv;
}

function createTab(tabname){
    let tab = document.createElement('div');
    tab.classList = tabname;
    
    let header = document.createElement('h2');
    header.innerHTML = tabname;

    return tab;
}


export default createNav;
