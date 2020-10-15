var itemText = document.getElementById('itemText')
var addButton = document.getElementById('addButton');
var list = document.getElementById('list');


function addItem() {

    // Don't add a list item if the input box is blank
    if (itemText.value === '') {
        return false;
    }
    

    // DOM manipulation takes the content of the text input and adds it to the list
    // It also adds the HTML to include the delete button
    var newElement = document.createElement('li');
    var newTextNode = document.createTextNode(itemText.value);
    newElement.appendChild(newTextNode);
    list.appendChild(newElement);
    newElement.innerHTML = newElement.textContent + '<span class=\'deleteButton\'>&#10006;</span>';

    itemText.value = '';
}

addButton.addEventListener('click', addItem);





function itemClick(e) {
    var target = e.target;

    // Do nothing if the user clicks on the UL element
    if (target.tagName === 'UL') {
        return false;
    }

    // Delete the list item if the user clicks on the delete button
    if (target.tagName === 'SPAN') {
        var listItem = target.parentElement;
        list.removeChild(listItem);
        return false;
    }

    // Cross out or un-cross a list item depending on if it has been checked off or not
    if (target.tagName === 'LI') {
        if (target.className === 'checked') {
            target.removeAttribute('class');
        }
        else {
            target.setAttribute('class', 'checked');
        }
    }
}

list.addEventListener('click', function(e){itemClick(e);});