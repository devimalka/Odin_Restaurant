
// create the container to contain all the items
function createContainer(){
  let container = document.createElement('div');
  container.id = "container";
  return container;

}

// get container
function getContainer(){
  let container = document.getElementById('container');
  return container;
}

// main header
function mainHeader(){
  let mHeader = document.createElement('div');
  mHeader.id = 'mheader';
  return mHeader;
}

export {createContainer, getContainer, mainHeader};
