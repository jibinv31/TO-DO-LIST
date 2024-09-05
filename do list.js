let tasks = []; // Array to hold tasks

/* Function to render tasks dynamically */
function renderTasks() {
    const taskList = document.getElementById('task-list'); // Get task list element
    taskList.innerHTML = ''; // Clear current task list

    tasks.forEach((task, index) => { // Loop through tasks array
        const li = document.createElement('li'); // Create a list item for each task
        li.classList.toggle('completed', task.completed); // Add 'completed' class if task is done

        const taskText = document.createElement('span'); // Task name
        taskText.textContent = task.name; // Set task name

        const taskTime = document.createElement('span'); // Task added time
        taskTime.textContent = `Added: ${task.time}`; // Set added time

        const taskDeadline = document.createElement('span'); // Task deadline
        taskDeadline.textContent = `Due: ${task.deadline}`; // Set deadline

        const completeButton = document.createElement('button'); // Button for task completion
        completeButton.textContent = task.completed ? 'Undo' : 'Complete'; // Toggle button text
        completeButton.classList.add('btn-complete'); // Add class for styling
        completeButton.addEventListener('click', () => toggleTask(index)); // Toggle task completion

        const deleteButton = document.createElement('button'); // Button for task deletion
        deleteButton.textContent = 'Delete'; // Button text
        deleteButton.classList.add('btn-delete'); // Add class for styling
        deleteButton.addEventListener('click', () => deleteTask(index)); // Delete task

        const taskDetails = document.createElement('div'); // Task details container
        taskDetails.appendChild(taskText); // Append task name
        taskDetails.appendChild(taskTime); // Append added time
        taskDetails.appendChild(taskDeadline); // Append deadline

        li.appendChild(taskDetails); // Add task details to list item
        li.appendChild(completeButton); // Add complete button
        li.appendChild(deleteButton); // Add delete button

        taskList.appendChild(li); // Append list item to task list
    });
}

/* Function to get current time */
function getCurrentTime() {
    const now = new Date(); // Get current date/time
    return now.toLocaleString(); // Format time
}

/* Function to add a new task */
function addTask() {
    const taskInput = document.getElementById('new-task'); // Get task input
    const deadlineInput = document.getElementById('task-deadline'); // Get deadline input
    const taskName = taskInput.value.trim(); // Get task name
    const taskDeadline = deadlineInput.value; // Get deadline

    if (taskName && taskDeadline) { // Check if task and deadline are provided
        tasks.push({ name: taskName, completed: false, time: getCurrentTime(), deadline: new Date(taskDeadline).toLocaleString() }); // Add task to array
        taskInput.value = ''; // Clear input fields
        deadlineInput.value = ''; // Clear deadline input
        renderTasks(); // Render task list
    }
}

/* Function to toggle task completion */
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed; // Toggle completion status
    renderTasks(); // Re-render task list
}

/* Function to delete a task */
function deleteTask(index) {
    tasks.splice(index, 1); // Remove task from array
    renderTasks(); // Re-render task list
}

document.getElementById('add-task-button').addEventListener('click', addTask); // Add task on button click
