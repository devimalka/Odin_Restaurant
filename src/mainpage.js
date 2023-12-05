import clearPage from "./tabsLoad";

function loadMainPage(){
    let content = document.getElementById('content')

    let div = document.createElement('div');
    let image = document.createElement('img');
    image.src = "../src/close-up-cooking-dinner-46239.jpg";
    div.appendChild(image);

    let para = document.createElement('p');
    para.innerHTML = "loem ipsum dollar imut";

    div.appendChild(para);


    clearPage();
    content.appendChild(div);

}


export default loadMainPage;