// Step 1: Select DOM elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Step 2: Add event listener to the Add button
addTaskBtn.addEventListener("click", addTask);

// Optional: Add task with Enter key too
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Step 3: Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") return; // Skip if input is empty

  // Step 4: Create a new list item
  const li = document.createElement("li");
  li.classList.add("task-item");

  const span = document.createElement("span");
  span.textContent = taskText;

  // Toggle 'completed' class when span is clicked
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Create a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Using Font Awesome
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    
    li.remove();
  });

  // Wrap buttons
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("task-buttons");
  buttonDiv.appendChild(deleteBtn);

  // Add elements to the list item
  li.appendChild(span);
  li.appendChild(buttonDiv);

  // Append to the task list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = "";
}
