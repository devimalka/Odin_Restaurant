function contentDiv(){
    let ContentDiv = document.createElement('div');
    ContentDiv.id = 'content';
    return ContentDiv;
}

function containerDiv(){
    let div = document.createElement('div');
    div.id = 'container';
    return div;
}

function navBar(){
    let navbar = document.createElement('div');
    navbar.id = 'navbar';

    navbar.appendChild(createHeader("title1"));
    navbar.appendChild(createHeader("title2"));
    navbar.appendChild(createHeader("title3"));

    return navbar;
}

function createHeader(headerTite){
    let header = document.createElement('h1');
    header.id = headerTite;
    header.innerHTML = headerTite;
    return header
}

function initialPageLoad(){
    let contendiv = contentDiv();
    contendiv.appendChild(navBar());
    contendiv.appendChild(containerDiv());
    document.body.appendChild(contendiv);
}

export default initialPageLoad;