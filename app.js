var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
}

function listLength(){
    return item.length;
}

function createListElement(){
    var li = document.createElement("li"); //create an element "list"
    li.appendChild(document.createTextNode(input.value)); //makes text from input field the list text
    ul.appendChild(li); //adds to list
    input.value = ""; //reset text input field


function crossOut(){
    li.classList.toggle("done");
}

li.addEventListener("click", crossout);

//start add delete button
var dBtn = document.createElement("button");
dBtn.appendChild(document.createTextNode("X"));
li.appendChild(dBtn);
dBtn.addEventListener("click", deleteListItem);
// end add delete button

//add class delete
function deleteListItem(){
    li.classList.add("delete")
}
}

function addListAfterClick(){
    if (inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(event){
    if (inputLength() > 0 && event.which ===13){
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);