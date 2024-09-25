// Access DOM elements
const header = document.getElementById('header');
const paragraph = document.getElementById('paragraph');
const changeContentButton = document.getElementById('changeContentButton');
const addElementButton = document.getElementById('addElementButton');
const removeElementButton = document.getElementById('removeElementButton');

// Function to change content
function changeContent() {
    header.textContent = 'Updated Header';
    paragraph.textContent = 'The paragraph text has been updated.';
}

// Function to add a new element
function addElement() {
    const newElement = document.createElement('div');
    newElement.textContent = 'Newly added element';
    document.body.appendChild(newElement);
}

// Function to remove the last element
function removeElement() {
    const elements = document.body.getElementsByTagName('*');
    if (elements.length > 0) {
        document.body.removeChild(elements[elements.length - 1]);
    }
}

// Add event listeners to buttons
changeContentButton.addEventListener('click', changeContent);
addElementButton.addEventListener('click', addElement);
removeElementButton.addEventListener('click', removeElement);