//Task 1
// let getId = document.getElementById("first");
// console.log(getId);

// let getClass = document.getElementsByClassName("secondDiv");
// console.log(getClass);

// let getTagName = document.getElementsByTagName('p');
// console.log(getTagName);

// let select = document.querySelector('p');
// console.log(select);

// let selectAll = document.querySelectorAll('p');
// console.log(selectAll);



//Task 2
// function changing (idName, text) {
//     document.querySelector(idName).textContent = text;
// }

// changing('p', "Bye Bye");
// console.log(changing);


//Task 3
// document.querySelector('button').style.backgroundColor = "red";



//Task 4
function showList() {
    var list = document.getElementById("list");
    list.style.display = "block";
}
function addItem() {
    var list = document.getElementById("list");
    var newItem = document.createElement("li");
    newItem.textContent = "new element";
    list.appendChild(newItem);
}





