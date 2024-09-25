document.getElementById('fetchButton').addEventListener('click', async () => {
    const apiUrl = ''https://jsonplaceholder.typicode.com/posts'; // Replace with your API URL

    try {
        // Make the GET request
        const response = await fetch(apiUrl);
        
        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Parse the JSON data
        const data = await response.json();
        
        // Display the data in the <pre> element
        document.getElementById('dataOutput').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        // Handle any errors
        document.getElementById('dataOutput').textContent = 'Error: ' + error.message;
    }
});
