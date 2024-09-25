// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const modifyButton = document.getElementById('modifyButton');
    const deleteButton = document.getElementById('deleteButton');
    const searchInput = document.getElementById('searchInput');

    // Function to search for an item by ID and highlight it
    function searchItem() {
        const id = searchInput.value.trim();
        if (id) {
            const item = document.querySelector(`#itemList .item[data-id='${id}']`);
            if (item) {
                // Remove any previous highlights
                document.querySelectorAll('#itemList .item').forEach(i => i.classList.remove('highlight'));
                // Highlight the found item
                item.classList.add('highlight');
            } else {
                alert('Item not found.');
            }
        } else {
            alert('Please enter an item ID.');
        }
    }

    // Function to modify an item by ID
    function modifyItem() {
        const id = searchInput.value.trim();
        if (id) {
            const item = document.querySelector(`#itemList .item[data-id='${id}']`);
            if (item) {
                item.textContent = `Modified Item ${id}`;
                item.classList.add('highlight');
            } else {
                alert('Item not found.');
            }
        } else {
            alert('Please enter an item ID.');
        }
    }

    // Function to delete an item by ID
    function deleteItem() {
        const id = searchInput.value.trim();
        if (id) {
            const item = document.querySelector(`#itemList .item[data-id='${id}']`);
            if (item) {
                item.remove();
            } else {
                alert('Item not found.');
            }
        } else {
            alert('Please enter an item ID.');
        }
    }

    // Attach event listeners to buttons
    searchButton.addEventListener('click', searchItem);
    modifyButton.addEventListener('click', modifyItem);
    deleteButton.addEventListener('click', deleteItem);
});
