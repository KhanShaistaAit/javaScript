// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.getElementById('clickButton');
    const mouseoverDiv = document.getElementById('mouseoverDiv');
    const form = document.getElementById('myForm');
    const formMessage = document.getElementById('formMessage');

    // Handle click event
    clickButton.addEventListener('click', () => {
        clickButton.classList.toggle('clicked');
        alert('Button clicked!');
    });

    // Handle mouseover event
    mouseoverDiv.addEventListener('mouseover', () => {
        mouseoverDiv.classList.add('hover-effect');
    });

    mouseoverDiv.addEventListener('mouseout', () => {
        mouseoverDiv.classList.remove('hover-effect');
    });

    // Handle form submission event
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        formMessage.classList.remove('hidden');
        form.reset(); // Clear the form fields
    });
});
