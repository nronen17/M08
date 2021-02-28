// Create a new element and store it in a variable.
var newEl = document.createElement('li');

// Create a text node and store it in a variable.
var newText = document.createTextNode('quinoa');

// Attach the new text node to the new element.
newEl.appendChild(newText);

// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position.
position.appendChild(newEl);


document.getElementById("addGroceryForm").addEventListener('submit', function(e){
    e.preventDefault();
    var inputValue = (e.target[0].value);
    var newEl = document.createElement('li');
    var newText = document.createTextNode(inputValue);
    newEl.appendChild(newText);
    var position = document.getElementsByTagName('ul')[0];
    position.appendChild(newEl);
    e.target[0].value = "";
});