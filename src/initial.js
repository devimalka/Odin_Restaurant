const contentDiv = document.createElement('div');

function init(){
    contentDiv.id = 'content';

    let heading = document.createElement('h1');
    heading.innerHTML = "My Restaurant";
    contentDiv.appendChild(heading);


    let img = document.createElement('img');
    img.src = '../src/close-up-cooking-dinner-46239.jpg';
    img.style = "width: 500px";
    contentDiv.appendChild(img);

    let lorem = document.createElement('p');
    lorem.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut justo eget justo lobortis efficitur. Nulla facilisi. Phasellus volutpat nisi vitae ipsum ullamcorper, ac congue odio tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus consectetur ipsum ac turpis lacinia, vel tristique lectus rhoncus. Proin nec orci vitae justo bibendum suscipit. Ut non lorem ac mi tempus ultrices. Donec in odio sit amet libero commodo tincidunt. Integer a odio ac sapien facilisis faucibus. Phasellus ac luctus metus. Fusce nec neque mauris. Nulla facilisi. Cras id felis ac odio luctus interdum. Sed id nisi eget leo sodales facilisis. Duis bibendum justo id efficitur ullamcorper. Vivamus id diam vestibulum, lacinia urna a, mattis eros.    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ac felis quis felis fermentum volutpat. Sed convallis fringilla nisi, ac tempus lacus aliquet sit amet. Fusce tincidunt vestibulum quam, sed tincidunt risus eleifend ac. Aenean tristique eget leo id sollicitudin. Sed dictum, turpis eget scelerisque elementum, leo elit sagittis risus, a consequat dolor neque vitae nunc. Quisque accumsan sapien vitae velit placerat, ac molestie lorem suscipit. Ut tincidunt euismod dolor, vitae hendrerit justo consequat vitae.Maecenas vel tortor id libero luctus accumsan. Mauris et purus vitae quam luctus eleifend sit amet in dolor. Integer convallis tellus et elit luctus, vel pharetra enim fermentum. Donec mollis nisi quis dui vestibulum, eget fermentum ipsum vulputate. Curabitur vitae est at elit pellentesque mattis. Aliquam non enim vitae nunc venenatis malesuada sit amet in magna. Duis luctus est non metus lacinia, vel tincidunt mi ultrices. Donec eleifend orci in risus volutpat tempor. Vivamus id dictum nulla, id eleifend nulla. Aliquam malesuada leo nec nisi vestibulum, vel suscipit quam suscipit. Nullam molestie ligula ut leo tincidunt, a laoreet orci cursus'
    contentDiv.appendChild(lorem);
    document.body.appendChild(contentDiv);
}




export default init;
export { contentDiv };