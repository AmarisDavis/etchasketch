/*  */
let color = "black";

document.addEventListener("DOMContentLoaded", function() {
    console.log("hi");
    makeCanvas(16);

    /* This section of code is dedicated to the select size button */
    let select = document.querySelector(".size");
    select.addEventListener("click", function(){
        let size = promptSize();
        makeCanvas(size);
    })


    /* this section of code is dedicated to the solor select option */
    let colors = document.querySelectorAll(".color");

    colors.forEach(function(button){
        button.addEventListener("click", function(){
            let cChoice = button.innerHTML;
            changeColor(cChoice);
            console.log("you clicked a color button");
            console.log(cChoice);
            console.log(color);
            
        })
    })





    /*promptSize();*/
})




function promptSize() {

    let size = prompt("Choose what size you want your canvas");
    let title = document.querySelector('.titles');
    let newElement = document.createElement('div');
    title.insertAdjacentElement('beforeend', newElement);
    newElement.style.fontSize = "medium";
    

     if (size <= 2 || size > 500 ){
        newElement.innerText= "Please insert a number between 3 and 500";
     }
     else if( size == "" || size == null){
        newElement.innerText = "Enjoy Drawing!"
        makeCanvas(16);
     }
     else{
        newElement.innerText = "Enjoy Drawing!"
        return size;
     }
}


function changeColor(choice){
    let choices = choice;
    color = choices;

}

function colorBackground(){
    if(color == ""){
        this.style.backgroundColor = 'black';
    }
    else {
        this.style.backgroundColor = color;
    }
}

function makeCanvas(size) {
    let canvas = document.querySelector(".canvas");

    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let divs = size * size;

    for (let i = 0; i < divs; i++){
        newElem = document.createElement('div');
        newElem.addEventListener("mouseover",colorBackground);
        canvas.insertAdjacentElement('beforeend',newElem);
}
}
