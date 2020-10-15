var itemText = document.getElementById('itemText')
var addButton = document.getElementById('addButton');
var list = document.getElementById('list');


function addItem() {
    // DOM manipulation takes the content of the text input and adds it to the list
    var newElement = document.createElement('li');
    var newTextNode = document.createTextNode(itemText.value);
    newElement.appendChild(newTextNode);
    list.appendChild(newElement);

    itemText.value = '';
}

addButton.addEventListener('click', addItem);