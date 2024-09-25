const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Retrieve tasks from localStorage or initialize an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to render the list of tasks
function renderTasks() {
    todoList.innerHTML = ''; // Clear existing tasks
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = '${task} <button class="delete" data-index="${index}">Delete</button>';
        todoList.appendChild(li);
    });
}

// Function to add a new task
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTask = todoInput.value.trim();
    if (newTask !== '') {
        tasks.push(newTask);
        saveTasks(); // Save to localStorage
        renderTasks(); // Update UI
        todoInput.value = ''; // Clear input
    }
});

// Function to delete a task
todoList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        const index = event.target.getAttribute('data-index');
        tasks.splice(index, 1);
        saveTasks(); // Update localStorage
        renderTasks(); // Update UI
    }
});

// Initial rendering of tasks when the page loads
renderTasks();