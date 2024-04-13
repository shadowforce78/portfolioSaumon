function removeActualPage(){
    var mainDivContainer = document.getElementsByClassName('maincontainer');
    mainDivContainer[0].remove();
}


function project(){
    removeActualPage();

    var mainDivContainer = document.createElement('div');
    mainDivContainer.className = 'maincontainer';
    document.body.appendChild(mainDivContainer);
}